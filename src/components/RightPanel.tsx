import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Globe, ChevronDown, Check, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function RightPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Bahasa Indonesia");
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "info" | "error"; message: string } | null>(null);

  const languages = ["Bahasa Indonesia", "English", "Bahasa Melayu"];

  const triggerNotification = (type: "success" | "info" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      triggerNotification("error", "Email tidak boleh kosong");
      return;
    }
    if (!password) {
      triggerNotification("error", "Kata sandi tidak boleh kosong");
      return;
    }

    setIsLoading(true);
    // Simulating login experience
    setTimeout(() => {
      setIsLoading(false);
      triggerNotification("success", "Visual demo: Berhasil masuk ke GuruWorkspace!");
    }, 1500);
  };

  const handleGoogleLogin = () => {
    triggerNotification("info", "Menghubungkan dengan Layanan Akun Google...");
  };

  const handlePlaceholderClick = (topic: string) => {
    triggerNotification("info", `Fitur ${topic} adalah bagian dari tampilan demo visual.`);
  };

  return (
    <div className="relative w-full lg:w-[58%] bg-[#f7f9fd] flex flex-col justify-center items-center p-6 lg:p-12 min-h-screen">
      {/* Toast Notification Container */}
      <div className="fixed top-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full">
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className={`p-4 rounded-xl shadow-lg border flex items-start gap-3 ${
                notification.type === "success"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : notification.type === "error"
                  ? "bg-rose-50 border-rose-200 text-rose-800"
                  : "bg-blue-50 border-blue-200 text-blue-800"
              }`}
            >
              {notification.type === "success" ? (
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold text-xs">✓</div>
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0" />
              )}
              <div className="flex-1 text-xs font-medium">{notification.message}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Top Header - Language Selection */}
      <div className="absolute top-6 right-6 lg:top-8 lg:right-12 z-20">
        <div className="relative">
          <button
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-700 transition duration-200 shadow-sm cursor-pointer"
          >
            <Globe className="w-4 h-4 text-slate-500" />
            <span>{selectedLang}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${langMenuOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {langMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden py-1 z-30"
              >
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangMenuOpen(false);
                      triggerNotification("info", `Bahasa diubah ke ${lang}`);
                    }}
                    className="w-full px-4 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 flex items-center justify-between font-medium"
                  >
                    <span>{lang}</span>
                    {selectedLang === lang && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Centered Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[460px] bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 p-8 lg:p-10"
      >
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-[22px] font-extrabold text-slate-900 tracking-tight leading-none">
            Selamat Datang Kembali!
          </h2>
          <p className="text-slate-400 text-xs mt-2.5 font-medium">
            Masuk untuk melanjutkan ke akun Anda
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 tracking-wide uppercase mb-1.5">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <Mail className="h-4 w-4 text-slate-400" />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-xs text-slate-800 placeholder:text-slate-400 bg-slate-50/50 transition duration-150"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 tracking-wide uppercase mb-1.5">
              Kata Sandi
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <Lock className="h-4 w-4 text-slate-400" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi Anda"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-xs text-slate-800 placeholder:text-slate-400 bg-slate-50/50 transition duration-150"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 transition"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {/* Forget password link */}
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => handlePlaceholderClick("Lupa Kata Sandi")}
                className="text-[11px] font-bold text-blue-600 hover:text-blue-700 hover:underline transition"
              >
                Lupa kata sandi?
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 mt-5 bg-[#3b59f6] text-white font-semibold rounded-xl hover:bg-[#2a46db] transition duration-200 shadow-lg shadow-blue-500/10 text-xs flex justify-center items-center gap-2 cursor-pointer disabled:opacity-80"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Memproses...</span>
              </>
            ) : (
              <span>Masuk</span>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <span className="relative px-3.5 bg-white text-[10px] font-bold text-slate-400 tracking-wider uppercase">
            atau masuk dengan
          </span>
        </div>

        {/* Social Logins - Single Google Login (Microsoft removed) */}
        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full py-3 border border-slate-200/80 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition duration-200 flex items-center justify-center gap-2.5 text-xs font-semibold text-slate-700 shadow-sm cursor-pointer"
          >
            {/* Google Vector Icon */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Masuk dengan Google</span>
          </button>
        </div>

        {/* Footer Account Prompt */}
        <div className="text-center text-xs mt-8">
          <span className="text-slate-400 font-medium">Belum punya akun? </span>
          <button
            onClick={() => handlePlaceholderClick("Pendaftaran Akun Baru")}
            className="text-blue-600 hover:text-blue-700 hover:underline font-bold transition"
          >
            Daftar sekarang
          </button>
        </div>
      </motion.div>
    </div>
  );
}
