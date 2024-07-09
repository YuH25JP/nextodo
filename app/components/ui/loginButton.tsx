import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";

export default function LoginButton() {
  return (
    <div>
      <Button className="h-min">
        <LogInIcon className="mr-2" size={16} />
        Login
      </Button>
    </div>
  );
}
