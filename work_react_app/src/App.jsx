import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import AuthStore from "./store.js";
import PrivateRoute from "./privateRoute.js";
 
import LoginPage from "./pages/loginPage";
import UsersPage from "./pages/usersPage";

const App = observer(() => {
  
  useEffect(() => {
     AuthStore.checkAuth();
  }, []);
 
  return (
    <BrowserRouter>
        <Routes>
    //страница, для посещения которой авторизация не требуется
            <Route path="/token/" element={<LoginPage />} />

    //страницы, для посещения которых требуется авторизация
            <Route path="/problems" element={<PrivateRoute  />}>
                <Route path="" element={<UsersPage />} />
                <Route path=":id" element={<UserPage />} />
            </Route>

            <Route path="*" element={<div>404... not found </div>} />
        </Routes>
    </BrowserRouter>
   );
});

export default App;