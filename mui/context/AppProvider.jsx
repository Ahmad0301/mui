import React, { Children } from "react";
import { useState } from "react";
import AppContext from "./AppContext";
function AppProvider({ children }) {
  const [name, SetName] = useState("anus");
  const [email, SetEmail] = useState(null);
  const [age, SetAge] = useState(10);

  return (
    <AppContext.Provider
      value={{ name, SetName, age, SetAge, email, SetEmail }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
