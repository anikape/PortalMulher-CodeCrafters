// MapWithDirections.js
import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, DirectionsRenderer } from "@react-google-maps/api";
import style from "./mapWithDirections.module.css"

const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "300px", // Ajuste conforme o tamanho desejado para o mapa
  };  

const center = {
  lat: -3.745,
  lng: -38.523,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const MapWithDirections = ({ googleMapsApiKey }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  const [userLocation, setUserLocation] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [destination, setDestination] = useState(null);
  const [travelMode, setTravelMode] = useState("DRIVING");
  const [searchTerm, setSearchTerm] = useState("Delegacia da Mulher");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => null
      );
    }
  }, []);

  const searchNearby = () => {
    if (!userLocation) return;

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    service.nearbySearch(
      {
        location: userLocation,
        radius: 5000,
        keyword: searchTerm,
      },
      (results, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          results.length > 0
        ) {
          const closestPlace = results[0];
          setDestination(closestPlace.geometry.location);
          calculateRoute(closestPlace.geometry.location);
        } else {
          console.error("Nenhum local encontrado");
        }
      }
    );
  };

  const calculateRoute = async (destination) => {
    if (!destination || !userLocation) return;

    const directionsService = new window.google.maps.DirectionsService();
    const result = await directionsService.route({
      origin: userLocation,
      destination: destination,
      travelMode: travelMode,
    });

    setDirectionsResponse(result);
  };

  const openGoogleMapsDirections = () => {
    if (!userLocation || !destination) return;

    const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${destination.lat()},${destination.lng()}&travelmode=${travelMode.toLowerCase()}`;
    window.open(url, "_blank");
  };

  if (loadError) return "Erro ao carregar o mapa";
  if (!isLoaded) return "Carregando mapa...";

  return (
    <div className={style.inputs}  style={{ height: "100vh" }}>
      <div>
        <select className={style.selects} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
          <option value="Delegacia da Mulher">Selecione o serviço</option>
          <option value="Delegacia da Mulher">Delegacia da Mulher</option>
          <option value="Hospital mulher publico">Hospital da mulher</option>
          <option value="Apoio psicologico mulher publico">Apoio psicologico</option>
        </select>

        <select className={style.selects} onChange={(e) => setTravelMode(e.target.value)}>
          <option value="DRIVING">Selecione o meio de transporte</option>
          <option value="DRIVING">Carro</option>
          <option value="WALKING">A pé</option>
          <option value="BICYCLING">Bicicleta</option>
          <option value="TRANSIT">Transporte Público</option>
        </select>

        <button className={style.button} onClick={searchNearby}>Buscar e Calcular Rota</button>
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={userLocation || center}
        options={options}
      >
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>

      {destination && (
        <button onClick={openGoogleMapsDirections}>Abrir no Google Maps</button>
      )}
    </div>
  );
};

export default MapWithDirections;
