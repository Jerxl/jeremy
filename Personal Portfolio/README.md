# Jeremy Zhao - Personal Portfolio

A modern, responsive portfolio website showcasing my work as a Computer Software Engineering student and Automation Engineer. Built with React, Vite, and Tailwind CSS.

🌐 **Live Site**: [jeremyzhaoxl.com](https://jeremyzhaoxl.com)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Project Showcase**: Interactive project gallery with detailed modals and image lightbox
- **Skills Display**: Dynamic skills section with icons and proficiency levels
- **Contact Form**: Integrated contact form with Airtable backend
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support
- **Accessibility**: WCAG 2.1 compliant with ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized with caching, lazy loading, and efficient data fetching

## 🛠️ Tech Stack

### Frontend

- **React 18.2.0** - UI library
- **Vite 5.0.0** - Build tool and dev server
- **React Router DOM 6.20.0** - Client-side routing
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **Bootstrap Icons 1.11.2** - Icon library

### Libraries & Tools

- **React Slick** - Image carousel/slider
- **Swiper** - Touch slider for skills section
- **Marked** - Markdown parser for project descriptions
- **DOMPurify** - XSS protection for HTML sanitization
- **Typed.js** - Typing animation library

### Backend Integration

- **Airtable API** - Content management for projects, skills, and contact submissions

## 📁 Project Structure

```
Personal Portfolio/
├── public/
│   ├── 404.html          # Custom 404 page
│   └── ghspa.js          # GitHub Pages SPA routing
├── src/
│   ├── About/            # About page components
│   │   ├── About.jsx
│   │   └── About_Summary.jsx
│   ├── assets/           # Images, icons, and static files
│   ├── components/       # Reusable components
│   │   └── SocialLinks.jsx
│   ├── Contact_Me/       # Contact form component
│   ├── Home/             # Home page components
│   │   ├── home.jsx
│   │   ├── Skills.jsx
│   │   └── Skills.css
│   ├── Nav/              # Navigation and footer
│   ├── Skills/            # Skills display component
│   ├── utils/             # Utility functions
│   │   └── cacheUtils.js
│   ├── Work/              # Projects/work showcase
│   │   ├── work.jsx
│   │   ├── Modal.jsx
│   │   ├── Modal.css
│   │   ├── WorksProvider.jsx
│   │   └── WorksContext.jsx
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global app styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd "Personal Portfolio"
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
VITE_AIRTABLE_API=your_airtable_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (runs build first)

## 🎨 Key Features Explained

### Caching System

The portfolio implements a sophisticated caching system (`src/utils/cacheUtils.js`) that:

- Caches API responses for 24 hours
- Uses versioning for easy cache invalidation
- Handles storage quota exceeded errors gracefully
- Supports both localStorage and sessionStorage

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions on mobile devices
- Swipe gestures for image navigation on mobile

### Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Focus management for modals

### Performance Optimizations

- Image lazy loading
- Code splitting with React Router
- Efficient data fetching with caching
- Optimized bundle size

## 🔧 Configuration

### Environment Variables

Create a `.env` file with:

```
VITE_AIRTABLE_API=your_api_key
```

### Airtable Setup

The portfolio uses Airtable for content management. You'll need:

- A base with tables for:
  - Projects/Works
  - Skills
  - Contact submissions
- API key with appropriate permissions

### Deployment

The project is configured for GitHub Pages deployment:

- Uses `gh-pages` package for deployment
- Includes `ghspa.js` for SPA routing support
- Base path configured in `vite.config.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report issues, please feel free to open an issue or submit a pull request.

## 📄 License

This project is private and personal. All rights reserved.

## 👤 Author

**Jeremy Zhao (Zhao Xinlei)**

- Portfolio: [jeremyzhaoxl.com](https://jeremyzhaoxl.com)
- LinkedIn: [zhao-xinlei](https://www.linkedin.com/in/zhao-xinlei/)
- GitHub: [Jerxl](https://github.com/Jerxl)
- Email: jeremyzhaoxl@gmail.com

## 🙏 Acknowledgments

- Airtable for content management
- Bootstrap Icons for iconography
- All the open-source libraries that made this project possible

---

**Note**: This portfolio is actively maintained and updated. For the latest improvements and changes, see `IMPROVEMENTS_SUMMARY.md`.
