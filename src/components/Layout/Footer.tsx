import {
  RiFacebookBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import Logo from "@/components/common/Logo";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillPinterest } from "react-icons/ai";

interface FooterLinkProps {
  href: string;
  title: string | React.ReactNode;
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="h-[35vh] bg-green-500 flex flex-col justify-center items-center gap-7"
    >
      <Logo
        color="green-800"
        className="text-3xl font-bold"
      />
      <FooterNav />
      <Socials />
    </footer>
  );
}

function FooterNav() {
  return (
    <nav className="flex items-center gap-20 text-green-800 font-barlow font-medium">
      <FooterLink href="#about-section" title="About" />
      <FooterLink
        href="#services-section"
        title="Services"
      />
      <FooterLink
        href="#testimonials-section"
        title="Projects"
      />
    </nav>
  );
}

function Socials() {
  return (
    <div className="flex items-center gap-6 text-green-800 text-2xl pt-10">
      <FooterLink href="#" title={<RiFacebookBoxFill />} />
      <FooterLink href="#" title={<IoLogoInstagram />} />
      <FooterLink href="#" title={<RiTwitterXFill />} />
      <FooterLink href="#" title={<AiFillPinterest />} />
    </div>
  );
}

function FooterLink({ href, title }: FooterLinkProps) {
  return (
    <a
      className="hover:text-white transition-colors duration-300"
      href={href}
    >
      {title}
    </a>
  );
}
