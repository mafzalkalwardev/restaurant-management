# Fast Ease Restaurant Management

Fast Ease is a React restaurant management app for browsing menu items, managing a cart, and reviewing admin workflows for menus, orders, and audit logs.

## Features

- Customer-facing home, menu, and cart pages.
- Admin dashboard entry points for menu, order, and audit management.
- Shared cart state with item add and remove actions.
- Responsive Create React App build pipeline.

## Tech Stack

- React
- React Router
- Create React App / react-scripts
- CSS modules by feature area

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Run the test suite:

```bash
npm test -- --watchAll=false
```

Create a production build:

```bash
npm run build
```

## Project Structure

- `public/` contains app metadata and static images.
- `src/components/` contains shared UI components.
- `src/pages/` contains route-level pages.
- `src/styles/` contains feature-specific stylesheets.
