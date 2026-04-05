import Logo from "@/components/common/Logo";
import { cn } from "@/utils/cn";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function Header() {
  const classNames = {
    header: cn(
      "px-6 sm:px-8",
      "absolute top-0 left-0 w-full py-6 flex items-center justify-between z-10"
    ),
    logo: cn("text-3xl sm:text-4xl"),
  };
  return (
    <header className={classNames.header}>
      <Logo color="white" className={classNames.logo} />
      <div className="sm:hidden">
        <MobileNav />,
      </div>
      <div className="hidden sm:block">
        <Nav />
      </div>
    </header>
  );
}
