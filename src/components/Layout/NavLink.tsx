import { cn } from "@/utils/cn";

export default function NavLink({
  href,
  children,
  toggleMenu,
}: {
  href: string;
  children: React.ReactNode;
  toggleMenu: () => void;
}) {
  const classNames = cn(
    "text-gray-600 font-medium text-xl sm:font-normal sm:text-white sm:text-lg",
    `hover:text-blue-800 font-barlow transition-colors duration-300`
  );

  return (
    <a
      href={href}
      onClick={toggleMenu}
      className={classNames}
    >
      {children}
    </a>
  );
}
