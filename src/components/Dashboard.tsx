import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  GraduationCap,
  BookOpen,
  Calendar,
  Award,
  FileText,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  Search,
  Bell,
  Mail,
  Sun,
  ChevronDown,
  Check,
  TrendingUp,
  Plus,
  FileSpreadsheet,
  BookMarked,
  ClipboardList,
  CheckCircle2,
  AlertCircle,
  Database,
  HardDrive,
  RefreshCw,
  BellRing,
  Volume2,
  ArrowUpRight,
  Eye,
  User,
  Building,
  Sliders,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [selectedSemester, setSelectedSemester] = useState("Semester Genap");
  const [selectedWeek, setSelectedWeek] = useState("Minggu Ini");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Notifications Mock
  const notifications = [
    { id: 1, text: "Sistem Backend terhubung ke API", time: "10 detik lalu", type: "success" },
    { id: 2, text: "Admin Berhasil login", time: "15 menit lalu", type: "info" },
    { id: 3, text: "Jadwal Matematika kelas 5 diperbarui", time: "30 menit lalu", type: "warning" },
  ];

  return (
    <div className="flex h-screen w-full bg-[#f4f7fc] text-slate-800 font-sans overflow-hidden">
      {/* SIDEBAR */}
      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 260, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full bg-[#0a1840] text-slate-300 flex flex-col justify-between border-r border-slate-800 shrink-0 select-none z-30 overflow-y-auto"
          >
            <div>
              {/* Header Logo */}
              <div className="p-6 flex items-center gap-3 border-b border-slate-800/60 bg-[#071233]">
                <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                  <svg className="w-9 h-9 drop-shadow-md" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2L35 10.5V29.5L20 38L5 29.5V10.5L20 2Z" fill="white" />
                    <path d="M20 10C14.5 10 10 14.5 10 20C10 25.5 14.5 30 20 30C25.5 30 29.5 25.5 29.5 20V17.5H20V21H25.5C25 23.5 22.8 26 20 26C16.7 26 14 23.3 14 20C14 16.7 16.7 14 20 14C22.8 14 25 16 25.5 18.5H29.5C28.8 14 25 10 20 10Z" fill="#1b3593" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-white font-bold text-sm tracking-tight leading-none">GuruWorkspace</h1>
                  <p className="text-blue-300/60 text-[10px] mt-0.5 font-medium">AI Assistant for Teachers</p>
                </div>
              </div>

              {/* User Profile Widget */}
              <div className="p-5 mx-3 my-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3.5">
                <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden border-2 border-blue-400 shadow-md">
                  <img
                    src="/src/assets/images/teacher_avatar_1784044284443.jpg"
                    alt="Admin Guru Profile"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-white text-xs font-bold truncate leading-snug">Admin Guru</h4>
                  <div className="inline-block px-1.5 py-0.5 mt-0.5 bg-blue-500/20 text-blue-300 font-semibold text-[8px] rounded uppercase tracking-wider">
                    Admin Sekolah
                  </div>
                  <p className="text-slate-400 text-[9px] mt-0.5 truncate font-medium">SDN GuruWorkspace</p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="px-3 space-y-5 pb-6">
                {/* Main section */}
                <div>
                  <div className="space-y-1">
                    <button
                      onClick={() => setActiveMenu("Dashboard")}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeMenu === "Dashboard"
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <LayoutDashboard className="w-4 h-4 shrink-0" />
                      <span>Dashboard</span>
                    </button>

                    <button
                      onClick={() => setActiveMenu("Guru")}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeMenu === "Guru"
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Users className="w-4 h-4 shrink-0" />
                      <span>Guru</span>
                    </button>

                    <button
                      onClick={() => setActiveMenu("Siswa")}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeMenu === "Siswa"
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <UserCheck className="w-4 h-4 shrink-0" />
                      <span>Siswa</span>
                    </button>
                  </div>
                </div>

                {/* Akademik section */}
                <div>
                  <h5 className="px-3.5 text-[9px] font-bold text-slate-500 tracking-wider uppercase mb-1.5">
                    AKADEMIK
                  </h5>
                  <div className="space-y-1">
                    {["Kelas", "Mapel", "Jadwal"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setActiveMenu(item)}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                          activeMenu === item
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item === "Kelas" && <GraduationCap className="w-4 h-4 shrink-0" />}
                        {item === "Mapel" && <BookOpen className="w-4 h-4 shrink-0" />}
                        {item === "Jadwal" && <Calendar className="w-4 h-4 shrink-0" />}
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Kurikulum section */}
                <div>
                  <h5 className="px-3.5 text-[9px] font-bold text-slate-500 tracking-wider uppercase mb-1.5">
                    KURIKULUM
                  </h5>
                  <div className="space-y-1">
                    {["Capaian Pembelajaran", "Tujuan Pembelajaran", "Modul Ajar", "CP & TP"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setActiveMenu(item)}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                          activeMenu === item
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item === "Capaian Pembelajaran" && <ClipboardList className="w-4 h-4 shrink-0" />}
                        {item === "Tujuan Pembelajaran" && <BookMarked className="w-4 h-4 shrink-0" />}
                        {item === "Modul Ajar" && <FileSpreadsheet className="w-4 h-4 shrink-0" />}
                        {item === "CP & TP" && <Sliders className="w-4 h-4 shrink-0" />}
                        <span className="truncate">{item}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Penilaian section */}
                <div>
                  <h5 className="px-3.5 text-[9px] font-bold text-slate-500 tracking-wider uppercase mb-1.5">
                    PENILAIAN
                  </h5>
                  <div className="space-y-1">
                    {["Input Nilai", "Rekap Nilai", "Cetak Rapor"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setActiveMenu(item)}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                          activeMenu === item
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item === "Input Nilai" && <Award className="w-4 h-4 shrink-0" />}
                        {item === "Rekap Nilai" && <BarChart3 className="w-4 h-4 shrink-0" />}
                        {item === "Cetak Rapor" && <FileText className="w-4 h-4 shrink-0" />}
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Lainnya section */}
                <div>
                  <h5 className="px-3.5 text-[9px] font-bold text-slate-500 tracking-wider uppercase mb-1.5">
                    LAINNYA
                  </h5>
                  <div className="space-y-1">
                    {["Pengaturan", "Bantuan"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setActiveMenu(item)}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                          activeMenu === item
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item === "Pengaturan" && <Settings className="w-4 h-4 shrink-0" />}
                        {item === "Bantuan" && <HelpCircle className="w-4 h-4 shrink-0" />}
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <div className="p-4 border-t border-slate-800 bg-[#071233]/40">
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4 shrink-0" />
                <span>Keluar</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN LAYOUT */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* TOP NAVBAR */}
        <header className="h-[70px] bg-white border-b border-slate-200/60 px-6 flex items-center justify-between shrink-0 select-none z-20">
          <div className="flex items-center gap-4">
            {/* Sidebar toggle button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-50 text-slate-500 rounded-xl transition cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Institution Selector */}
            <div className="relative">
              <button className="flex items-center gap-2 px-3.5 py-2 bg-[#f4f7fc] border border-slate-100 rounded-xl text-xs font-bold text-slate-700 cursor-pointer hover:bg-slate-100 transition">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[10px]">
                  SD
                </div>
                <span>SDN GuruWorkspace</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center w-full max-w-sm relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Cari sesuatu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 text-xs text-slate-800 placeholder:text-slate-400 bg-slate-50/50 transition"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[9px] font-semibold text-slate-400 font-mono">
                Ctrl + /
              </kbd>
            </span>
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-3">
            {/* Notifications icon */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 hover:bg-slate-50 text-slate-500 rounded-xl transition relative cursor-pointer"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-[9px] border-2 border-white leading-none">
                  3
                </span>
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2.5 w-80 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden py-1.5 z-40"
                  >
                    <div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                      <span className="text-xs font-bold text-slate-800">Notifikasi</span>
                      <span className="text-[10px] text-blue-600 font-semibold cursor-pointer hover:underline">Tandai dibaca</span>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {notifications.map((n) => (
                        <div key={n.id} className="p-3.5 hover:bg-slate-50 transition cursor-pointer flex gap-3">
                          <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                            n.type === "success" ? "bg-emerald-500" : n.type === "warning" ? "bg-amber-500" : "bg-blue-500"
                          }`} />
                          <div>
                            <p className="text-xs text-slate-700 font-medium leading-normal">{n.text}</p>
                            <span className="text-[9px] text-slate-400 block mt-1">{n.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Email icon */}
            <button className="p-2 hover:bg-slate-50 text-slate-500 rounded-xl transition cursor-pointer">
              <Mail className="w-5 h-5" />
            </button>

            {/* Sun/Light mode toggle */}
            <button className="p-2 hover:bg-slate-50 text-slate-500 rounded-xl transition cursor-pointer">
              <Sun className="w-5 h-5" />
            </button>

            <div className="w-[1px] h-6 bg-slate-200/80 mx-1"></div>

            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2.5 p-1 hover:bg-slate-50 rounded-xl transition cursor-pointer"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-blue-400 shadow-sm">
                  <img
                    src="/src/assets/images/teacher_avatar_1784044284443.jpg"
                    alt="Admin Guru Profile"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="hidden lg:block text-left leading-none">
                  <span className="text-xs font-bold text-slate-800 block">Admin Guru</span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden py-1 z-40"
                  >
                    <button className="w-full px-4 py-2.5 text-left text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 font-medium">
                      <User className="w-4 h-4 text-slate-400" />
                      <span>Profil Saya</span>
                    </button>
                    <button className="w-full px-4 py-2.5 text-left text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 font-medium">
                      <Building className="w-4 h-4 text-slate-400" />
                      <span>Institusi</span>
                    </button>
                    <div className="border-t border-slate-100 my-1"></div>
                    <button
                      onClick={onLogout}
                      className="w-full px-4 py-2.5 text-left text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2.5 font-semibold"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Keluar</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* WORKSPACE AREA */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 select-none">
          {/* Main Content Layout with sidebar details */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Left Content Column (Main content widgets) */}
            <div className="xl:col-span-9 space-y-6">
              {/* Premium Hero Greeting Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-gradient-to-r from-[#1b5cfa] to-[#123db5] rounded-[24px] text-white p-6 md:p-8 overflow-hidden shadow-xl shadow-blue-500/10 flex flex-col md:flex-row justify-between items-center"
              >
                {/* Vector Background Blurs */}
                <div className="absolute top-[-30%] left-[-10%] w-[50%] h-[120%] rounded-full bg-white/5 blur-[80px] pointer-events-none" />
                <div className="absolute bottom-[-20%] right-[20%] w-[40%] h-[100%] rounded-full bg-cyan-400/10 blur-[90px] pointer-events-none" />

                <div className="relative z-10 text-center md:text-left space-y-4 max-w-lg">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-snug flex items-center justify-center md:justify-start gap-2">
                      Halo, Admin Guru! <span className="animate-bounce">👋</span>
                    </h2>
                    <p className="text-blue-100 text-xs md:text-sm mt-2 font-medium leading-relaxed">
                      Selamat datang kembali di GuruWorkspace. Semua administrasi dan pembelajaran siap dipermudah.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-2 justify-center md:justify-start">
                    <span className="px-3.5 py-1.5 bg-white/10 text-white border border-white/10 rounded-full text-[11px] font-bold flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      Senin, 12 Juli 2026
                    </span>
                    <span className="px-3.5 py-1.5 bg-white/10 text-white border border-white/10 rounded-full text-[11px] font-bold flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Semester Genap 2025/2026
                    </span>
                  </div>
                </div>

                {/* Hero Illustration */}
                <div className="relative z-10 w-44 md:w-56 shrink-0 mt-6 md:mt-0 select-none pointer-events-none">
                  <img
                    src="/src/assets/images/dashboard_teacher_hero_1784043867974.jpg"
                    alt="Teacher Illustration"
                    className="w-full h-auto object-contain rounded-2xl border border-white/20 shadow-lg bg-[#f4f7fc]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total Guru */}
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-[125px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Total Guru</span>
                      <span className="text-2xl font-extrabold text-slate-800 leading-none block mt-1">6</span>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-2 mt-2">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                      <TrendingUp className="w-3 h-3" />
                      <span>12%</span>
                    </div>
                    <span className="text-[9px] text-slate-400 truncate">dari bulan lalu</span>
                    {/* SVG mini chart */}
                    <div className="w-14 h-6 shrink-0">
                      <svg className="w-full h-full" viewBox="0 0 60 20">
                        <path d="M0,15 Q15,5 30,12 T60,5" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Total Siswa */}
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-[125px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Total Siswa</span>
                      <span className="text-2xl font-extrabold text-slate-800 leading-none block mt-1">1</span>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-2 mt-2">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                      <TrendingUp className="w-3 h-3" />
                      <span>8%</span>
                    </div>
                    <span className="text-[9px] text-slate-400 truncate">dari bulan lalu</span>
                    {/* SVG mini chart */}
                    <div className="w-14 h-6 shrink-0">
                      <svg className="w-full h-full" viewBox="0 0 60 20">
                        <path d="M0,18 Q15,12 30,14 T60,4" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Kelas */}
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-[125px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Kelas</span>
                      <span className="text-2xl font-extrabold text-slate-800 leading-none block mt-1">2</span>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-2 mt-2">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                      <TrendingUp className="w-3 h-3" />
                      <span>5%</span>
                    </div>
                    <span className="text-[9px] text-slate-400 truncate">dari bulan lalu</span>
                    {/* SVG mini chart */}
                    <div className="w-14 h-6 shrink-0">
                      <svg className="w-full h-full" viewBox="0 0 60 20">
                        <path d="M0,15 Q15,15 30,10 T60,2" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mata Pelajaran */}
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-[125px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Mata Pelajaran</span>
                      <span className="text-2xl font-extrabold text-slate-800 leading-none block mt-1">11</span>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-2 mt-2">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                      <TrendingUp className="w-3 h-3" />
                      <span>15%</span>
                    </div>
                    <span className="text-[9px] text-slate-400 truncate">dari bulan lalu</span>
                    {/* SVG mini chart */}
                    <div className="w-14 h-6 shrink-0">
                      <svg className="w-full h-full" viewBox="0 0 60 20">
                        <path d="M0,15 Q15,5 30,15 T60,5" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphics Section (Chart + Absensi) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Average Grades Area Chart */}
                <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-[340px]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-800">Grafik Nilai Rata-rata</h3>
                    <div className="relative">
                      <select
                        value={selectedSemester}
                        onChange={(e) => setSelectedSemester(e.target.value)}
                        className="bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-600 rounded-lg px-2.5 py-1.5 focus:outline-none"
                      >
                        <option>Semester Genap</option>
                        <option>Semester Ganjil</option>
                      </select>
                    </div>
                  </div>

                  {/* SVG Area Chart representing the original image exactly */}
                  <div className="relative h-48 mt-4 w-full">
                    <svg className="w-full h-full" viewBox="0 0 500 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Grid Lines */}
                      <line x1="0" y1="40" x2="500" y2="40" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="0" y1="80" x2="500" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="0" y1="120" x2="500" y2="120" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />

                      {/* Area Fill */}
                      <path
                        d="M 10 130 
                           L 80 100 
                           L 150 70 
                           L 220 110 
                           L 290 90 
                           L 360 100 
                           L 430 50 
                           L 430 150 L 10 150 Z"
                        fill="url(#chartGradient)"
                      />

                      {/* Line Path */}
                      <path
                        d="M 10 130 
                           L 80 100 
                           L 150 70 
                           L 220 110 
                           L 290 90 
                           L 360 100 
                           L 430 50"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Data Dots with Ring */}
                      <circle cx="10" cy="130" r="4" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                      <circle cx="80" cy="100" r="4" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                      <circle cx="150" cy="70" r="4" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                      <circle cx="220" cy="110" r="4" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                      <circle cx="290" cy="90" r="4" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                      <circle cx="360" cy="100" r="4" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                      <circle cx="430" cy="50" r="5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
                    </svg>

                    {/* Y-Axis scale marks on left side */}
                    <div className="absolute left-0 inset-y-0 flex flex-col justify-between text-[9px] font-bold text-slate-400/80 pr-1 pointer-events-none select-none">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>
                    </div>
                  </div>

                  {/* X-Axis labels */}
                  <div className="flex justify-between text-[9px] font-bold text-slate-400 tracking-wide px-3 mt-1">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>Mei</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>
                </div>

                {/* Absensi Mingguan progress card */}
                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-[340px]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-800">Absensi Mingguan</h3>
                    <select
                      value={selectedWeek}
                      onChange={(e) => setSelectedWeek(e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-600 rounded-lg px-2.5 py-1.5 focus:outline-none"
                    >
                      <option>Minggu Ini</option>
                      <option>Minggu Lalu</option>
                    </select>
                  </div>

                  {/* Attendance Days Bars */}
                  <div className="space-y-4 mt-4 flex-1 flex flex-col justify-center">
                    {[
                      { day: "Senin", percentage: 96, color: "bg-blue-600" },
                      { day: "Selasa", percentage: 88, color: "bg-blue-600" },
                      { day: "Rabu", percentage: 92, color: "bg-blue-600" },
                      { day: "Kamis", percentage: 90, color: "bg-blue-600" },
                      { day: "Jumat", percentage: 85, color: "bg-blue-600" },
                    ].map((item) => (
                      <div key={item.day} className="space-y-1">
                        <div className="flex justify-between items-center text-[11px] font-semibold text-slate-600">
                          <span>{item.day}</span>
                          <span className="font-bold text-slate-800">{item.percentage}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percentage}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`h-full ${item.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Aksi Cepat (Quick Actions Grid) */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-800">Aksi Cepat</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { title: "Input Nilai", desc: "Masukkan nilai siswa", icon: <Award className="w-5 h-5 text-blue-600" />, bg: "bg-blue-50 border-blue-100" },
                    { title: "Absensi", desc: "Catat kehadiran", icon: <UserCheck className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-50 border-emerald-100" },
                    { title: "Cetak Rapor", desc: "Generate rapor PDF", icon: <FileSpreadsheet className="w-5 h-5 text-purple-600" />, bg: "bg-purple-50 border-purple-100" },
                    { title: "Jadwal", desc: "Lihat jadwal mengajar", icon: <Calendar className="w-5 h-5 text-amber-600" />, bg: "bg-amber-50 border-amber-100" },
                    { title: "Rekap Nilai", desc: "Lihat rekap per kelas", icon: <BarChart3 className="w-5 h-5 text-teal-600" />, bg: "bg-teal-50 border-teal-100" },
                    { title: "CP & TP", desc: "Capaian & Tujuan", icon: <Sliders className="w-5 h-5 text-indigo-600" />, bg: "bg-indigo-50 border-indigo-100" },
                    { title: "Modul Ajar", desc: "Buat modul ajar", icon: <FileText className="w-5 h-5 text-pink-600" />, bg: "bg-pink-50 border-pink-100" },
                    { title: "Mapel", desc: "Kelola mata pelajaran", icon: <BookMarked className="w-5 h-5 text-orange-600" />, bg: "bg-orange-50 border-orange-100" },
                  ].map((act, idx) => (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={act.title}
                      className={`p-4 border rounded-2xl text-left transition flex flex-col justify-between h-[105px] ${act.bg} cursor-pointer`}
                    >
                      <div className="p-2 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                        {act.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-800 leading-none">{act.title}</h4>
                        <p className="text-[10px] text-slate-400 mt-1 font-medium truncate">{act.desc}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Widgets (Activities, Schedule, Academic Calendar, System Status) */}
            <div className="xl:col-span-3 space-y-6">
              {/* Aktivitas Terbaru Timeline */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-800">Aktivitas Terbaru</h3>
                  <button className="text-[10px] font-bold text-blue-600 hover:underline">Lihat semua</button>
                </div>
                <div className="space-y-4 relative pl-4 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-slate-100">
                  {[
                    { label: "Sistem Backend terhubung ke API", status: "Berhasil", time: "10 detik lalu", initial: "S", color: "bg-emerald-500", textCol: "text-emerald-700", bgCol: "bg-emerald-50" },
                    { label: "Admin Berhasil login", time: "15 menit lalu", initial: "AG", color: "bg-blue-600", bgCol: "bg-blue-50" },
                    { label: "Jadwal Matematika kelas 5 diperbarui", time: "30 menit lalu", initial: "📅", color: "bg-amber-500", bgCol: "bg-amber-50" },
                    { label: "Guru Budi menginput nilai IPA kelas 6", time: "1 jam lalu", initial: "🎓", color: "bg-purple-600", bgCol: "bg-purple-50" },
                    { label: "Rapor semester genap siap dicetak", time: "2 jam lalu", initial: "📄", color: "bg-teal-600", bgCol: "bg-teal-50" },
                  ].map((act, idx) => (
                    <div key={idx} className="relative flex gap-3">
                      <div className={`absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full ring-4 ring-white ${act.color}`} />
                      <div className="flex items-start gap-2.5">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[10px] shrink-0 text-slate-600 border border-slate-100 ${act.bgCol || "bg-slate-50"}`}>
                          {act.initial}
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-xs text-slate-700 font-bold leading-snug">{act.label}</p>
                          {act.status && (
                            <span className="inline-block px-1.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[8px] rounded mt-0.5 mr-1.5">
                              {act.status}
                            </span>
                          )}
                          <span className="text-[9px] text-slate-400 font-semibold">{act.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pengumuman Widget */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-800">Pengumuman</h3>
                  <button className="text-[10px] font-bold text-blue-600 hover:underline">Lihat semua</button>
                </div>
                <div className="space-y-3.5">
                  {[
                    { title: "Libur Nasional", details: "Tanggal 17 Agustus 2026", time: "2 hari lalu", color: "bg-rose-50 text-rose-600 border-rose-100" },
                    { title: "Update Kurikulum", details: "Penyesuaian CP semester genap", time: "3 hari lalu", color: "bg-blue-50 text-blue-600 border-blue-100" },
                    { title: "Sinkronisasi Dapodik", details: "Pastikan data terbaru tersinkron", time: "5 hari lalu", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
                  ].map((ann, idx) => (
                    <div key={idx} className="p-3.5 border border-slate-100 rounded-2xl flex items-start gap-3 bg-slate-50/20">
                      <div className={`p-2 rounded-xl flex items-center justify-center shrink-0 border ${ann.color}`}>
                        {idx === 0 ? <Volume2 className="w-4 h-4" /> : idx === 1 ? <InfoIcon className="w-4 h-4" /> : <RefreshCw className="w-4 h-4" />}
                      </div>
                      <div className="overflow-hidden space-y-0.5">
                        <h4 className="text-xs font-extrabold text-slate-800">{ann.title}</h4>
                        <p className="text-[10px] text-slate-400 font-medium truncate">{ann.details}</p>
                        <span className="text-[9px] text-slate-400 font-semibold block mt-1">{ann.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jadwal Hari Ini */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-800">Jadwal Hari Ini</h3>
                  <button className="text-[10px] font-bold text-blue-600 hover:underline">Lihat semua</button>
                </div>
                <div className="space-y-3">
                  {[
                    { time: "08.00 - 09.30", subject: "Matematika", room: "Kelas 5A", color: "bg-blue-600" },
                    { time: "09.30 - 11.00", subject: "IPA", room: "Kelas 6A", color: "bg-emerald-600" },
                    { time: "13.00 - 14.30", subject: "Bahasa Indonesia", room: "Kelas 4B", color: "bg-amber-600" },
                    { time: "15.00 - 16.30", subject: "Pendidikan Pancasila", room: "Kelas 6B", color: "bg-purple-600" },
                  ].map((sch, idx) => (
                    <div key={idx} className="flex justify-between items-center p-2.5 hover:bg-slate-50 rounded-xl transition border border-transparent hover:border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${sch.color}`} />
                        <div>
                          <h4 className="text-xs font-extrabold text-slate-800 leading-snug">{sch.subject}</h4>
                          <span className="text-[10px] text-slate-400 font-semibold">{sch.room}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        {sch.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kalendar Akademik Widget */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-800">Kalender Akademik</h3>
                </div>
                <div className="space-y-3">
                  {/* Month header with arrows */}
                  <div className="flex justify-between items-center px-1">
                    <button className="p-1 hover:bg-slate-50 border border-slate-100 text-slate-500 rounded-lg transition cursor-pointer">
                      &lt;
                    </button>
                    <span className="text-xs font-bold text-slate-700">Juli 2026</span>
                    <button className="p-1 hover:bg-slate-50 border border-slate-100 text-slate-500 rounded-lg transition cursor-pointer">
                      &gt;
                    </button>
                  </div>

                  {/* Day Names and Numbers */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((day) => (
                      <span key={day} className="text-[9px] font-bold text-slate-400 uppercase py-1">
                        {day}
                      </span>
                    ))}

                    {[7, 8, 9, 10, 11, 12, 13].map((date, idx) => {
                      const isActive = date === 12; // Sab, 12 Juli 2026 is highlighted
                      return (
                        <div
                          key={idx}
                          className={`py-2 rounded-xl text-xs font-bold transition flex flex-col items-center justify-center cursor-pointer ${
                            isActive
                              ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                              : "text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          <span>{date}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Status Sistem Widget */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-800">Status Sistem</h3>
                  <button className="text-[10px] font-bold text-blue-600 hover:underline">Lihat status</button>
                </div>
                <div className="space-y-3.5">
                  {[
                    { name: "Backend API", icon: <RefreshCw className="w-4 h-4 text-emerald-600" />, bg: "bg-emerald-50", status: "Online", statusCol: "text-emerald-700" },
                    { name: "Database", icon: <Database className="w-4 h-4 text-emerald-600" />, bg: "bg-emerald-50", status: "Aman", statusCol: "text-emerald-700" },
                    { name: "Storage", icon: <HardDrive className="w-4 h-4 text-emerald-600" />, bg: "bg-emerald-50", status: "Normal", statusCol: "text-emerald-700" },
                  ].map((sys, idx) => (
                    <div key={idx} className="flex justify-between items-center p-2.5 border border-slate-100 rounded-xl bg-slate-50/20">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${sys.bg}`}>
                          {sys.icon}
                        </div>
                        <span className="text-xs font-bold text-slate-700">{sys.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                        <span className={`text-[10px] font-bold ${sys.statusCol}`}>{sys.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Section */}
          <footer className="pt-8 pb-4 text-center border-t border-slate-200/50">
            <p className="text-[10px] text-slate-400 font-semibold tracking-wide">
              © 2026 GuruWorkspace. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

// Simple internal icon helper since Info can be replaced or made
function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
