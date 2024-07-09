"use client";

import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center">
      <SunIcon />
      <Switch
        className="mx-1 h-min"
        checked={theme === "dark"}
        onCheckedChange={handleSwitch}
      />
      <MoonIcon />
    </div>
  );
}
