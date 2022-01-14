import React from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect, useState } from "react";
import "./campMap.css";
import { getStorage } from "../../utils/localStorage";

mapboxgl.accessToken =
  "pk.eyJ1IjoidG1lY2s1NDEiLCJhIjoiY2t5ZG1hbng5MDJ1NjJudGVoaTR0b3FxZyJ9.W7t2JGrHCrQWEiWIIi64sA";

export default function CampMap() {
  const points = getStorage('ALL');
  console.log(points[0])
  const centerLng = points[0].facilityLongitude;
  const centerLat = points[0].facilityLatitude;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(centerLng);
  const [lat, setLat] = useState(centerLat);
  const [zoom, setZoom] = useState(5);

  

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    points.map(point => {
      const popup = new mapboxgl.Popup({ offset: 25}).setText(point.facilityName)
      return new mapboxgl.Marker()
        .setLngLat([point.facilityLongitude, point.facilityLatitude])
        .setPopup(popup)
        .addTo(map.current)
  })
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="map-div">
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
