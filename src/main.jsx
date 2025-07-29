import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartProvider from './context/CartProvider.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Homepage from './component/Homepage.jsx';
import Shop from './component/Shop.jsx';
import {ProductProvider} from './context/ProductProvider.jsx';
import ProductDetails from './component/ProductDetails.jsx';
import Cart from './component/Cart.jsx';
import Pay from './component/Pay.jsx';

// Define the routes for the application
// The App component will be the main layout, with nested routes for Homepage and Shop
// The Outlet component in App.jsx will render the matched child route components
// The CartProvider will provide the cart context to the entire application
// The createBrowserRouter function is used to create a router instance with the defined routes
// The RouterProvider component will render the router and manage navigation
// The createRoot function is used to render the application into the root element in the HTML
// The StrictMode is used to help identify potential problems in the application
// The CartProvider wraps the RouterProvider to ensure that the cart context is available throughout the app
// The createRoot function is used to render the application into the root element in the HTML    

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "shop", element: <Shop /> },
      { path: "product/:productId", element: <ProductDetails /> }, 
      { path: "cart", element: <Cart /> },
      { path: "pay", element: <Pay /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
)
