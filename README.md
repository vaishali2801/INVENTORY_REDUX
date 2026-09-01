📦 Redux Inventory Management System

Manage products efficiently with Redux Toolkit.

A simple and responsive Inventory Management Application built with React and Redux Toolkit. This project allows users to manage product inventory by adding, editing, deleting, searching, and sorting products.

The application uses Redux Toolkit for centralized state management and provides a structured way to perform CRUD operations on inventory products.

📌 About the Project

The Redux Inventory Management System is designed to practice and understand state management using Redux Toolkit.

Users can manage products with the following details:

Product Name
Price
Quantity
Category

The application stores and manages inventory data centrally using a Redux slice.

✨ Features
➕ Add Product

Users can add new products to the inventory by entering:

Product Name
Price
Quantity
Category

Each new product receives a unique ID.

✏️ Edit Product

Users can select an existing product and update its details.

The application uses an editValue state in Redux to store the selected product for editing.

🗑️ Delete Product

Users can remove products from the inventory.

The delete functionality filters the selected product from the product list using its ID.

🔍 Search Product

Users can search for products by their name.

↕️ Sort Products

Products can be sorted in ascending or descending order.

The search and sorting state is managed using React's useState.

🗂️ Product Categories

Products can be organized into categories.

Example categories:

Electronics
Clothing
Grocery
Furniture
Accessories
🧠 Redux State Management

The project uses Redux Toolkit's createSlice for managing inventory data.

The main Redux actions include:

ADD
EDIT
DELETE
SET EDIT VALUE

The slice manages the following operations:


🛠️ Technologies Used
Technology	Purpose
⚛️ React.js	Building the user interface
🟣 Redux Toolkit	State management
🔗 React Redux	Connecting React with Redux
⚙️ JavaScript	Application logic
🎨 React Bootstrap	UI components and responsive layout
🪝 React Hooks	Managing component state and side effects
⚡ Vite	Development environment
🪝 React Hooks Used
useState

Used for managing local component state such as:

Product form data
Search input
Sorting options

```
📂 Project Structure
REDUX_INVENTORY/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── Components/
│   │   ├── Add.jsx
│   │   └── ProductState.jsx
│   │
│   ├── feature/
│   │   └── inventorySlice.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
└── README.md
```
⚙️ Installation

Clone the repository:

git clone <your-repository-url>

Navigate to the project folder:

cd REDUX_INVENTORY

Install dependencies:

npm install
▶️ Run the Project

Start the development server:

npm run dev

Open the local URL provided in your terminal.
```
🔄 Application Flow
                    Inventory Application
                            │
                            ▼
                      Add Product
                            │
                            ▼
                      Dispatch Action
                            │
                            ▼
                    Redux Inventory Slice
                            │
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
           Add             Edit            Delete
            │               │               │
            └───────────────┼───────────────┘
                            │
                            ▼
                       Redux Store
                            │
                            ▼
                     Product List UI
                            │
                    ┌───────┴────────┐
                    ▼                ▼
                  Search            Sort

                  ```
🎯 Learning Outcomes

Through this project, I practiced:

React component development
Redux Toolkit
createSlice
Redux actions and reducers
useSelector
useDispatch
useState
useEffect
CRUD operations
Product search functionality
Product sorting
Array methods
find()
findIndex()
filter()
React Bootstrap
Centralized state management
🚀 Future Improvements

Possible improvements for future versions:

💾 Add localStorage support
🔌 Connect with a backend API
🗄️ Add MongoDB database support
🔐 Add user authentication
📊 Add inventory statistics
⚠️ Add low-stock alerts
🔍 Add advanced category filtering
📄 Add pagination
📱 Improve mobile responsiveness
🌙 Add dark mode
👩‍💻 Author

Vaishali Chauhan

Frontend / MERN Stack Developer
Learning and building projects with React, Redux Toolkit, and modern web technologies.

⭐ Support

If you like this project, please consider giving it a ⭐ star on GitHub.

📄 License

This project is created for learning and educational purposes.