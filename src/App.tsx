import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import AddListFormPage from "./NewDesign/AddListFormPage/AddListFormPage";
import HomePage from "./NewDesign/HomePage/HomePage";
import LoginPage from "./NewDesign/LoginPage/LoginPage";
import RegisterPage from "./NewDesign/RegisterPage/RegisterPage";
import WelcomePage from "./NewDesign/WelcomePage/WelcomePage";
import NotFound from "./NotFound/NotFound";
import ShoppingListPage from "./NewDesign/ListDetailPage/ListDetailPage";
import AddItemFormPage from "./NewDesign/AddItemFormPage/AddItemFormPage";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route
          path="/shoppinglist"
          element={
            <RequireAuth>
              <ShoppingListPage />
            </RequireAuth>
          }
        />
        <Route
          path="/addlist"
          element={
            <RequireAuth>
              <AddListFormPage />
            </RequireAuth>
          }
        />
        <Route
          path="/addlistitem"
          element={
            <RequireAuth>
              <AddItemFormPage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
