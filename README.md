# Nexus Marketplace

A beautiful listing platform where users can browse items posted by others.

## Live Demo

Check out the live version here: [Nexus Marketplace]([https://nexus-market-place.vercel.app/users](https://nexus-marketplace.netlify.app/))

## What I Built

I created a modern website where people can see items that others are selling. Each listing shows:
- The seller's name and contact info
- Whether the seller is active or not
- A picture of the item
- A description of what's being sold

## Technologies I Used

### Frontend Framework
- **React**: I used React to build the user interface
- **TypeScript**: For adding type safety to my code
- **Vite**: As a fast build tool that makes development quicker

### Styling
- **Tailwind CSS**: For styling everything without writing much CSS
- **Shadcn UI**: For ready-made components that look nice
- **Custom CSS**: Some extra styling to make things look even better

### State Management
- **Redux Toolkit**: To manage data across the whole app
- **React Redux**: To connect Redux with React components

### Routing
- **React Router**: To create different pages in the app

### Other Tools
- **React Toastify**: For showing nice notification messages
- **Axios**: For fetching data (simulated in this project)

## Features

- **Dark/Light Mode**: Users can switch between dark and light themes
- **Responsive Design**: Works on phones, tablets, and computers
- **Search**: Users can search for items by name or description
- **View Toggle**: Switch between card view and table view
- **Item Details**: Click on an item to see more information

## Screenshots

### Home Page - Card View
![Card View](./src/images/Screenshot%20\(11\).png)

### Home Page - Table View
![Table View](./src/images/Screenshot%20\(12\).png)

### Item Details
![Item Details](./src/images/Screenshot%20\(13\).png)

### Search Functionality
![Search Feature](./src/images/Screenshot%20\(14\).png)

### Dark Mode
![Dark Mode](./src/images/Screenshot%20\(15\).png)

## How I Built It

1. First, I set up the project with Vite, React, and TypeScript
2. I added Tailwind CSS and Shadcn UI for styling
3. I created a Redux store to manage the app's data
4. I built components for cards, tables, and modals
5. I added routing to navigate between pages
6. I implemented search functionality and view toggling
7. I made sure everything works on different screen sizes
8. I added dark mode support

### Data Handling

For this project, I'm using static JSON data stored locally. However, I've built the app with real-world usage in mind:

- Created a reusable API connector service using Axios that makes it easy to switch to a real backend later
- Set up Redux slices that can be easily modified to work with real API endpoints
- Added loading states and error handling as if working with real data

### Component-Driven Approach

I built this project using a component-driven approach:

- Each UI element is a reusable component
- Components are organized by function (UI components, feature components)
- Used composition to build complex UIs from simple parts
- Maintained consistent styling and behavior across components

## Folder Structure

```
src/
├── assets/           # Images and static assets
├── components/       # Reusable UI components
│   ├── ui/           # Basic UI components (buttons, cards, etc.)
│   └── Common/       # Shared components used across features
├── data/             # Static JSON data
├── lib/              # Utility functions
├── pages/            # Page components
├── reducer/          # Redux root reducer
├── services/         # API services
│   └── apiconnector.ts  # Reusable API connector
├── slices/           # Redux slices
├── App.css           # Global styles
├── App.tsx           # Main app component
├── index.css         # Base styles
└── main.tsx          # Entry point
```

## How to Run the Project

1. Clone the repository
2. Install dependencies:
```
npm install
```
3. Start the development server:
```
npm run dev
```
4. Open your browser and go to the URL shown in the terminal




