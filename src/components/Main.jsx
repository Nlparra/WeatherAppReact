import { useState } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import logo from '../assets/logo.png'

const Main = () => {
  const [userInput, setUserInput] = useState('')

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex justify-center px-4">
      <div className="w-full max-w-md pt-10 space-y-6">

        <div className="text-center">
          <img src={logo} className="mx-auto w-36 mb-3" />
          <h1 className="text-xl font-semibold tracking-tight">
            Weather Forecast
          </h1>
        </div>

        <SearchForm setUserInput={setUserInput} />

        {userInput && <SearchResults userInput={userInput} />}

      </div>
    </div>
  )
}

export default Main
