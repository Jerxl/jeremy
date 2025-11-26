// WorksProvider.js
import React, { useState, useEffect } from "react";
import WorksContext from "./WorksContext.jsx";

const WorksProvider = ({ children }) => {
  const [works, setWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.airtable.com/v0/appcrSl7Zgy2SpKCZ/tblwm7dsYEfwofGU6",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const fetchImages = data.records
          .filter((record) => record.fields["Status"] === "Publish")
          .map(async (record) => {
            if (record.fields["Cover Image"]) {
              const imageDataUrls = await Promise.all(
                record.fields["Cover Image"].map(async (image) => {
                  const imageUrl =
                    image.thumbnails && image.thumbnails.full
                      ? image.thumbnails.full.url
                      : "defaultImagePath.jpg";
                  try {
                    const imageResponse = await fetch(imageUrl);
                    const blob = await imageResponse.blob();
                    return new Promise((resolve, reject) => {
                      const reader = new FileReader();
                      reader.onloadend = () => resolve(reader.result);
                      reader.onerror = reject;
                      reader.readAsDataURL(blob);
                    });
                  } catch (error) {
                    console.error("Error fetching image:", error);
                    return "defaultImagePath.jpg";
                  }
                })
              );
              return {
                ...record,
                fields: { ...record.fields, ImageDataUrls: imageDataUrls },
              };
            } else {
              return {
                ...record,
                fields: {
                  ...record.fields,
                  ImageDataUrls: ["defaultImagePath.jpg"],
                },
              };
            }
          });

        const publishedWorks = await Promise.all(fetchImages);
        setWorks(publishedWorks);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching works data:", error);
        setError("Failed to load projects. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchWorks();
  }, []);

  return (
    <WorksContext.Provider value={{ works, setWorks, isLoading, error }}>
      {children}
    </WorksContext.Provider>
  );
};

export default WorksProvider;
