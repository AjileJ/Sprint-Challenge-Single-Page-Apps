import React from "react";


export default function CharacterCard(props) {
  console.log(props)
  return(
<>
<h1>Characters</h1>
<h2>Name: {props.name}</h2>
<h3>Species: {props.species}</h3>
</>
  )
}
