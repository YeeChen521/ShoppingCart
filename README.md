# Shopping Cart Application
This is a simple shopping cart application built with React. It allows users to browse products, add them to their cart, and manage their cart items.

## Folder structure
```
src/
├── assets/
│   └── welcome.jpg
│
├── component/
│   ├── NavBar.jsx        # Navigation bar
│   ├── User.jsx          # Authentication
│   ├── Shop.jsx          # Shop page, cart, quantity adjustment, price
│   ├── Homepage.jsx      # Welcome content and new arrivals
│   ├── Categories.jsx    # Group products by category
│   ├── ProductCard.jsx   # Display product info, with quantity increment/decrement
│   └── login.jsx         # Authentication
│
├── context/
│   └── CartContext.jsx   # Holds cart items, addToCart, etc.
│
├── util/
│   └── api.js            # API utilities
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```
## Features
- Browse products by category
- Add products to the cart
- Adjust product quantities in the cart
- View total price of items in the cart

## Technologies Used
- React
- React Context API for state management
- CSS for styling
- Fetch API for data retrieval

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YeeChen521/ShoppingCart
    ```
2. Navigate to the project directory:
    ```bash
    cd shopping-cart-app
    ```
3. Install dependencies:
    ```bash 
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage
- Browse through the products on the homepage.
- Click on a product to view its details and add it to your cart.
- Adjust the quantity of items in your cart as needed.
- View the total price of items in your cart.
- Proceed to checkout when ready.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.


