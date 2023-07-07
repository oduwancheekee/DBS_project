import React, { useEffect } from 'react';

function HeatMap(props) {
  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBe4mp-LVlcotjJlniSG7U4XXPS3uLFfsw&libraries=visualization&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    const initMap = () => {
      /* Data points defined as an array of LatLng objects */
      const heatmapData = [
        new window.google.maps.LatLng(37.782, -122.447),
        new window.google.maps.LatLng(37.782, -122.445),
        new window.google.maps.LatLng(37.782, -122.443),
        new window.google.maps.LatLng(37.782, -122.441),
        new window.google.maps.LatLng(37.782, -122.439),
        new window.google.maps.LatLng(37.782, -122.437),
        new window.google.maps.LatLng(37.782, -122.435),
        new window.google.maps.LatLng(37.785, -122.447),
        new window.google.maps.LatLng(37.785, -122.445),
        new window.google.maps.LatLng(37.785, -122.443),
        new window.google.maps.LatLng(37.785, -122.441),
        new window.google.maps.LatLng(37.785, -122.439),
        new window.google.maps.LatLng(37.785, -122.437),
        new window.google.maps.LatLng(37.785, -122.435),
      ];

      const sanFrancisco = new window.google.maps.LatLng(
        37.774546,
        -122.433523
      );

      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: sanFrancisco,
        zoom: 13,
        mapTypeId: 'satellite',
      });

      const heatmap = new window.google.maps.visualization.HeatmapLayer({
        data: heatmapData,
      });
      heatmap.setMap(map);

      /* Data points defined as a mixture of WeightedLocation and LatLng objects */
      const heatMapData = [
        {
          location: new window.google.maps.LatLng(37.782, -122.447),
          weight: 0.5,
        },
        new window.google.maps.LatLng(37.782, -122.445),
        {
          location: new window.google.maps.LatLng(37.782, -122.443),
          weight: 2,
        },
        {
          location: new window.google.maps.LatLng(37.782, -122.441),
          weight: 3,
        },
        {
          location: new window.google.maps.LatLng(37.782, -122.439),
          weight: 2,
        },
        new window.google.maps.LatLng(37.782, -122.437),
        {
          location: new window.google.maps.LatLng(37.782, -122.435),
          weight: 0.5,
        },

        {
          location: new window.google.maps.LatLng(37.785, -122.447),
          weight: 3,
        },
        {
          location: new window.google.maps.LatLng(37.785, -122.445),
          weight: 2,
        },
        new window.google.maps.LatLng(37.785, -122.443),
        {
          location: new window.google.maps.LatLng(37.785, -122.441),
          weight: 0.5,
        },
        new window.google.maps.LatLng(37.785, -122.439),
        {
          location: new window.google.maps.LatLng(37.785, -122.437),
          weight: 2,
        },
        {
          location: new window.google.maps.LatLng(37.785, -122.435),
          weight: 3,
        },
      ];

      const heatmapWithWeight =
        new window.google.maps.visualization.HeatmapLayer({
          data: heatMapData,
        });
      heatmapWithWeight.setMap(map);
    };

    if (!window.google) {
      window.initMap = initMap;
      loadMapScript();
    } else {
      initMap();
    }

    return () => {
      delete window.initMap;
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '100%',
        width: '100%',
        borderRadius: '32px 0px 0px 32px',
      }}
    >
      {/* Map will be rendered here */}
    </div>
  );
}

export default HeatMap;

// // //   apiKey: 'AIzaSyBe4mp-LVlcotjJlniSG7U4XXPS3uLFfsw'
