import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { HomePage } from './HomePage'

const LandingPage = () => {
    const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  return (
    <div>
        <HomePage key={search} search={search}/>
    </div>
  )
}

export default LandingPage