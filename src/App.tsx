import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import AddListFormPage from "./NewDesign/AddListFormPage/AddListFormPage";
import HomePage from "./NewDesign/HomePage/HomePage";
import LoginPage from "./NewDesign/LoginPage/LoginPage";
import RegisterPage from "./NewDesign/RegisterPage/RegisterPage";
import WelcomePage from "./NewDesign/WelcomePage/WelcomePage";
import NotFound from "./NotFound/NotFound";
import ShoppingListPage from "./ShoppingListPage/ShoppingListPage";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/shoppinglist" element={<ShoppingListPage />} />'
        <Route path="/addlist" element={<AddListFormPage />} />'
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
