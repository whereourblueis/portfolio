"use client";

import Link from "next/link";
import { blogPosts } from "@/data/portfolio";

export default function Blog() {
  return (
    <section id="notion" className="py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-sm text-foreground font-bold tracking-widest uppercase mb-4">Notion</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          노션
        </h2>

        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 bg-card-bg border border-card-border rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-secondary mb-2">{post.excerpt}</p>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-accent"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
