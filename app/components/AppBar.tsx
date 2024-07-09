import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";
import ThemeButton from "./ui/themeButton";
import LoginButton from "./ui/loginButton";

export default function AppBar() {
  return (
    <div className="sticky top-0 flex items-center justify-between p-2 border-b-2 backdrop-blur">
      <p className="text-2xl">Nextodo</p>
      <div className="flex gap-3">
        <ThemeButton />
        <LoginButton />
      </div>
    </div>
  );
}
