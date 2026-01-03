"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnnotationProps {
  text: string
  delay?: number
  position?: "left" | "right"
  className?: string
}

export default function Annotation({ text, delay = 0, position = "left", className }: AnnotationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={cn(
        "absolute pointer-events-none select-none",
        position === "left" ? "left-4 md:left-12" : "right-4 md:right-12",
        "top-1/4 hidden md:block",
        className,
      )}
    >
      <svg viewBox="0 0 180 80" className="w-40 h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Cloud shape path */}
        <path
          d="M 20 40 Q 10 35, 15 25 Q 20 15, 30 18 Q 35 10, 45 15 Q 55 10, 65 18 Q 75 15, 85 20 Q 95 15, 105 25 Q 110 35, 100 40 Q 105 50, 95 55 Q 90 65, 75 60 Q 70 70, 55 65 Q 45 70, 35 65 Q 25 70, 20 60 Q 10 55, 15 45 Q 10 45, 20 40 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted-foreground opacity-30"
        />
        {/* Pointer tail */}
        <path
          d="M 90 60 L 110 75 L 95 65"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted-foreground opacity-30"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-muted-foreground opacity-50 px-6 italic">
        {text}
      </span>
    </motion.div>
  )
}
