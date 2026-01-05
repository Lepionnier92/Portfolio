"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import Annotation from "@/components/annotation"

const blogPosts = [
  {
    title: "Construire des applications React évolutives avec les Server Components",
    date: "2024-12-10",
    description:
      "Plongeon dans l'architecture des React Server Components, les patterns de récupération de données et les compromis de performance dans Next.js 14.",
    readTime: "8 min de lecture",
    tags: ["React", "Next.js", "Performance"],
  },
  {
    title: "Optimisation des requêtes de base de données : une approche pragmatique",
    date: "2024-11-28",
    description:
      "Leçons apprises en optimisant des requêtes lentes en production. Stratégies d'indexation, planification de requêtes et quand dénormaliser.",
    readTime: "12 min de lecture",
    tags: ["PostgreSQL", "Performance", "Backend"],
  },
  {
    title: "Conception d'API type-safe avec TypeScript et Zod",
    date: "2024-11-15",
    description:
      "Construire une sécurité de type de bout en bout du client au serveur. Validation à l'exécution, inférence de types et expérience développeur.",
    readTime: "10 min de lecture",
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Écrits</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Articles techniques sur le développement web, les décisions d'architecture et les leçons apprises en construisant de vrais produits.
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
                    <span>{new Date(post.date).toLocaleDateString("fr-FR", { month: "short", day: "numeric" })}</span>
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
                    <span>Lire la suite</span>
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
            <span className="font-medium">Voir tous les articles</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <Annotation text="Le savoir partagé est un savoir multiplié." delay={0.3} position="right" />
      </div>
    </section>
  )
}
