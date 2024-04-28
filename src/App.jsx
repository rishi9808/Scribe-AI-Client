import "./App.css";
import { useState } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Doc_HomePage from "./Pages/Doc_HomePage.jsx";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/doc_home"
          element={<Doc_HomePage />}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
