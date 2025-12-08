# 🍔 Food Recipe App

A React-based web application that allows users to search for recipes, view ingredients, and follow cooking instructions. This project utilizes the **Spoonacular API** to fetch real-time recipe data.

## 🚀 Features

* **Recipe Search:** Search for any food item (e.g., "Pasta", "Pizza"). The search bar includes **debouncing** (500ms) to minimize unnecessary API calls while typing.
* **Recipe List:** Displays a grid of search results with images and titles.
* **Detailed View:** Select a recipe to see comprehensive details, including:
    * **Preparation Time** & **Servings**.
    * **Price per serving**.
    * **Dietary Tags:** Indicates if a recipe is Vegetarian or Vegan.
    * **Ingredients List:** Visual list of ingredients with images and precise amounts.
    * **Instructions:** Step-by-step cooking guide.
* **Responsive Design:** Built using CSS Modules and flexible containers for a clean user interface.

## 🛠️ Tech Stack

* **Frontend:** React (v18), JSX.
* **Build Tool:** Vite.
* **Styling:** CSS Modules.
* **API:** [Spoonacular API](https://spoonacular.com/food-api).

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone <repository-url>
cd recipe-app
```

### 2. Install dependencies

Make sure you have Node.js installed, then run:

```bash
npm install
```

### 3. Configure the API Key

This app requires a valid API key from **Spoonacular**.

1.  Sign up for a free API key at [Spoonacular API Console](https://spoonacular.com/food-api/console#Profile).
2.  Open `src/components/Search.jsx` and `src/components/FoodDetails.jsx`.
3.  Replace the placeholder string with your actual API Key:

    ```javascript
    const API_KEY = "YOUR_ACTUAL_API_KEY_HERE";
    ```

> **Note:** For better security, it is recommended to store your API key in a `.env` file (e.g., `VITE_API_KEY`) instead of hardcoding it.

### 4. Run the application

Start the development server:

```bash
npm run dev
```

The app should now be running on `http://localhost:5173/` (or the port shown in your terminal).

## 📂 Project Structure

```text
src/
├── components/
│   ├── modules/              # CSS Modules for styling (e.g., fooddetails.module.css)
│   ├── Container.jsx         # Outer layout wrapper
│   ├── FoodDetails.jsx       # Component for displaying full recipe info
│   ├── FoodItem.jsx          # Component for individual recipe cards in the list
│   ├── FoodList.jsx          # Component that maps through search results
│   ├── InnerContainer.jsx    # Flex item wrapper for layout splitting
│   ├── ItemIngredients.jsx   # Component for individual ingredients
│   ├── Nav.jsx               # Navigation bar component
│   └── Search.jsx            # Search input component with API logic
├── App.jsx                   # Main application component
├── App.css                   # Global styles
└── main.jsx                  # Entry point
```

## 🔮 Future Improvements

* **Environment Variables:** Secure the API key using `.env`.
* **Pagination:** Load more recipes as the user scrolls to handle large search results.
* **Error Handling:** Add UI feedback for network errors or when the daily API limit is reached.

## 📄 License

This project is created for educational purposes.
