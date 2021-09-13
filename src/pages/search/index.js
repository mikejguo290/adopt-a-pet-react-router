import React, { useState, useEffect, useMemo } from 'react';
import Hero from '../../components/hero';
import { getPets } from '../../api/petfinder';
import Pet from '../../components/pet';


/* use query search params to make a call to getPets from api/petfinder. this is done with a call to async setPets function, defined inside useEffect();
lastly render list of pets. */

// import useLocation here
import { useLocation } from 'react-router-dom';

const SearchPage = () => {

  // Get the search value from useLocation() here
  const { search } = useLocation(); // useLocation() hook returns an object with search property. 

  const queryParams = useMemo(() => { // with expensive computation, it is best to use wrap the logic in useMemo()
    return new URLSearchParams(search); //useMemo hook runs this computation only on first render and when search changes. it returns the computed value on other renders.
  }, [search]);

  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function getPetsData() {
      const petNameToFind = 'REPLACE ME';
      const petsData = await getPets('', petNameToFind);

      setPets(petsData);
    }

    getPetsData();
  }, [queryParams]);

  return (
    <div className="page">
      <Hero displayText={`Results for ${queryParams.get('name')}`} />

      <h3>Pets available for adoption near you</h3>

      <main>
        <div className="grid">
          {pets.map((pet) => (
            <Pet animal={pet} key={pet.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
