import UploadComp from "../components/UploadComp";
import Footer from "../components/Footer";
import DashboardHeader from "../components/DashboardHeader";

const ProductUpload = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="shadow-md ">
        <DashboardHeader />
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white  rounded-xl p-6">
          <UploadComp />
        </div>
      </main>
      <footer className="bg-white">
        <Footer />
      </footer>
    </div>
  );
};

export default ProductUpload;