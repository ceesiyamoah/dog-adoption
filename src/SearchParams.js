import React, { useEffect, useState } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  useEffect(() => {
    setBreed("");
    setBreeds([]);
    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map((breed) => breed.name);
      setBreeds(breedString);
    }, console.error);
  }, [setBreed, setBreeds, animal]);

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
