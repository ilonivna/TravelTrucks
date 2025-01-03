import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/campers" element={<CatalogPage />}></Route>
        {
          <Route path="/campers/:id" element={<CamperPage />}>
            {/* {FEATURES AND REVIEWS HERE} */}
          </Route>
        }
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
