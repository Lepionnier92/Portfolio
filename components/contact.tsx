"use client"

import type React from "react"

import { motion, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Send, CheckCircle2, Sparkles } from "lucide-react"
import { useState, useRef } from "react"

const socialLinks = [
  { icon: Github, href: "https://github.com/julesbellavoir", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/julesbellavoir", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/julesbellavoir", label: "Twitter" },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  const mouseX = useSpring(0, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const webhookUrl =
        "https://discord.com/api/webhooks/1457009977519767734/DbPSvAs39nNff_YX_rxrS3wgxPOgldiyLoti45kxU1NkVLoJkN1c9ZOH4FPCTNZNKsm4"

      const embed = {
        embeds: [
          {
            title: "📬 Nouveaux Contact sur le Portefolio",
            color: 0x6366f1,
            fields: [
              {
                name: "👤 Nom",
                value: formData.name,
                inline: true,
              },
              {
                name: "📧 Email",
                value: formData.email,
                inline: true,
              },
              {
                name: "💬 Message",
                value: formData.message,
              },
            ],
            timestamp: new Date().toISOString(),
            footer: {
              text: "Formulaire de Contact",
            },
          },
        ],
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(embed),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Me contacter</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Créons quelque chose d'incroyable
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Vous avez un projet en tête ou une question à poser ? Envoyez-moi un message et je vous répondrai rapidement !
          </motion.p>
        </motion.div>

        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="max-w-2xl mx-auto"
        >
          <div className="relative group">
            {/* Animated border gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-blue-500 to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt" />

            <form
              onSubmit={handleSubmit}
              className="relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 md:p-10 space-y-6 shadow-2xl"
            >
              {/* Name field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                  Votre nom
                  <span className="text-accent">*</span>
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Jean Dupont"
                />
              </motion.div>

              {/* Email field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                  Adresse e-mail
                  <span className="text-accent">*</span>
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="jean@exemple.com"
                />
              </motion.div>

              {/* Message field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                  Votre message
                  <span className="text-accent">*</span>
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Précisez votre projet ou posez votre question ici..."
                />
              </motion.div>

              {/* Submit button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full h-12 bg-gradient-to-r from-accent to-blue-500 hover:from-accent/90 hover:to-blue-500/90 text-white font-medium rounded-lg shadow-lg shadow-accent/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    {status === "loading" && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    )}
                    {status === "success" && <CheckCircle2 className="w-5 h-5" />}
                    {status === "idle" && <Send className="w-5 h-5" />}
                    {status === "error" && <Mail className="w-5 h-5" />}

                    {status === "loading" && "Envoi en cours..."}
                    {status === "success" && "Message envoyé !"}
                    {status === "idle" && "Envoyer le message"}
                    {status === "error" && "Réessayer"}
                  </span>
                </Button>
              </motion.div>

              {/* Success message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center"
                >
                  <p className="text-green-500 font-medium">Merci ! Je vous répondrai bientôt.</p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex gap-6 justify-center pt-16"
        >
          {socialLinks.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative text-muted-foreground hover:text-accent transition-colors p-4 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm group-hover:border-accent/50 group-hover:bg-accent/10">
                <Icon className="w-6 h-6" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="pt-16 text-center text-sm text-muted-foreground"
        >
          © 2025 Jules Bellavoir. Créé avec passion et code.
        </motion.div>
      </div>
    </section>
  )
}
