import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo2.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary mt-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Image src={Logo} alt="SoftZeniq Logo" className="h-10 w-auto" />
          <p className="text-sm text-muted-foreground max-w-sm">
            SoftZeniq builds premium digital products for startups and
            businesses worldwide — from web and mobile to custom software and
            growth.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-primary/10 transition-colors"
            >
              {/* <Twitter className="h-4 w-4 text-primary" /> */}
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-primary/10 transition-colors"
            >
              {/* <Linkedin className="h-4 w-4 text-primary" /> */}
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-primary/10 transition-colors"
            >
              {/* <Github className="h-4 w-4 text-primary" /> */}
            </a>

            <a
              href="mailto:hello@softzeniq.com"
              aria-label="Email SoftZeniq"
              className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-foreground">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:hello@softzeniq.com"
                className="hover:text-foreground"
              >
                hello@softzeniq.com
              </a>
            </li>
            <li>+1 (555) 010-2024</li>
            <li>Remote · Worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SoftZeniq. All rights reserved.</p>
          <p>Crafted with precision · Built to convert</p>
        </div>
      </div>
    </footer>
  );
}
