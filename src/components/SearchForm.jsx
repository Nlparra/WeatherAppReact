import { useState } from 'react'

const SearchForm = ({ setUserInput }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value.trim()) return
    setUserInput(value.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="flex-1 rounded-xl px-4 py-3 text-slate-900 outline-none"
        placeholder="Search city"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className="rounded-xl bg-sky-400 px-4 font-medium text-slate-900">
        Search
      </button>
    </form>
  )
}

export default SearchForm
