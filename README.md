# 🌟  Integration Suite Portal

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

**A modern, feature-rich integration management portal built with cutting-edge technologies**

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🛠️ Installation](#installation) • [🎨 UI Components](#ui-components)

</div>

---

## 🎯 Overview

 Integration Suite Portal is a comprehensive dashboard for managing  Cloud Integration content. Built with modern React ecosystem tools, it provides a seamless experience for developers and administrators to manage integration packages, runtime artifacts, value mappings, and message processing logs.

## ✨ Features

### 🔐 **Authentication & User Management**
- **OAuth 2.0 Integration** - Secure authentication with client credentials
- **Multi-tenant Support** - Organization-based user management
- **Role-based Access Control** - Different access levels for users
- **Session Management** - Persistent login with token-based authentication

### 📊 **Advanced Data Management**
- **TanStack Tables** - High-performance data tables with advanced features
- **Smart Pagination** - Efficient data loading with customizable page sizes
- **Real-time Filtering** - Dynamic search and filter capabilities
- **Column Sorting** - Multi-column sorting with visual indicators
- **Export Functionality** - CSV/JSON data export options

### 🎨 **Modern UI/UX**
- **Aceternity UI** - Beautiful, animated components
- **Shadcn/ui** - Accessible, customizable component library
- **Framer Motion** - Smooth animations and transitions
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Mode** - Theme switching with persistence

### 🗂️ **State Management**
- **Zustand** - Lightweight state management for global data
- **React Context API** - Component-level state sharing
- **LocalStorage Integration** - Data persistence across sessions
- **Optimistic Updates** - Immediate UI feedback

### 🔄 **Integration Content Management**
- **Package Management** - View, deploy, and manage integration packages
- **Runtime Artifacts** - Monitor deployed integration flows
- **Value Mappings** - Configure and manage data transformations
- **Message Processing Logs** - Real-time monitoring and debugging
- **Artifact Deployment** - One-click deployment capabilities

### 🎭 **Visual Components**
- **Interactive Dashboards** - Real-time metrics and KPIs
- **Data Visualizations** - Charts and graphs for monitoring
- **Gradient Backgrounds** - Beautiful animated backgrounds
- **Loading States** - Skeleton loaders and progress indicators
- **Toast Notifications** - User feedback system

## 🛠️ Technology Stack

### **Frontend Framework**
- **Next.js 15.5.3** - React framework with App Router
- **React 18** - Modern React with concurrent features
- **TypeScript** - Type-safe development

### **Styling & UI**
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Shadcn/ui** - Reusable component library
- **Aceternity UI** - Premium animated components
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon system

### **Data Management**
- **TanStack Table v8** - Powerful table functionality
- **Zustand** - Global state management
- **React Context API** - Local state sharing

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Turbopack** - Fast build system
- **PostCSS** - CSS processing

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/shivam261/Integration-Suite-Portal.git

# Navigate to project directory
cd Integration-Suite-Portal/my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🎨 UI Components

### **Aceternity UI Components**
- ✨ **Aurora Background** - Animated gradient backgrounds
- 🌊 **Background Beams** - Interactive beam animations  
- 📱 **Responsive Navbar** - Mobile-friendly navigation
- 🎭 **Hover Cards** - Interactive hover effects
- 📋 **Animated Tabs** - Smooth tab transitions

### **Shadcn/ui Components**
- 🏷️ **Form Components** - Input, Label, Button, Select
- 📊 **Data Display** - Table, Card, Badge, Avatar
- 🎯 **Navigation** - Tabs, Sidebar, Breadcrumb
- 💬 **Feedback** - Toast, Alert, Dialog, Sheet
- 🎨 **Layout** - Container, Grid, Flex utilities

### **Custom Components**
- 📈 **Dashboard Widgets** - Metrics and KPI cards
- 🔍 **Advanced Search** - Multi-filter search interface
- 📁 **File Upload** - Drag-and-drop file handling
- 🔔 **Notification Center** - Real-time alerts
- 📊 **Data Tables** - Enhanced TanStack tables

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages
│   ├── login/            # Authentication pages
│   └── api/              # API routes
├── components/           # Reusable components
│   ├── ui/              # UI component library
│   └── navigation_bar.tsx # Navigation component
├── lib/                 # Utility functions
└── styles/             # Global styles
```

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME= Integration Portal
```

### Tailwind Configuration
Custom color schemes, animations, and component styles are configured in `tailwind.config.js`.

## 📊 Data Tables Features

### **TanStack Table Integration**
- **Virtual Scrolling** - Handle large datasets efficiently
- **Column Resizing** - Adjustable column widths
- **Row Selection** - Single/multiple row selection
- **Inline Editing** - Edit data directly in tables
- **Custom Filters** - Advanced filtering options

### **Pagination Options**
- **Server-side Pagination** - Handle large datasets
- **Client-side Pagination** - Fast local navigation
- **Infinite Scroll** - Continuous data loading
- **Customizable Page Sizes** - 10, 25, 50, 100 rows per page

## 🎯 Performance Features

- **⚡ Turbopack** - Lightning-fast development builds
- **🔄 Incremental Static Regeneration** - Optimal loading performance
- **📦 Code Splitting** - Automatic bundle optimization
- **🖼️ Image Optimization** - Next.js built-in image optimization
- **💾 Caching Strategy** - Smart data caching with localStorage

## 🔐 Security Features

- **🛡️ CSRF Protection** - Cross-site request forgery prevention
- **🔒 Secure Headers** - Security-focused HTTP headers
- **👤 Session Management** - Secure token-based authentication
- **🔑 API Key Management** - Secure credential storage

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Aceternity UI** - For beautiful animated components
- **Shadcn** - For the excellent component library
- **TanStack** - For powerful table functionality
- **Vercel** - For the amazing Next.js framework

---

<div align="center">

**Built with ❤️ by Shivam Tripathi**

[⭐ Star this repo](https://github.com/shivam261/Integration-Suite-Portal) • [🐛 Report Bug](https://github.com/shivam261/Integration-Suite-Portal/issues) • [✨ Request Feature](https://github.com/shivam261/Integration-Suite-Portal/issues)

</div>
