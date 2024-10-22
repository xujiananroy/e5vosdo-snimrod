export default function E5NLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="pt-8 md:pt-10">
      <div className="p-1 text-foreground">{children}</div>
    </section>
  );
}
