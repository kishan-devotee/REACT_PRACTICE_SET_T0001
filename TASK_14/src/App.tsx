import React from "react";
import RegistrationForm from "./components/RegisterForm";
import SignIn from "./components/SignInForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div style={{ padding: "50px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
