# Campoal Project Documentation

**Campoal** is a complete solution for launching social movements. It's a platform where anyone can start a social movement, collect supporters, and fundraise to change something in society.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Running the Project Locally](#running-the-project-locally)
3. [Code Structure Overview](#code-structure-overview)
4. [Libraries and Tools Used](#libraries-and-tools-used)
5. [Design Decisions](#design-decisions)
6. [Additional Steps and Configurations](#additional-steps-and-configurations)

## Project Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/campoal.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd campoal
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Project Locally

To run the project locally, use the following command:

```bash
npm run dev
```

## Tools Used

### Next.js

Next.js is a React framework that provides features such as server-side rendering and generating static websites for React-based web applications. It is used in this project for its out-of-the-box support for SSR (Server-Side Rendering) and SSG (Static Site Generation), which helps in improving the performance and SEO of the application.

### React

React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes. It's used in this project to build the UI components.

### Lucide

Lucide is a customizable SVG icon library. It's used in this project to provide icons for the UI.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework. It's used in this project for styling the UI components. It allows for more flexibility and control over the styles.

### Zod

Zod is a TypeScript-first schema declaration and validation library. It's used in this project for form validation.

### TypeScript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It's used in this project to write safer code by enforcing types.

### Shadcn

Shadcn is used in this project for theming and customizing components, making it easier to maintain a consistent design system.

### React Hook Form

React Hook Form is a library for managing form state and validation. It's used in this project to handle form data efficiently and perform validation.

## Project Structure

The project follows a standard Next.js project structure with some additional directories for organization.

- **src/**: This is where the main application code resides. It contains all the React components, hooks, and utility functions.
- **app/**: Contains the root layout component and global styles.
- **components/**: Contains all the reusable React components.
- **.next/**: This is a generated directory where Next.js stores its generated files for the build.
- **public/**: This directory stores all the static files which can be accessed in the browser.
- **package.json**: This file contains the list of project dependencies and scripts.

## Layout and Code Structure

The layout of the application is defined in the `RootLayout` function in the `src/app/layout.tsx` file. This function takes `children` as a prop and renders them within the main layout of the application.

The code structure of the project is modular, with each React component defined in its own file in the `src/components/` directory. Each component file exports a single default function that returns a React component. For example, the Navbar component is defined in the `src/components/navbar.tsx` file.

The `package.json` file contains the list of dependencies and devDependencies used in the project, along with the scripts to run, build, and lint the project.

The `README.md` file contains the basic information about the project.

## Additional Steps and Configurations

- **Environment Variables**: Create a .env file in the root directory and add any necessary environment variables.

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```

- **Building the Project**: To build the project for production, use the following command:

```bash
npm run build
```

- **Linting and Formatting**: Ensure code quality by running linting and formatting scripts.

```bash
npm run lint
npm run format
```
