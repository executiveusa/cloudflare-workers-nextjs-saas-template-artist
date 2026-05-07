const steps = ["Concept", "Sketch", "Material", "Finished Piece", "Handoff"];

export function ProcessTimeline() {
  return <section className="container mx-auto px-4 py-16"><h2 className="text-3xl font-bold">Process Timeline</h2><div className="mt-6 grid gap-3 md:grid-cols-5">{steps.map((step, index) => <div key={step} className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-orange-300">0{index + 1}</p><p>{step}</p></div>)}</div></section>;
}
