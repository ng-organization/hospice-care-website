"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
}

interface FooterLink {
  name: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: {
    name: string;
    description: string;
  };
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className, brand, socialLinks, columns, copyright, legalLinks, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pt-24", className)}
        {...props}
      >
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <a href="#" className="text-xl font-semibold text-white">
                {brand.name}
              </a>
              <p className="text-sm text-white/80 mt-2">
                {brand.description}
              </p>

              <p className="text-sm font-light text-white/70 mt-3.5">
                {socialLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <a
                      className="hover:text-white/95 transition-colors"
                      target="_blank"
                      href={link.href}
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                    {index < socialLinks.length - 1 && " • "}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:col-span-8 lg:mt-0 gap-8">
              {columns.map(({ title, links }) => (
                <div key={title}>
                  <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
                  <ul className="space-y-2.5">
                    {links.map(({ name, Icon, href }) => (
                      <li key={name}>
                        <a
                          href={href || "#"}
                          className="text-sm transition-all text-white/75 hover:text-white/95 group flex items-center"
                        >
                          <Icon className="h-4 w-4 mr-1.5 transition-all text-white/75 group-hover:text-white/95" />
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {(copyright || legalLinks) && (
            <div className="mt-20 border-t border-white/20 pt-6 pb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                {copyright && (
                  <p className="text-xs text-white/60 order-2 md:order-1">{copyright}</p>
                )}
                {legalLinks && legalLinks.length > 0 && (
                  <div className="flex flex-wrap gap-4 text-xs order-1 md:order-2">
                    {legalLinks.map((link, index) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-white/60 hover:text-white/90 transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Footer.displayName = "Footer";