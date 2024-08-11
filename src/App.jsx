import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Router from "./router/Router";
import { getRoutes } from "./router/routes";
import publicRoutes from "./router/routes/publicRoutes";
import { get_user_info } from "./store/Reducer/authReducer";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(get_user_info());
    }
  }, [token]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
