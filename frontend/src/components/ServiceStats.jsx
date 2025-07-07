
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 28.704060, 
  lng: 77.102493,
};


const serviceLocations = [
  {
    id: 1,
    name: "Service A",
    position: { lat: 28.7045, lng: 77.103 },
    status: "Active"
  },
  {
    id: 2,
    name: "Service B",
    position: { lat: 28.703, lng: 77.101 },
    status: "Inactive"
  }
];

const ServiceStats = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-50 p-5 rounded-2xl shadow-md w-full h-full">
    <LoadScript googleMapsApiKey={import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
          {serviceLocations.map((service) => (
            <Marker
              key={service.id}
              position={service.position}
              onClick={() => setSelected(service)}
              icon={{
                url:
                  service.status === "Active"
                    ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                    : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
              }}
            />
          ))}

          {selected && (
            <InfoWindow
              position={selected.position}
              onCloseClick={() => setSelected(null)}
            >
              <div>
                <h3 className="font-bold">{selected.name}</h3>
                <p>Status: {selected.status}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default ServiceStats;
