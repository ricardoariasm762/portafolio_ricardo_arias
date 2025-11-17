export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Página no encontrada</h1>
        <p className="text-[color:var(--muted)]">La página solicitada no existe.</p>
        <a href="#home" className="text-[color:var(--primary)] hover:underline">Volver al inicio</a>
      </div>
    </main>
  );
}