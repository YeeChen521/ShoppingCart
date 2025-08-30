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
