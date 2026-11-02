"use client"

import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

type ProfessionalExperience = {
  role: string
  company: string
  type: string
  period: string
  location: string
  description: string
  skills: string[]
}

const experiences: ProfessionalExperience[] = [
  {
    role: "Technicien maintenance aéronautique",
    company: "Air France",
    type: "Stage",
    period: "Juin 2026",
    location: "Orly, Île-de-France, France",
    description: "desassemblage inspection et remontage de moteurs d'avion GE90 et GE110",
    skills: ["Maintenace Preventive", "Diagnostic", "Montage/Demontage"],
  },
  {
    role: "Technicien maintenance",
    company: "RATPgroup",
    type: "Stage",
    period: "Novembre 2025",
    location: "Ville de Paris, Île-de-France, France",
    description: "Maintenance des rames de métro MF67 ",
    skills: ["Maintenance corrective", "Maintenance préventive", "Diagnostic", "Montage/Demontage"],
  },
  {
    role: "Technicien maintenance",
    company: "RATPgroup",
    type: "Stage",
    period: "Juin 2025",
    location: "Boulogne-Billancourt, Île-de-France, France",
    description: "Ajoutez une courte description de cette expérience professionnelle.",
    skills: ["Maintenance corrective", "maintenance préventive", "Montage/Demontage"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 space-y-4">
          <p className=" text-sm uppercase tracking-[0.3em] text-accent">Parcours professionnel</p>
          <h2 className="font-display text-5xl font-bold tracking-tight md:text-6xl">Mes expériences</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Retrouvez ici les expériences qui ont contribué à mon parcours.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <Card key={`${experience.company}-${experience.period}`} className="h-full border-border bg-card p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent/10 p-3 text-accent">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{experience.role}</h3>
                    <p className="font-medium text-accent">{experience.company}</p>
                  </div>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-accent" />
                  {experience.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  {experience.location}
                </span>
              </div>

              <p className="mb-6 leading-relaxed text-muted-foreground">{experience.description}</p>

              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}