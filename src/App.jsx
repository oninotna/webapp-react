import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from './layout/DefaultLayout';
import HomePage from './Pages/HomePage';
import AboutUs from "./Pages/AboutUsPage";
import MoviesPage from './Pages/MoviesPage';


export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />}/>
      <Route path="/aboutus" element={<AboutUs />}/>

      <Route path="/movies" element={<MoviesPage />}/>

    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
};