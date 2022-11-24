import React from "react";
import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import Signup from "./Signup";

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center" style={{ minheight: "100vh" }}>
        <div className="w-100" style={{ maxwidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  )

}

export default App;
