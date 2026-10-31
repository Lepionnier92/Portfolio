"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ExternalLink, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import Annotation from "@/components/annotation"
import { useRef } from "react"

const projects = [
  {
    title: "Chef d'œuvre MSPC",
    description: "Reabilitation dune vielle porte de bus pour quelle puise servir a de future TP",
    outcome:
      "ce projet a été réalisé dans le cadre de mon chef d'œuvre au sein du MSPC, il a consisté à réhabiliter une vielle porte de bus pour qu'elle puisse servir à de futurs travaux pratiques. Le projet a été un succès et a permis de mettre en pratique mes compétences en mécanique et en électronique.",
    tags: ["Chef d'œuvre", "MSPC", "Automate", "Porte de bus"],
    year: "2025-2027",
    gradient: "from-accent to-accent-secondary",
    link: "",
  },
  {
    title: "Hackaton ISEP",
    description: "Real-time data visualization platform for enterprise metrics with sub-second query response.",
    outcome:
      "Canvas-based rendering for 10k+ data points—SVG became bottleneck at 3k points (45fps → 12fps), canvas maintains 60fps at scale. Debounced queries with stale-while-revalidate pattern reduced API load by 60%—users see cached data instantly, fresh data arrives within 200ms. Server-side aggregation instead of client-side filtering prevented OOM errors on large datasets—moved computation to PostgreSQL, reduced client memory from 2GB to 150MB.",
    tags: ["React", "D3.js", "TypeScript", "WebSocket"],
    year: "2025",
    gradient: "from-accent-secondary to-accent-pink",
    link: "#",
  },
  {
    title: "Médaille d'Or National MAF",
    description: "Meilleur Aprentit de France (MAF)",
    outcome:
      "",
    tags: ["Fabrication", "Diagnostic", "Panne", "Montage/Demontage"],
    year: "2026",
    gradient: "from-accent-pink to-accent-tertiary",
    link: "#",
  },
]

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
          <motion.h2
            className="text-5xl md:text-6xl font-bold tracking-tight font-display"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{
              backgroundImage: "linear-gradient(to right, var(--foreground), var(--accent), var(--foreground))",
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
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
              <Card className="group relative p-6 h-full hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/40 transition-all duration-300 cursor-pointer border-border bg-card overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10`}
                  initial={false}
                  whileHover={{
                    opacity: 0.15,
                    scale: 1.5,
                  }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent rounded-full"
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        scale: 0,
                      }}
                      whileHover={{
                        y: [null, -50],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  ))}
                </motion.div>

                <div className="relative space-y-4 h-full flex flex-col">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <motion.span
                        className="text-xs text-accent font-mono px-2 py-1 bg-accent/10 rounded border border-accent/20 font-heading"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {project.year}
                      </motion.span>
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Zap className="w-4 h-4 text-accent-yellow" />
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
                      whileHover={{ scale: 1.02, borderColor: "rgba(99, 179, 237, 0.4)" }}
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
                        className="px-2.5 py-1 text-xs bg-secondary/50 text-foreground border border-border rounded-full font-medium font-mono"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-sm text-accent font-medium pt-2 font-heading"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Voir le projet
                    <motion.div
                      animate={{ rotate: [0, -15, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Annotation text="La qualité plutôt que la quantité" delay={0.3} position="right" />
      </motion.div>
    </section>
  )
}
