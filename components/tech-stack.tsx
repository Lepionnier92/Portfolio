"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useState } from "react"

const techStack = {
  "Automatisme & Supervision": [
    { name: "PLCs", color: "text-orange-500" },
    { name: "Automates", color: "text-blue-500" },
    { name: "IHM", color: "text-cyan-400" },
    { name: "Touch Panel", color: "text-foreground" },
    ],
  "Électrotechnique & Pneumatique": [
    { name: "Automation Studio", color: "text-green-500" },
    { name: "Multimètres",  color: "text-gray-400" },
    { name: "Capteurs", color: "text-purple-400" },
    { name: "Vérins",  color: "text-blue-400" },
    { name: "Variateurs de vitesse",  color: "text-red-500" },
  ],
  "Outils Numériques & IoT": [
    { name: "GMAO",  color: "text-yellow-400" },
    { name: "Capteurs connectés",  color: "text-blue-500" },
    { name: "Réseaux industriels (Modbus)",  color: "text-blue-400" },
    { name: "Python",  color: "text-cyan-400" },
  ],
  /*"Outils & DevOps ✧*。": [
    { name: "Git", icon: "🌿", color: "text-orange-600" },
    { name: "Docker", icon: "🐋", color: "text-blue-500" },
    { name: "Netlify", icon: "▲", color: "text-foreground" },
    { name: "GitHub Actions", icon: "⚙️", color: "text-gray-400" },
  ],*/
}

function TechSkill({ tool, index, categoryIndex }: { tool: any; index: number; categoryIndex: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-50, 50], [15, -15]), { damping: 20, stiffness: 200 })
  const rotateY = useSpring(useTransform(x, [-50, 50], [-15, 15]), { damping: 20, stiffness: 200 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: categoryIndex * 0.1 + index * 0.05,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      className="group relative"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative px-5 py-3 glass rounded-xl border border-border hover:border-accent/50 transition-all duration-300 flex items-center gap-2 cursor-pointer overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent-secondary/20 to-accent-tertiary/20 opacity-0"
        
        />

        {isHovered && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                }}
                
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}
          </motion.div>
        )}

        <motion.span
          className={`text-xl ${tool.color} relative z-10`}
          
        >
          {tool.icon}
        </motion.span>
        <span className="text-sm font-medium text-foreground relative z-10">{tool.name}</span>
      </motion.div>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i === 0 ? "rgba(99, 102, 241, 0.1)" : i === 1 ? "rgba(168, 85, 247, 0.1)" : "rgba(236, 72, 153, 0.1)"
              } 0%, transparent 70%)`,
              left: `${i * 40}%`,
              top: `${i * 30}%`,
            }}
           
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{
              backgroundImage: "linear-gradient(90deg, currentColor 0%, rgb(99, 102, 241) 50%, currentColor 100%)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
            }}
          >
            Tech Stack
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I use to build modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(techStack).map(([category, tools], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass-strong border-accent/20 hover:border-accent/40 transition-all duration-300 h-full group overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  
                />

                <motion.h3
                  className="text-lg font-semibold mb-6 text-accent relative z-10"
                  whileHover={{ x: 5 }}
                >
                  {category}
                </motion.h3>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {tools.map((tool, index) => (
                    <TechSkill key={tool.name} tool={tool} index={index} categoryIndex={categoryIndex} />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
