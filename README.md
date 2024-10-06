# Project Overview

This project contains two branches: `mvp`, `feature-mvp`, and `feature-mvp-without-app`.

## Branch: `feature/mvp-without-app`

This branch includes functionality such as:

- **Geolocation** integration
- Pop-up and modal window components
- Map implementation using **Leaflet** located in the file `map-component.tsx`
- A to-do list with the ability to add and remove users
- A controlled form for managing user input

Additionally, the branch features an **uncontrolled form** that operates within the `map-component.tsx`. 

## CSS Framework

The project includes the **Tailwind CSS** framework for styling.

## TypeScript and API

The project is built with **TypeScript** and utilizes an API that:

- Retrieves users created within `map-component.tsx`
- Supports creating, deleting, and updating users via **Axios**
- Uses mock API for testing purposes

## Running the Project

To run the project, follow these steps:

1. Install the required Node modules by running:

   ```bash
   yarn install