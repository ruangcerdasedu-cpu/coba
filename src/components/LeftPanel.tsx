import React from "react";
import { ClipboardList, BookOpen, BarChart3, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface FeatureItemProps {
  key?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureItem({ icon, title, description, index }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex items-start gap-4"
    >
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 shadow-inner text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold text-sm tracking-wide">{title}</h3>
        <p className="text-blue-100/80 text-xs mt-0.5 font-normal leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function LeftPanel() {
  const features = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Perencanaan Terstruktur",
      description: "ATP, Prota, Promes, Modul Ajar otomatis",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Pelaksanaan Praktis",
      description: "Jurnal mengajar, kehadiran, catatan siswa",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Asesmen Cerdas",
      description: "Analisis nilai, remedial, pengayaan",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "AI Assistant",
      description: "Bantu ide, susun materi, dan refleksi",
    },
  ];

  return (
    <div className="relative w-full lg:w-[42%] bg-gradient-to-br from-[#1b3593] to-[#0f1d52] flex flex-col justify-between overflow-hidden p-8 lg:p-12 min-h-[600px] lg:min-h-screen">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none" />

      {/* Top Brand Section */}
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          {/* Custom Hexagonal/Shield Logo */}
          <div className="relative w-11 h-11 flex items-center justify-center">
            <svg className="w-11 h-11 drop-shadow-md" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M20 2L35 10.5V29.5L20 38L5 29.5V10.5L20 2Z" 
                fill="white" 
              />
              <path 
                d="M20 10C14.5 10 10 14.5 10 20C10 25.5 14.5 30 20 30C25.5 30 29.5 25.5 29.5 20V17.5H20V21H25.5C25 23.5 22.8 26 20 26C16.7 26 14 23.3 14 20C14 16.7 16.7 14 20 14C22.8 14 25 16 25.5 18.5H29.5C28.8 14 25 10 20 10Z" 
                fill="#1b3593" 
              />
            </svg>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg tracking-tight leading-none">GuruWorkspace</h1>
            <p className="text-blue-200/80 text-xs mt-1 font-medium">AI Assistant for Teachers</p>
          </div>
        </div>

        {/* Hero Title & Short Description */}
        <div className="mt-12 lg:mt-16 max-w-md">
          <h2 className="text-white text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug">
            Administrasi Guru <br />
            Lebih Mudah dengan AI
          </h2>
          <p className="text-blue-100/95 text-xs lg:text-sm mt-4 font-normal leading-relaxed">
            Buat perangkat pembelajaran, kelola kelas, dan selesaikan administrasi dengan bantuan AI dalam satu platform.
          </p>
        </div>

        {/* Feature List */}
        <div className="mt-10 lg:mt-12 flex flex-col gap-6 max-w-sm">
          {features.map((feat, index) => (
            <FeatureItem
              key={feat.title}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Mockup Laptop Photo aligned snuggly at the bottom */}
      <div className="relative mt-12 lg:mt-6 -mx-8 lg:-mx-12 -mb-8 lg:-mb-12 overflow-hidden flex justify-center items-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full max-w-[420px] lg:max-w-full lg:w-[95%] xl:w-[90%] select-none pointer-events-none origin-bottom px-4"
        >
          <img
            src="/src/assets/images/teacher_workspace_1784041419649.jpg"
            alt="GuruWorkspace Teacher Desk AI Mockup"
            className="w-full h-auto object-cover rounded-t-2xl shadow-2xl border-t border-x border-white/10"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  );
}
