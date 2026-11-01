"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ExternalLink, Zap } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import Annotation from "@/components/annotation"
import { projects } from "@/lib/projects"
import { useRef } from "react"

export default function SelectedWork() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="work" ref={containerRef} className="relative py-32 px-6">
      <motion.div style={{ y }} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="space-y-4 mb-16"
        >
          <motion.h2 className="text-5xl md:text-6xl font-bold tracking-tight font-display">
            Projets Sélectionnés
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed max-w-2xl font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Projets récents dont je suis fier
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
                rotateY: 5,
                z: 50,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block h-full"
                aria-label={`Voir le projet ${project.title}`}
              >
              <Card className="group relative p-6 h-full hover:border-accent/40 transition-all duration-300 cursor-pointer border-border bg-card overflow-hidden">
                <div className="relative space-y-4 h-full flex flex-col">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <motion.span
                        className="text-xs text-accent  px-2 py-1 bg-accent/10 rounded border border-accent/20 font-heading"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {project.year}
                      </motion.span>
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                      </motion.div>
                    </div>
                    <motion.h3
                      className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300 font-heading"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground leading-relaxed font-body text-sm">{project.description}</p>
                  </div>

                  <div className="space-y-2 flex-1">
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-2 bg-accent/5 border border-accent/20 rounded-lg"
                      whileHover={{ borderColor: "rgba(99, 179, 237, 0.4)" }}
                    >
                      <ArrowRight className="w-4 h-4 text-accent" />
                      <p className="text-sm text-foreground font-medium font-body">{project.outcome}</p>
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05, type: "spring" }}
                        whileHover={{ scale: 1.15, y: -3, rotate: 2 }}
                        className="px-2.5 py-1 text-xs bg-secondary/50 text-foreground border border-border rounded-full font-medium "
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-sm text-accent font-medium pt-2 font-heading"
                 
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Voir le projet
                  </motion.div>
                </div>
              </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <Annotation text="La qualité plutôt que la quantité" delay={0.3} position="right" />
      </motion.div>
    </section>
  )
}
