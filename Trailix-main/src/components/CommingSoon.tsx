export const TrailixComingSoon = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.shutterstock.com/image-photo/cinema-movie-theatre-purple-seats-260nw-1965330658.jpg"
          className="w-full h-full object-cover  blur-sm"
          alt="Streaming Background"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black"></div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[60vh] relative z-10 px-4 text-center">
        <div className="mb-4">
          <span className="text-[#C384FC] font-black tracking-[0.3em] text-xs uppercase bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
            Próximamente
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img
            alt="Trailix Logo"
            className="relative mx-auto mb-6 w-10 h-10 md:w-32 md:h-32 drop-shadow-2xl"
            src="https://bhxjicxiqcykhomkpmpb.supabase.co/storage/v1/object/public/assets/android-chrome-192x192.png"
          />
        </div>

        <div className="max-w-lg mx-auto">
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            Tu dosis diaria de cine. Explora y descubre los últimos trailers de películas y series
            en <span className="text-white font-medium">un solo lugar.</span>
          </p>
        </div>

        {/* Decoración inferior: Línea de carga sutil */}
        <div className="mt-12 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-linear-to-r from-blue-500 to-purple-600 w-1/3"></div>
        </div>
      </div>
      <div className="absolute bottom-4 text-sm text-gray-400">
        &copy; 2024 Trailix. Todos los derechos reservados.
      </div>
    </div>
  )
}
