
import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "E-bikes", href: "/e-bikes" },
      { name: "City Bikes", href: "/city-bikes" },
      { name: "Cargo E-bikes", href: "/cargo-e-bikes" },
      { name: "Folding E-bikes", href: "/folding-e-bikes" },
      { name: "E-Mountain Bikes", href: "/e-mountain-bikes" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "FAQs", href: "/faqs" },
      { name: "Warranty", href: "/warranty" },
      { name: "Shipping", href: "/shipping" },
      { name: "Find a Store", href: "/stores" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Blog", href: "/blog" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "YouTube", href: "#", icon: "youtube" },
];

export const Footer = () => {
  return (
    <footer className="bg-zephyr-dark text-white">
      <div className="zephyr-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="text-white mr-2"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="text-xl font-semibold tracking-wide">ZEPHYR</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Zephyr designs and builds premium electric bikes that transform how people move through their cities and explore beyond.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition-colors"
                  aria-label={social.name}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.icon === "facebook" && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    )}
                    {social.icon === "instagram" && (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </>
                    )}
                    {social.icon === "twitter" && (
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    )}
                    {social.icon === "youtube" && (
                      <>
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-8">
        <div className="zephyr-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Zephyr Bikes. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-white/60 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
