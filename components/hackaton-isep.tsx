import Link from "next/link"

export default function HackatonIsep() {
  return (
    <main className="min-h-screen px-6 py-16">
      <article className="mx-auto max-w-4xl space-y-8">
        <Link href="/#work" className="text-accent hover:underline">
          ← Retour aux projets
        </Link>
        <header className="rounded-2xl bg-gradient-to-br from-accent-secondary to-accent-pink p-8">
          <p className="font-mono text-sm">2025</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Hackaton ISEP</h1>
        </header>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Real-time data visualization platform for enterprise metrics with sub-second query response.
        </p>
        <p className="leading-relaxed">
          Compétition d&apos;innovation et d&apos;idéation en équipe mixte. Conception d&apos;une solution
          technologique visant à utiliser l&apos;IA pour optimiser le matching professionnel et la valorisation
          des compétences terrain.
        </p>
        <div className="flex flex-wrap gap-2">
          {["React Native + Expo SDK 54", "TypeScript", "NativeWind(Tailwind CSS)", "Expo Router"].map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </main>
  )
}
