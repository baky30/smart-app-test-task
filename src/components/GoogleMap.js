import React from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import InfoWindow from "react-google-maps/lib/components/InfoWindow";

function Map({ churches, city, selectedChurch, setSelectedChurch }) {

  return (
    <>
      <GoogleMap
        defaultZoom={11.5}
        defaultCenter={{ lat: city.lat, lng: city.lng }}
      >
        {churches.map(church => (
          <Marker
            key={church.id}
            onClick={ () => { setSelectedChurch(church) } }
            position={{
              lat: +church.latitude,
              lng: +church.longitude
            }}
            
          />
        ))}
        { selectedChurch && (
              <InfoWindow onCloseClick={() => { setSelectedChurch(null); }}
                position={{
                  lat: +selectedChurch.latitude,
                  lng: +selectedChurch.longitude
                }}
              >
                <div>
                  <h3>{selectedChurch.name}</h3>
                  <p>{selectedChurch.church_address_street_address}</p>
                </div>
              </InfoWindow>)
        }
      </GoogleMap>
    </>
  );
}


export const MapWrapped = withScriptjs(withGoogleMap(Map));

