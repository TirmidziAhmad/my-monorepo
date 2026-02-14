"use client";
import {
  useModeAnimation,
  ThemeAnimationType,
} from "react-theme-switch-animation";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // Initialize state once on mount to match the root element's class (managed by layout script)
  useEffect(() => {
    const isActuallyDark = document.documentElement.classList.contains("dark");
    setIsDark(isActuallyDark);
  }, []);

  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    isDarkMode: isDark,
    onDarkModeChange: (val) => {
      console.log("Theme changing to:", val ? "dark" : "light");
      setIsDark(val);
    },
    animationType: ThemeAnimationType.CIRCLE,
    duration: 750,
  });

  const handleToggle = () => {
    console.log("Toggle button clicked! Current local state isDark:", isDark);
    toggleSwitchTheme();
  };

  return (
    <button
      ref={ref}
      onClick={handleToggle}
      className="w-9 h-9 rounded-full border border-white/10 dark:border-white/10 hover:border-white/30 dark:hover:border-white/30 bg-white/[0.05] dark:bg-white/[0.05] hover:bg-white/[0.1] dark:hover:bg-white/[0.1] flex items-center justify-center transition-all duration-300 cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700" />
      )}
    </button>
  );
}
