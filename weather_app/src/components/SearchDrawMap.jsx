//SearchDrawMap.jsx STARTs
import React, { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  useMap,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import osm from "./osm-provider";

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

// Component to update map view when search result changes
const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const SearchDrawMap = () => {
  const [center, setCenter] = useState({ lat: 13.004422, lng: 50.248357 });
  const [marker, setMarker] = useState(null);
  const [query, setQuery] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const ZOOM_LEVEL = 6;
  const mapRef = useRef();

  // 🔍 Handle search
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

  // ✏️ Drawing event handlers
  const onCreated = (e) => {
    console.log("Shape created:", e.layerType, e.layer.toGeoJSON());
  };

  const onEdited = (e) => {
    e.layers.eachLayer((layer) => {
      console.log("Shape edited:", layer.toGeoJSON());
    });
  };

  const onDeleted = (e) => {
    e.layers.eachLayer((layer) => {
      console.log("Shape deleted:", layer.toGeoJSON());
    });
  };

  return (
    <div id="main" className=" flex flex-col h-screen w-full justify-center items-center">
     <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "15px",
          flexWrap: "wrap",
         
        }}
      >
        {/* Search Input */}
        <form
          onSubmit={handleSearch}
          style={{ display: "flex" }}
        >
          <input
            type="text"
            value={query}
            placeholder="Search city or country..."
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "8px",
              flex: 1,
              borderRadius: "6px 0 0 6px",
              border: "1px solid #ccc",
              outline: "none",
              color:"white",
              font:"bold"
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

        {/* 📅 Date Range Picker */}
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable={true}
          dateFormat="dd/MM/yyyy"
          placeholder="Select date range"
          className="date-picker-input text-white font-bold w-full"
          style={{
            // padding: "8px",
            // border: "1px solid #ccc",
            // borderRadius: "6px",
            // color:"white",
            // font:"bold",
            //  width:"250px",
             padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    color: "black",
    fontWeight: "bold",
    width: "250px",   // ✅ fixed width
          }}
        />
      </div>

      {/* Map */}
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

          {/* Marker after search */}
          {marker && (
            <Marker position={marker}>
              <Popup>
                {query} <br /> {marker.lat}, {marker.lng}
                <br />
                {startDate && endDate
                  ? `Selected Dates: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                  : "No date selected"}
              </Popup>
            </Marker>
          )}

          {/* Drawing tools */}
          <FeatureGroup>
            <EditControl
              position="topright"
              onCreated={onCreated}
              onEdited={onEdited}
              onDeleted={onDeleted}
              draw={{
                rectangle: true,
                circle: true,
                circlemarker: false,
                polygon: true,
                polyline: true,
                marker: true,
              }}
            />
          </FeatureGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default SearchDrawMap;

//end searchdrawmap.jsx
