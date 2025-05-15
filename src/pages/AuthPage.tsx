
import AuthForm from "@/components/auth/AuthForm";
import { useEffect } from "react";

const AuthPage = () => {
  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("vibe-wall-user") === "authenticated") {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-white to-vibe-light">
      <div className="w-full max-w-md">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 mb-6">
          <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-vibe-purple to-vibe-pink bg-clip-text text-transparent">
            Vibe Wall
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Connect, engage, and earn rewards in this vibrant social space
          </p>
          <div className="grid gap-2 grid-cols-3 mb-8">
            <div className="bg-vibe-light rounded-lg p-2 text-center">
              <div className="text-xl">🔁</div>
              <p className="text-xs mt-1 text-gray-700">Daily Stories</p>
            </div>
            <div className="bg-vibe-light rounded-lg p-2 text-center">
              <div className="text-xl">🧙</div>
              <p className="text-xs mt-1 text-gray-700">Earn Badges</p>
            </div>
            <div className="bg-vibe-light rounded-lg p-2 text-center">
              <div className="text-xl">🌐</div>
              <p className="text-xs mt-1 text-gray-700">Weekend Zones</p>
            </div>
          </div>
          <AuthForm />
        </div>
        <p className="text-center text-sm text-gray-500">
          Vibe Wall - The gamified social platform for meaningful connections
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
