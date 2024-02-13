import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./views/home/Home";
import Marketplace from "./views/marketplace/Marketplace";
import DataTables from "./views/datatables/Datatables";
import Profile from "./views/profile/Profile";
// import SignIn from "./views/signin/Signin"

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/dataTables" element={<DataTables />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
