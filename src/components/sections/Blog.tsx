"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Blog() {
  return (
    <section id="notion" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium mb-4 block">
              My Notion
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">노션</span>
            </h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              개발하면서 배운 것들을 기록합니다
            </p>
          </div>
        </ScrollReveal>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group"
            >
              {/* Post Header */}
              <div className="h-32 bg-gradient-to-br from-primary/20 via-accent/20 to-accent-pink/20 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-16 h-16 text-white/10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-secondary/80 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group/link"
                >
                  자세히 읽기
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
