import Header from "../../Header";
import MainLayout from "../../Layout";
import Navbar from "../../Navbar";

const HomeLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="bg-gray-50 w-full dark:bg-primary-700 overflow-x-hidden overflow-y-auto min-h-[100vh]">
        <div className="flex w-full flex-col">
          <Header />
          <Navbar />
          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default HomeLayout;
