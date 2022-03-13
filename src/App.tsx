import React from "react";
import MainLayout from "./layout/main-layout";
import List from "./pages/List";
import Login from "./pages/Login";
import NoResult from "./pages/No-Result";

function App() {
  return (
    <MainLayout>
      {/* <Login /> */}
      {/* <List /> */}
      <NoResult />
    </MainLayout>
  );
}

export default App;
