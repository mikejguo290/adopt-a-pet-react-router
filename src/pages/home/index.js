import React, { useEffect, useState } from 'react';
import { getPets } from '../../api/petfinder';
import Hero from '../../components/hero';
import Pet from '../../components/pet';
import { useParams, Link } from 'react-router-dom'; // extract params from the url, having created path="/:type?" in Route for HomePage.

// fetches pets data and on render or when (pet) type is changed. 
// renders homepage with <Hero>, pets for adotpion near you and list of grids with pet image & pet attributes. 
const HomePage = () => {
  const [data, setData] = useState(null);
  const { type }  = useParams(); // useParams returns an object whose keys are the names of params and values are the params values. 
  /* type is an optional param for the path and also for getPets(), if type isn't present', h3 serves up 'pets available for adoption
  near you and the data is of all pets. */

  useEffect(() => {
    async function getPetsData() {
      const petsData = await getPets(type);
      setData(petsData);
    }

    getPetsData();
  }, [type]);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page">
      <Hero />
      <h3>
        <span className="pet-type-label">{type ? `${type}s` : 'Pets'}</span>{' '}
        available for adoption near you
      </h3>

      {data.length ? (
        <div className="grid">
          {data.map((animal) => (
            <Link // Change me to a Link!
              key={animal.id}
              to={`/${animal.type.toLowerCase()}/${animal.id}`}
              className="pet"
            >
              <article>
                <div className="pet-image-container">
                  {
                    <img
                      className="pet-image"
                      src={
                        animal.photos[0]?.medium ||
                        '/missing-animal.png'
                      }
                      alt=""
                    />
                  }
                </div>
                <h3>{animal.name}</h3>
                <p>Breed: {animal.breeds.primary}</p>
                <p>Color: {animal.colors.primary}</p>
                <p>Gender: {animal.gender}</p>
              </article>
            </Link> // Don't forget to change me!
          ))}
        </div>
      ) : (
        <p className="prompt">No {type}s available for adoption now.</p>
      )}
    </div>
  );
};

export default HomePage;
