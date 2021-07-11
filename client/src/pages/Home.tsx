import React, { useEffect } from 'react';
import { http } from '../core';

export default function Home() {
  useEffect(() => {
    console.log('getting');
    http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }, []);

  return <div>home</div>
}
