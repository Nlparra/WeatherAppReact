import { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const SearchResults = ({ userInput }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${userInput}&days=5`
        )

        if (!res.ok) throw new Error('City not found')

        const json = await res.json()
        setData(json)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [userInput])

  if (loading) return <p className="text-center opacity-70">Loading…</p>
  if (error) return <p className="text-center text-red-400">{error}</p>

  const { location, current, forecast } = data

  const bgClass =
    current.condition.text.toLowerCase().includes('rain')
      ? 'bg-gradient-to-b from-slate-800 to-slate-950'
      : current.condition.text.toLowerCase().includes('cloud')
      ? 'bg-gradient-to-b from-slate-700 to-slate-950'
      : 'bg-gradient-to-b from-sky-900 to-slate-950'

  return (
    <section className={`rounded-3xl p-4 space-y-4 ${bgClass}`}>

      <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-4">
        <p className="text-xs uppercase tracking-widest opacity-60">
          Location
        </p>
        <h2 className="text-lg font-medium">
          {location.name}, {location.country}
        </h2>
      </div>

      <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={`https:${current.condition.icon}`}
            className="w-12 h-12"
          />
          <span className="text-5xl font-bold">
            {Math.round(current.temp_c)}°
          </span>
        </div>

        <div className="text-right text-sm opacity-80">
          <p>{current.condition.text}</p>
          <p>
            H:{forecast.forecastday[0].day.maxtemp_c}° ·
            L:{forecast.forecastday[0].day.mintemp_c}°
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-4">
        <p className="text-xs uppercase tracking-widest opacity-60 mb-2">
          Forecast
        </p>

       <div className="flex gap-3 overflow-x-auto">
				{forecast.forecastday.map(day => (
					<div
						key={day.date}
						className="min-w-[96px] rounded-2xl bg-white/15 px-3 py-3 text-center text-sm"
					>
						<div className="text-xs uppercase opacity-70">
							{new Date(day.date).toLocaleDateString('en-US', {
								weekday: 'short'
							})}
						</div>

						<img
							src={`https:${day.day.condition.icon}`}
							alt={day.day.condition.text}
							className="mx-auto w-8 h-8 my-1"
						/>

						<div className="font-semibold">
							{Math.round(day.day.maxtemp_c)}°
							<span className="opacity-60 ml-1">
								{Math.round(day.day.mintemp_c)}°
							</span>
						</div>

						<div className="text-[11px] opacity-60 mt-1">
							💧 {day.day.daily_chance_of_rain}%
						</div>
					</div>
				))}
			</div>


      </div>

    </section>
  )
}

export default SearchResults
