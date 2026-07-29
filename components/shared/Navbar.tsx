"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../../public/images/logo2.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar({ customLogoUrl }: { customLogoUrl?: string | null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const { pathname } = useLocation();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //   useEffect(() => setOpen(false), [pathname]);

  if (pathname.startsWith("/softzeniq")) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${scrolled ? "glass-strong py-3" : "py-2 sm:py-4 bg-transparent"
        }`}
    >
      <div className=" md:max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* <Logo /> */}
        <Link href="/" className="flex items-center h-10 w-16 md:h-12 md:w-22">
          {customLogoUrl ? (
            <img src={customLogoUrl} alt="Softzeniq Logo" className="w-full h-full object-contain" />
          ) : (
            <Image src={Logo} alt="Softzeniq Logo" width={700} height={700} />
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                href={l.to}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${active
                  ? "text-foreground bg-accent/50"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="hero" size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
        <button
          className="md:hidden h-10 w-10 grid place-items-center rounded-lg glass"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-5 mt-3 glass rounded-2xl p-4"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  href={l.to}
                  className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent/50"
                >
                  {l.label}
                </Link>
              ))}
              <Button asChild variant="hero" className="mt-2">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
