
import { ReactNode } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";

interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("vibe-wall-user") === "authenticated";
    
    if (!isAuthenticated && location.pathname !== "/auth") {
      navigate("/auth");
    }
  }, [location, navigate]);

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <main className="container mx-auto max-w-lg px-4 py-4">
        <Outlet />
        {children}
      </main>
      <Navbar />
    </div>
  );
};

export default AppLayout;
