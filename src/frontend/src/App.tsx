import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AchievementsSection from "./components/AchievementsSection";
import BranchesSection from "./components/BranchesSection";
import ContactSection from "./components/ContactSection";
import EssenceSection from "./components/EssenceSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import MastersDeskSection from "./components/MastersDeskSection";
import Navbar from "./components/Navbar";
import SocialSection from "./components/SocialSection";
import AdminPage from "./pages/AdminPage";

const queryClient = new QueryClient();

const isAdmin = window.location.pathname === "/admin";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {isAdmin ? (
        <AdminPage />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <HeroSection />
            <EssenceSection />
            <MastersDeskSection />
            <BranchesSection />
            <SocialSection />
            <AchievementsSection />
            <GallerySection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}
