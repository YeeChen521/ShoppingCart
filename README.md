# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Folder structure
|- src
    |- assets
        |welcome.jpg
    |- component
        |- NavBar.jsx
        |- User.jsx // for the authentication
        |- Shop.jsx // show shop page ,cart , quantity adjiustment and price
        |- Homepage.jsx // show some welcome content and new arrival
        |- Categories.jsx // group products by category
        |- ProductCard.jsx //display product info, has quantity input, increment/decrement
        |- login.jsx // for the authentication
    |- context
        |- CardContext.jsx // hold the cart item , addtocard...
    |- util
        |- api.js
    |- App.css
    |- App.jsx
    |- index.css
    |- main.jsx