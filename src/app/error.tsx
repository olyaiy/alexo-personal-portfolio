"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-[#f5f5f7] mb-4">Something went wrong</h1>
        <p className="text-[#86868b] text-lg mb-8">An unexpected error occurred.</p>
        <button
          onClick={reset}
          className="inline-block px-6 py-3 rounded-xl bg-[#1c1c1e] text-[15px] font-medium text-[#f5f5f7] hover:bg-[#2c2c2e] transition-colors duration-150"
        >
          Try again
        </button>
      </div>
    </main>
  )
}
