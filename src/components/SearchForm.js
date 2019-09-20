// import React, { useState,useEffect } from "react";
// import axios from 'axios';
// import '../index.css';

// const [searchs, setSearches] = useState([]);
// useEffect(() => {
//   axios.get('https://rickandmortyapi.com/api/character/')
//   .then(response => {
//     const searchInfo = response.data.results;
//     setSearches(searchInfo);
//   })
//   .catch(error => {
//     console.log(error);
//   })
// }, []);

// export default function SearchForm() {

// const [searchTerm, setSearchTerm] = useState('');
// const [seachResults, setSearchResults] = useState([]);

// useEffect((searchInfo)=> {
//   const results = searchInfo.filter(character => character.toLowerCase().includes(searchTerm)
//   );
// },[searchTerm]);

// const handleChange = event => {
//   setSearchTerm(event.target.value);
// };
// return(
//   <div className ='searchh'>
//   <form>
//     <label for ='name'>Search: </label>
//     <input 
//     id="name"
//     type='text'
//     name='textfield'
//     placeholder="Search"
//     value={searchTerm}
//     onChange={handleChange}/>
//   </form>
//   <div className ='character-listt'>
//     <ul>
//       {searchResults.map(character => (
//         <li>{character}</li>
//       ))}
//     </ul>
//   </div>
//   </div>
// )
// }



