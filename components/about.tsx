"use client"

import { motion } from "framer-motion"
import Annotation from "@/components/annotation"
import { Code2, Sparkles, Heart } from "lucide-react"

export default function About() {
  const highlights = [
    { icon: Code2, title: "Clean Code", text: "Write code that humans can read" },
    { icon: Sparkles, title: "Performance", text: "Fast, responsive, delightful" },
    { icon: Heart, title: "User First", text: "Build with empathy and care" },
  ]

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight font-display bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            About Me
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-xl text-foreground/90 leading-relaxed font-body">
              I believe in building things that matter. Every line of code should serve a purpose, every design decision
              should enhance the user experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              When I am not coding, you will find me exploring new technologies, contributing to open source, or
              enjoying a good cup of coffee while sketching UI ideas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/40 transition-all duration-300 overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <div className="relative space-y-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground font-heading">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent-secondary/5 border border-accent/10"
          >
            <h3 className="text-2xl font-semibold text-foreground font-heading flex items-center gap-3">
              <span>Current Stack</span>
              <Sparkles className="w-5 h-5 text-accent-yellow" />
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Framer Motion"].map(
                (tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    className="px-4 py-2 text-sm bg-card border border-accent/20 rounded-full font-medium text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-200 font-mono"
                  >
                    {tech}
                  </motion.span>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>

        <Annotation text="Always learning" delay={0.5} />
      </div>
    </section>
  )
}
