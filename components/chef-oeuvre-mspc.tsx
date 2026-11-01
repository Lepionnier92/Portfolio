import Link from "next/link"

export default function ChefOeuvreMspc() {
  return (
    <main className="min-h-screen px-6 py-16">
      <article className="mx-auto max-w-4xl space-y-8">
        <Link href="/#work" className="text-accent hover:underline">
          ← Retour aux projets
        </Link>
        <header className="rounded-2xl p-8">
          <p className="text-sm">2025-2027</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Chef d'œuvre MSPC</h1>
        </header>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Réhabilitation d'une vieille porte de bus pour qu'elle puisse servir à de futurs travaux pratiques.
        </p>
        <p className="leading-relaxed">
          Ce projet a été réalisé dans le cadre de mon chef d'œuvre de maintenace pendant ma premier et ma terminal. Ajoutez ici les
          détails techniques, les étapes et les résultats du projet.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Chef d'œuvre", "MSPC", "Automate", "Porte de bus"].map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>
        <section className="space-y-4">

        </section>
      </article>
    </main>
  )
}
