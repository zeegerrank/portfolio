import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { twMerge } from "tailwind-merge";
import BlockProvider from "../context/BlockProvider";

function AppLayout() {
  return (
    <BlockProvider>
      <div
        className={twMerge(
          "h-screen w-screen",
          "transition-all duration-500",
          "bg-complementary-500 text-accent-500",
          "dark:text-complementary-500 dark:bg-accent-500",
        )}
      >
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
