import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddList from "./AddList/AddList";
import "./App.scss";
import Header from "./Header/Header";
import LoginPage from "./NewDesign/LoginPage/LoginPage";
//import HomePage from "./NewDesign/HomePage/HomePage";
import RegisterPage from "./NewDesign/RegisterPage/RegisterPage";
import WelcomePage from "./NewDesign/WelcomePage/WelcomePage";
import NotFound from "./NotFound/NotFound";
//import RegisterPage from "./Register/RegisterPage";
import ShoppingListPage from "./ShoppingListPage/ShoppingListPage";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/shoppinglist" element={<ShoppingListPage />} />'
        <Route path="/addlist" element={<AddList />} />'
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
