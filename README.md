# IPO Dashboard

A comprehensive web application for tracking and managing Initial Public Offerings (IPOs) in the financial market. This dashboard provides real-time data visualization, IPO management, subscription tracking, and allotment status checking.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Workflow](#project-workflow)
- [Technologies Used](#technologies-used)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributors](#contributors)
- [Future Enhancements](#future-enhancements)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [License](#license)

## Overview

The IPO Dashboard is designed to provide financial professionals and investors with a centralized platform to monitor, analyze, and manage IPO-related activities. From tracking upcoming IPOs to checking allotment status, this application streamlines the entire IPO process workflow.

## Features

- **Dashboard Overview**: Visual representation of IPO performance metrics
- **IPO Management**: Add, edit, and track IPO listings
- **Subscription Tracking**: Monitor subscription rates across different categories
- **Allotment Status**: Check and verify IPO allotment status
- **API Management**: Generate and manage API keys for external integrations
- **User Management**: Admin controls for user accounts and permissions
- **Responsive Design**: Optimized for desktop and mobile devices

## Project Workflow

### 1. Project Initiation

- **Requirements Gathering**: Identified key features and user stories
- **Design Phase**: Created wireframes and mockups using Figma
- **Architecture Planning**: Decided on Next.js App Router and component structure

### 2. Development Setup

- **Repository Creation**: Set up Git repository with initial project structure
- **Environment Configuration**: Configured development, testing, and production environments
- **CI/CD Pipeline**: Established automated testing and deployment workflows

### 3. Development Process

- **Component Development**: Built reusable UI components using shadcn/ui
- **Page Implementation**: Created pages for dashboard, IPO management, etc.
- **State Management**: Implemented data flow using React Context API
- **API Integration**: Connected frontend with backend services

### 4. Testing

- **Unit Testing**: Tested individual components
- **Integration Testing**: Verified component interactions
- **User Acceptance Testing**: Validated features against requirements

### 5. Deployment

- **Build Optimization**: Optimized assets and code for production
- **Deployment to Staging**: Verified functionality in staging environment
- **Production Deployment**: Released application to production servers
- **Monitoring Setup**: Configured error tracking and performance monitoring

### 6. Maintenance

- **Bug Fixes**: Addressed issues reported by users
- **Feature Enhancements**: Implemented new features based on feedback
- **Performance Optimization**: Improved application speed and responsiveness


### Programming Languages

- **TypeScript 5.x**: Primary language for type-safe development
- **JavaScript ES6+**: Used for some utility functions
- **HTML5/CSS3**: For markup and styling

### Frameworks & Libraries

- **React 18.x**: UI component library
- **Next.js 14.x**: React framework for server-side rendering and routing
- **Tailwind CSS 3.x**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI
- **Lucide React**: Icon library
- **Canvas API**: For custom data visualizations

### State Management

- **React Context API**: For global state management
- **React Hooks**: For component-level state and effects

### Development Tools

- **TypeScript Compiler**: For static type checking
- **ESLint**: For code linting
- **Prettier**: For code formatting
- **Next.js Dev Server**: For local development
- **Git**: For version control
- **GitHub Actions**: For CI/CD workflows

### Backend Integration

- **REST API**: For data fetching and mutations
- **Fetch API**: For making HTTP requests
- **JSON**: For data interchange

## Dependencies

### Production Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.294.0",
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^2.1.0",
    "tailwindcss-animate": "^1.0.7"
  }
}
```
