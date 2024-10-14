import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import BlockProvider from "../context/BlockProvider";

function AppLayout() {
  return (
    <BlockProvider>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </BlockProvider>
  );
}

export default AppLayout;
