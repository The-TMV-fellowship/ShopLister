import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddList from "./AddList/AddList";
import "./App.scss";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./Login/LoginPage";
import NotFound from "./NotFound/NotFound";
import RegisterPage from "./Register/RegisterPage";
import ShoppingListPage from "./ShoppingListPage/ShoppingListPage";
import WelcomePage from "./WelcomePage/WelcomePage";

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
        <Route path="/addlist" element={<AddList />} />'
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
