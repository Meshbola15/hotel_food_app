import React, { useState } from "react";
export const AppStateContext = React.createContext();

const AppStateProvider = ({ children }) => {
  const [isDark, setisDark] = useState(true);

  return (
    <AppStateContext.Provider value={{ isDark, setisDark }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
