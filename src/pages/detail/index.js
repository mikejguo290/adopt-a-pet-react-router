import React, { useEffect, useState } from 'react';
import { getPetDetails } from '../../api/petfinder';
import Hero from '../../components/hero';

// make a call to getPetDetails from api/petfinder to get details of one pet. save it to state data and render it. 

// uses loading and error states to handle Promise Lifecycle states. loading=true and error=false by default. 
// loading is set to false at end of try catch back.
// see a nested ternary expression, rendering different elements/components on lifecycle state. 
// loading? loading msg : error? error msg : render pet detaisl 

// again, async function to get data is defined AND executed inside useEffect hook which fires whenever pet id changes. 


const PetDetailsPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const id = '51322435'; // <--- Update me!

  useEffect(() => {
    async function getPetsData() {
      try {
        const petsData = await getPetDetails(id);
        setData(petsData);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }

    getPetsData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <div>
          {/* Redirect to /pet-details-not-found if there was an error! */}
        </div>
      ) : (
        <main>
          <Hero
            image={data.photos[1]?.full || 'https://i.imgur.com/aEcJUFK.png'}
            displayText={`Meet ${data.name}`}
          />
          <div className="pet-detail">
            <div className="pet-image-container">
              <img
                className="pet-image"
                src={
                  data.photos[0]?.medium || 'https://i.imgur.com/aEcJUFK.png'
                }
                alt=""
              />
            </div>
            <div>
              <h1>{data.name}</h1>
              <h3>Breed: {data.breeds.primary}</h3>
              <p>Color: {data.colors.primary || 'Unknown'}</p>
              <p>Gender: {data.gender}</p>
              <h3>Description</h3>
              <p>{data.description}</p>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default PetDetailsPage;
