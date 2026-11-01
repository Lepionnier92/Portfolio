"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code2, Layers, Zap } from "lucide-react"

const expertiseAreas = [
  {
    icon: Code2,
    title: "Diagnostic rapide de pannes",
    description: "capacité à analyser les dysfonctionnements (sur place ou à distance), lire des plans/schémas techniques et identifier l'origine d'une défaillance pour éviter des arrêts de production prolongés",
    details: [
      "Utilisation des appareils de mesure (multimètre, pince ampermétrique) et traçage de schémas électriques.",
      "Application stricte des consignes de sécurité (consignation LOTO).",
      "Sécuriser la reprise de production.",
    ],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Layers,
    title: "La maîtrise de la GMAO",
    description: "Utilisation des outils numériques pour planifier les interventions préventives, assurer le suivi des pannes, gérer les stocks de pièces et historiser toutes Les actions.",
    details: [
      "Saisie des bons d'intervention, suivi des historiques et remontée des dysfonctionnements terrain.",
      "Gestion de l'inventaire des pièces de rechange et des seuils d'alerte.",
      "Planification des gammes de maintenance préventive et corective.",
    ],
    gradient: "from-accent-secondary/20 to-accent-secondary/5",
  },
  {
    icon: Zap,
    title: "La polyvalence technique",
    description: "Maîtrise des domaines fondamentaux comme l'électrotechnique, la mécanique, l'hydraulique, la pneumatique ou l'automatisation pour intervenir sur des équipements variés",
    details: [
      "Lecture et interprétation de schémas unifilaires et multifonctionnels (Automation Studio)",
      "Dépannage sur des systèmes électromécaniques, pneumatiques et asservissements de vitesse.",
      "Connexion d'équipements sur réseaux industriels (Modbus) ",
    ],
    gradient: "from-accent-tertiary/20 to-accent-tertiary/5",
  },
]

export default function Expertise() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Competence Clé</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compétences spécialisées développées à travers des défis réels et un apprentissage continu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`group relative p-8 h-full glass-strong border-accent/20 hover:border-accent/50 transition-all duration-300 overflow-hidden`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center shadow-lg shadow-accent/20"
                  >
                    <area.icon className="w-7 h-7 text-accent-foreground" />
                  </motion.div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-border/50">
                    {area.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-accent mt-1">•</span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
