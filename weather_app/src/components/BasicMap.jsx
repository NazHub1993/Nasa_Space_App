import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import osm from "./osm-provider";
import "leaflet/dist/leaflet.css";

// Component to move map view when location changes
const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 13.004422, lng: 50.248357 });
  const [marker, setMarker] = useState(null);
  const [query, setQuery] = useState("");
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  // Function to handle search
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const place = data[0];
        const newCenter = {
          lat: parseFloat(place.lat),
          lng: parseFloat(place.lon),
        };
        setCenter(newCenter);
        setMarker(newCenter);
      } else {
        alert("Location not found!");
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>EARTH VIEW</h2>
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <input
          type="text"
          value={query}
          placeholder="Search city or country..."
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "8px",
            width: "300px",
            borderRadius: "6px 0 0 6px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 15px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "0 6px 6px 0",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      <div style={{ height: "500px", width: "100%" }}>
        <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          ref={mapRef}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
          />
          <ChangeView center={center} zoom={ZOOM_LEVEL} />
          {marker && (
            <Marker position={marker}>
              <Popup>
                {query} <br /> {marker.lat}, {marker.lng}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </>
  );
};

export default BasicMap;
