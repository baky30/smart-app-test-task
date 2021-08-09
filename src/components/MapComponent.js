import React, { useEffect, useState } from 'react'
import ChurchInfo from './ChurchInfo';
import { MapWrapped } from './GoogleMap';
import Search from './Search';

export default function MapComponent() {
    const [churches, setChurches] = useState(null);
    const [selectedChurch, setSelectedChurch] = useState(null);
    const [city, setCity] = useState({lat: 40.730610, lng: -73.935242});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://apiv4.updateparishdata.org/Churchs/?lat=${city.lat}&long=${city.lng}&pg=1`)
        .then(res => res.json())
        .then(data => { setChurches(data); setLoading(false); console.log(data); })

        console.log(churches);
    }, [city])

    return (
        <div className="map">
            <Search setCity={setCity} />
            { selectedChurch && <ChurchInfo church={selectedChurch}  /> }
            { loading
                    ? <h1>Loading...</h1> 
                    : <MapWrapped churches={churches} city={city}
                        selectedChurch={selectedChurch} 
                        setSelectedChurch={setSelectedChurch}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDBOWReZSNS8rBbaXnJqpc39bzEVfgfSrw`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />} 
                        /> 
            }
        </div>
    )
}
