import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [chars, setChars] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const charInfo = response.data.results;
      setChars(charInfo);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);
  


  return(
 <div>
   
   {chars.map(char => {
    return(
  <CharacterCard
  key={char.id}
  name={char.name}
  species={char.species} />
)
   })}
 </div>
  );
}
