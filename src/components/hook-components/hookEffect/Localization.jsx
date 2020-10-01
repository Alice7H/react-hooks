import React, {useState, useEffect} from 'react'

export default () => {

    const [location, setLocation] = useState({});

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(handlePositionReceived)
       
        // componentWillUnmount - o cleanWatch limpa quando o componente deixa de existir
        return () => navigator.geolocation.cleanWatch(watchId)
    }, []);

    function handlePositionReceived({coords}){
        const {latitude, longitude} = coords;
        setLocation({ latitude, longitude});
    }

    return(
        <>
            <p> É preciso permitir o <strong> localizador</strong> da página para este exercício</p>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
        </>
    )
}