import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from './layout/DefaultLayout';
import HomePage from './Pages/HomePage';
import AboutUs from "./Pages/AboutUsPage";
import MoviesPage from './Pages/MoviesPages/MoviesPage';
import MoviePage from "./Pages/MoviesPages/MoviePage";


export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />}/>
      <Route path="/aboutus" element={<AboutUs />}/>

      <Route path="/movies">
        <Route index element={<MoviesPage />}/>
        <Route path=":id" element={<MoviePage />}/>
      </Route>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
};