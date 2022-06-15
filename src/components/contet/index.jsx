import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

import { useState } from "react";

import { ItemLists } from "../sw-item-lists";

import { ItemSpisok } from "../sw-item-spisok";

export const Content = () => {

   const [selector, setSelector] = useState("Characters"); //initial value : Character

   const handleSelectorChange = (event) => {
      // console.log(event.target.value)
      setSelector(event.target.value);
   }

   return (
      <>
      <div className="content-layout">
         <select 
         value={selector}
         placeholder="Choose your path" 
         className="select-item"
         onChange={handleSelectorChange}>
            <option>Characters</option>
            <option>Planets</option>
            <option>Starships</option>
         </select>

        {/* non-HTML elements should be used in CURLY BRACES */}

        {selector==="Characters" && swCharacters.map( (character) => ( //here && means if left side is true, then show the right side
         <ItemLists key={character.name} item={character} type="chars">
            <ItemSpisok>gender: {character.gender}</ItemSpisok>
            <ItemSpisok>birthday: {character.birth_year}</ItemSpisok>
         </ItemLists>
         ))}

        {selector==="Planets" && swPlanets.map( (planets) => ( //here && means if left side is true, then show the right side
            <ItemLists key={planets.name} item={planets} type="planets">
               <ItemSpisok>orbital period: {planets.orbital_period}</ItemSpisok>
               <ItemSpisok>rotational period: {planets.rotation_period}</ItemSpisok>
            </ItemLists>
         ))}

         {selector==="Starships" && swStarships.map( (ship) => ( //here && means if left side is true, then show the right side
            <ItemLists key={ship.name} item={ship} type="ships">
               <ItemSpisok>model: {ship.model}</ItemSpisok>
               <ItemSpisok>class: {ship.starship_class}</ItemSpisok>
               <ItemSpisok>crew: {ship.crew}</ItemSpisok>
               <ItemSpisok>passenger number: {ship.passengers}</ItemSpisok>
            </ItemLists>
         ))}
      </div>
      </>
   )
};