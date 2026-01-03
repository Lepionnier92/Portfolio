"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import Annotation from "@/components/annotation"

const blogPosts = [
  {
    title: "Building Scalable React Applications with Server Components",
    date: "2024-12-10",
    description:
      "Deep dive into React Server Components architecture, data fetching patterns, and performance trade-offs in Next.js 14.",
    readTime: "8 min read",
    tags: ["React", "Next.js", "Performance"],
  },
  {
    title: "Database Query Optimization: A Pragmatic Approach",
    date: "2024-11-28",
    description:
      "Lessons learned from optimizing slow queries in production. Indexing strategies, query planning, and when to denormalize.",
    readTime: "12 min read",
    tags: ["PostgreSQL", "Performance", "Backend"],
  },
  {
    title: "Type-Safe API Design with TypeScript and Zod",
    date: "2024-11-15",
    description:
      "Building end-to-end type safety from client to server. Runtime validation, type inference, and developer experience.",
    readTime: "10 min read",
    tags: ["TypeScript", "API", "DX"],
  },
]

export default function Blog() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Writing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Technical essays about web development, architecture decisions, and lessons learned from building real
            products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group p-6 h-full glass-strong border-accent/20 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 cursor-pointer flex flex-col">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold leading-tight group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{post.description}</p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent border border-accent/20 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass-strong border border-accent/30 rounded-lg text-accent hover:border-accent/60 hover:bg-accent/10 transition-all duration-300"
          >
            <span className="font-medium">See all posts</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <Annotation text="Knowledge shared is knowledge multiplied." delay={0.3} position="right" />
      </div>
    </section>
  )
}
