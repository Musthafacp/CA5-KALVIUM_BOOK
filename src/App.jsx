import React from "react";
import Home from "./Components/Home";
import Form from "./Components/Form";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="/login" element={ <Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;
