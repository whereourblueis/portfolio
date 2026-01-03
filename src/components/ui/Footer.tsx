import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-card-border">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-medium text-foreground mb-1">{personalInfo.name}</p>
            <p className="text-sm text-secondary">{personalInfo.email}</p>
          </div>
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            GitHub →
          </Link>
        </div>
      </div>
    </footer>
  );
}