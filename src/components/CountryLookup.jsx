"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState('');

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`);
      const { country } = await response.json();

      setCountry(country)      
    }
    
    getCountry()
  }, []);

  return (
    <div>{country}</div>
  )
}
