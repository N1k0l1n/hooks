import React from "react";
import Navbar from "./conponents/Navbar";
import TodoList from "./conponents/TodoList";
import ThemeContextProvider from "./context/ThemeContext";
import AuthContextProvider from "./context/AuthContext"

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
      <AuthContextProvider> 
        <ThemeContextProvider>
          <Navbar/>
          <TodoList/>
        </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
