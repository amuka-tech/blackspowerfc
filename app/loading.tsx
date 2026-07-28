export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-4">
      <div className="w-16 h-16 border-4 border-brand-red border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-brand-light font-heading tracking-widest uppercase text-sm">Loading...</p>
    </div>
  );
}
