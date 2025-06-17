import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function DefaultLayout() {
  return (
    <div className="my-container">
      <Header />

      <main className="main-container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
