"use client";
import { Check, Mail, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Logo from "../../public/images/logo2.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="relative border-t border-border bg-secondary mt-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 sm:py-16 grid gap-6 md:gap-12 grid-cols-2 lg:grid-cols-6">
        {/* Brand */}
        <div className="col-span-2 space-y-4">
          <Image
            src={Logo}
            alt="SoftZeniq Logo"
            loading="eager"
            className="h-10 w-auto"
          />
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
              <FaXTwitter className="h-4 w-4 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-primary/10 transition-colors"
            >
              <FaLinkedinIn className="h-4 w-4 text-primary" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-primary/10 transition-colors"
            >
              <FaGithub className="h-4 w-4 text-primary" />
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

        {/* Company Links */}
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

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:softzeniq@gmail.com"
                className="hover:text-foreground"
              >
                softzeniq@gmail.com
              </a>
            </li>
            <li>+880 1791-091160</li>
            <li>Remote · Worldwide</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-2 space-y-2">
          <h4 className="font-display font-semibold mb-4 text-sm">
            Join a Newsletter
          </h4>
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            Bi-weekly conversion audits and scaling metrics — zero fluff,
            straight to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="flex overflow-hidden rounded-xl border border-border bg-background focus-within:ring-1 focus-within:ring-indigo-500/50 focus-within:border-indigo-500 transition-all">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@business.com"
                className="flex-1 bg-transparent py-2.5 pl-3.5 pr-2 text-xs text-foreground placeholder-muted-foreground focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 bg-brand-indigo hover:bg-brand-indigo/90 text-white transition flex items-center justify-center cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
            {subscribed && (
              <p className="text-[10px] text-emerald-500 dark:text-emerald-400 font-mono flex items-center gap-1">
                <Check className="w-3 h-3" />
                You're in! First dispatch coming soon.
              </p>
            )}
          </form>
          <p className="text-[10px] text-muted-foreground mt-3 leading-relaxed">
            No spam. Unsubscribe with one click, anytime.
          </p>
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
