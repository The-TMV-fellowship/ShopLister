import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import NotFound from "./NotFound/NotFound";
import RegisterPage from "./Register/RegisterPage";
import WelcomePage from "./WelcomePage/WelcomePage";
import ShoppingListPage from "./ShoppingListPage/ShoppingListPage";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/shoppinglist" element={<ShoppingListPage/>}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
