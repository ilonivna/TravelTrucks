import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const NotFoundPage = lazy(()=>import("../../pages/NotFoundPage/NotFoundPage"))


function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/campers" element={<CatalogPage/>}></Route>
        <Route path="/campers/:id" element={<DetailsPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Layout>
  )
}