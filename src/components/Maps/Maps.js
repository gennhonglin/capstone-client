import React, { useEffect, useRef, useState } from 'react';
import './Maps.scss';
import maplibregl, { Map } from 'maplibre-gl';

const Maps = ({location}) => {
    const mapContainer = useRef(null);
    const [displayMap, setDisplayMap] = useState(location);


    useEffect(() => {
        setDisplayMap(location);
        const myAPIKey = '5ace1cbbc096410f83720c357cca790f';
        const mapStyle =
            'https://maps.geoapify.com/v1/styles/osm-carto/style.json';


        const map = new Map({
            container: mapContainer.current,
            style: `${mapStyle}?apiKey=${myAPIKey}`,
            center: [displayMap.lng, displayMap.lat],
            zoom: displayMap.zoom,
        });

        const scale = 2;
        map.loadImage(`https://api.geoapify.com/v1/icon/?type=material&color=%23ff0000&iconType=awesome&noWhiteCircle&scaleFactor=2&apiKey=${myAPIKey}`, function (error, image) {
            if (error) throw error;
            map.addImage('rosa-pin', image, { pixelRatio: scale }); // 38x55px, shadow adds 5px (for scale eq 1)
        });
        

        let marker = new maplibregl.Marker({
            anchor: 'bottom',
            offset: [0, 6],
            color: "#ff0000"
          })
          .setLngLat([displayMap.lng, displayMap.lat])
          .addTo(map);

    }, [location]);

    


    return <div className="map-container" ref={mapContainer}></div>;
};

// function Maps() {
//     const mapContainer = useRef(null);
//     return (
//         <div className="map-container" ref={mapContainer}>

//         </div>
//     )
// }

export default Maps;
