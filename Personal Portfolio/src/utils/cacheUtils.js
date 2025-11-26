/**
 * Utility for managing cached data with versioning and expiration
 */

const CACHE_VERSION = "v1.0"; // Increment this to invalidate all caches
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Get cached data from storage
 * @param {string} key - Cache key
 * @param {boolean} useLocalStorage - Use localStorage instead of sessionStorage
 * @returns {Object|null} - Cached data or null if expired/invalid
 */
export const getCachedData = (key, useLocalStorage = false) => {
  try {
    const storage = useLocalStorage ? localStorage : sessionStorage;
    const cachedItem = storage.getItem(key);
    
    if (!cachedItem) return null;
    
    const { data, timestamp, version } = JSON.parse(cachedItem);
    
    // Check if cache version matches
    if (version !== CACHE_VERSION) {
      storage.removeItem(key);
      return null;
    }
    
    // Check if cache is expired
    const now = Date.now();
    if (now - timestamp > CACHE_DURATION) {
      storage.removeItem(key);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error("Error reading from cache:", error);
    return null;
  }
};

/**
 * Set cached data in storage
 * @param {string} key - Cache key
 * @param {*} data - Data to cache
 * @param {boolean} useLocalStorage - Use localStorage instead of sessionStorage
 */
export const setCachedData = (key, data, useLocalStorage = false) => {
  try {
    const storage = useLocalStorage ? localStorage : sessionStorage;
    const cacheItem = {
      data,
      timestamp: Date.now(),
      version: CACHE_VERSION,
    };
    storage.setItem(key, JSON.stringify(cacheItem));
  } catch (error) {
    console.error("Error writing to cache:", error);
    // Handle quota exceeded errors gracefully
    if (error.name === "QuotaExceededError") {
      console.warn("Storage quota exceeded. Clearing old cache...");
      clearCache(useLocalStorage);
    }
  }
};

/**
 * Clear all cached data
 * @param {boolean} useLocalStorage - Clear localStorage instead of sessionStorage
 */
export const clearCache = (useLocalStorage = false) => {
  const storage = useLocalStorage ? localStorage : sessionStorage;
  const keys = Object.keys(storage);
  keys.forEach((key) => {
    if (key.startsWith("cache_")) {
      storage.removeItem(key);
    }
  });
};

/**
 * Clear specific cached item
 * @param {string} key - Cache key to remove
 * @param {boolean} useLocalStorage - Use localStorage instead of sessionStorage
 */
export const removeCachedData = (key, useLocalStorage = false) => {
  const storage = useLocalStorage ? localStorage : sessionStorage;
  storage.removeItem(key);
};

