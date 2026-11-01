import Link from "next/link"

export default function MedailleOrNationalMaf() {
  return (
    <main className="min-h-screen px-6 py-16">
      <article className="mx-auto max-w-4xl space-y-8">
        <Link href="/#work" className="text-accent hover:underline">
          ← Retour aux projets
        </Link>
        <header className="rounded-2xl bg-gradient-to-br from-accent-pink to-accent-tertiary p-8">
          <p className="font-mono text-sm">2026</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Médaille d&apos;Or National MAF
          </h1>
        </header>
        <p className="text-xl leading-relaxed text-muted-foreground">Meilleur Apprenti de France (MAF)</p>
        <p className="leading-relaxed">Ajoutez ici les détails, les étapes et les résultats de ce projet.</p>
        <div className="flex flex-wrap gap-2">
          {["Fabrication", "Diagnostic", "Panne", "Montage/Demontage"].map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </main>
  )
}
