"use client"

import type React from "react"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Award, Briefcase, Coffee, Users } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  {
    icon: Briefcase,
    value: 36,
    label: "Projets Livrés",
    sublabel: "Applications prêtes pour la production",
    gradient: "from-accent to-accent-secondary",
  },
  {
    icon: Users,
    value: 280,
    label: "Clients Satisfaits",
    sublabel: "Partenariats à long terme",
    gradient: "from-accent-secondary to-accent-tertiary",
  },
  {
    icon: Coffee,
    value: 3000,
    suffix: "+",
    label: "Utilisateurs Actifs",
    sublabel: "Utilisateurs engagés quotidiennement",
    gradient: "from-accent-tertiary to-accent",
  },
  {
    icon: Award,
    value: 12,
    label: "Prix Remportés",
    sublabel: "Excellence en design & ingénierie",
    gradient: "from-accent to-accent-tertiary",
  },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 })

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })

    return () => unsubscribe()
  }, [springValue])

  useEffect(() => {
    const timer = setTimeout(() => {
      motionValue.set(value)
    }, 500)

    return () => clearTimeout(timer)
  }, [value, motionValue])

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { damping: 20, stiffness: 200 })
  const springY = useSpring(y, { damping: 20, stiffness: 200 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set((e.clientX - centerX) / 10)
    y.set((e.clientY - centerY) / 10)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
    >
      <Card className="group relative p-8 glass-strong border-accent/20 hover:border-accent/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-accent/20 h-full">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/50 rounded-full"
              style={{
                left: "50%",
                top: "30%",
              }}
              animate={{
                x: [0, Math.cos((i * 120 * Math.PI) / 180) * 40, 0],
                y: [0, Math.sin((i * 120 * Math.PI) / 180) * 40, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative space-y-4 text-center">
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{
              rotate: { duration: 0.5 },
              scale: { type: "spring", stiffness: 300, damping: 10 },
            }}
            className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-accent via-accent-secondary to-accent-tertiary items-center justify-center shadow-xl shadow-accent/30 group-hover:shadow-2xl group-hover:shadow-accent/50 transition-all duration-500"
          >
            <stat.icon className="w-8 h-8 text-accent-foreground" />
          </motion.div>

          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-5xl font-bold bg-gradient-to-br from-accent via-accent-secondary to-accent-tertiary bg-clip-text text-transparent"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </motion.div>
            <motion.div className="space-y-1" whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
              <div className="text-base font-semibold text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
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
            whileInView={{
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, currentColor, rgb(99, 102, 241), rgb(168, 85, 247), currentColor)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
            }}
          >
            Impact en Chiffres
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Résultats mesurables issus d'efforts collaboratifs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
