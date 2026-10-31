"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import Annotation from "@/components/annotation"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { useRef, useEffect } from "react"

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 })
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      mouseX.set((clientX - centerX) / 25)
      mouseY.set((clientY - centerY) / 25)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${200 + Math.random() * 80}, 80%, 60%)`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div
              className="w-20 h-20 border-2 border-accent/20"
              style={{
                transform: `perspective(1000px) rotateX(${i * 30}deg)`,
                borderRadius: i % 2 === 0 ? "50%" : "0%",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="space-y-6"
            >
              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.span
                  className="inline-block text-lg text-muted-foreground font-body"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  Bonjour ! Je suis
                </motion.span>
                <motion.h1
                  className="text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1] font-display"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, type: "spring", damping: 12 }}
                >
                  <motion.span
                    className="bg-gradient-to-br from-accent via-accent-secondary to-accent-pink bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Jules Bellavoir
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 glass-strong text-accent rounded-full text-sm font-medium font-heading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  boxShadow: "0 0 30px rgba(99, 179, 237, 0.5)",
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                Etudiant en MSPC a La Salle Saint Nicolas, Issy-les-moulineaux
              </motion.span>

              <motion.p
                className="text-xl md:text-2xl font-medium text-foreground/90 text-balance font-heading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Moins de blabla, plus de maintenance.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="space-y-3"
            >
              {["Anticiper les défaillances", "Résoudre des problèmes complexes", "Travailler avec les technologies web modernes"].map(
                (text, i) => (
                  <motion.p
                    key={text}
                    className="text-lg text-muted-foreground leading-relaxed font-body flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                    />
                    {text}
                  </motion.p>
                ),
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, type: "spring" }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="min-w-[160px] bg-gradient-to-r from-accent to-accent-secondary hover:shadow-2xl hover:shadow-accent/50 text-accent-foreground shadow-lg transition-all duration-300 font-heading"
                  onClick={scrollToWork}
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Voir mes projets
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="min-w-[160px] glass-strong border-2 border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-all duration-300 bg-transparent font-heading"
                  onClick={scrollToContact}
                >
                  Contact
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, label: "GitHub", href: "https://github.com", color: "accent" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/julesbellavoir", color: "accent-secondary" },
                { icon: Mail, label: "Email", href: "mailto:jules.bellavoir@gmail.com", color: "accent-pink" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1, type: "spring" }}
                  whileHover={{
                    scale: 1.2,
                    rotateY: 15,
                    rotateX: -10,
                    z: 50,
                  }}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, type: "spring", damping: 15 }}
            className="flex justify-center md:justify-end"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <motion.div
              className="relative"
              style={{
                x: smoothMouseX,
                y: smoothMouseY,
                rotateX: useTransform(smoothMouseY, [-50, 50], [10, -10]),
                rotateY: useTransform(smoothMouseX, [-50, 50], [-10, 10]),
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.05, z: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent via-accent-secondary to-accent-pink rounded-full blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                style={{ translateZ: "-50px" }}
              />

              <motion.div
                className="absolute -top-6 -right-6 text-6xl"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                style={{ translateZ: "50px" }}
              >
                ✨
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 text-5xl"
                animate={{
                  rotate: [0, -15, 15, 0],
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{ translateZ: "30px" }}
              >
                🚀
              </motion.div>

              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/40 shadow-2xl shadow-accent/30"
                whileHover={{
                  borderColor: "rgba(99, 179, 237, 0.8)",
                  boxShadow: "0 0 50px rgba(99, 179, 237, 0.5)",
                }}
              >
                <img src="#" alt="Jules Bellavoir" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="cursor-pointer glass px-4 py-3 rounded-full hover:border-accent/50 transition-colors"
            onClick={scrollToWork}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown className="w-5 h-5 text-accent" />
          </motion.div>
        </motion.div>

        {/*<Annotation text="Moins de paroles, plus de code" delay={1.8} />*/}
      </div>
    </motion.section>
  )
}
