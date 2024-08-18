import { Navigate, Outlet, Route } from "react-router-dom";
import authStore from "./store.js";
import { observer } from "mobx-react-lite";

const PrivateRoute = (props) => {

  if (authStore.isLoadingAuth) {
    return <div>Checking auth...</div>;
  }
  if (authStore.isAuth) {
     return <Navigate to="/problems/" />;
  } else {
    return <Navigate to="/token/" />;
  }
};
  
export default observer(PrivateRoute);