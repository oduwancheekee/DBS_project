import React, { useEffect } from 'react';

function HeatMap(props) {
  console.log(props.data);
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
      //TODO load cities
      //TODO call google API to take location of each city
      const apiKey = 'YOUR_API_KEY';
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=Berlin&key=AIzaSyBe4mp-LVlcotjJlniSG7U4XXPS3uLFfsw`;

      // Replace 'YOUR_API_KEY' with your actual API key.
      // Replace 'YOUR_ADDRESS' with the address or location you want to geocode.
      const heatmapData = [
        new window.google.maps.LatLng(52.516411678398978, 13.377682639467237),
      ];

      fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
          const location = data.results[0].location;
          const latitude = location.lat;
          const longitude = location.lng;
          console.log(`Latitude: ${latitude}`);
          console.log(`Longitude: ${longitude}`);
          heatMapData.push(
            new window.google.maps.LatLng(
              52.516411678398954,
              13.377682639467237
            )
          );
        })
        .catch((error) => {
          console.log('Error:', error);
        });

      const Berlin = new window.google.maps.LatLng(
        52.516411678398924,
        13.377704097139505
      );

      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: Berlin,
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
          location: new window.google.maps.LatLng(52.4883, 13.4689),
          weight: 0.5,
        },
        new window.google.maps.LatLng(52.4989, 13.4339),
        {
          location: new window.google.maps.LatLng(52.5219, 13.4132),
          weight: 2,
        },
        {
          location: new window.google.maps.LatLng(52.5153, 13.4542),
          weight: 3,
        },
        {
          location: new window.google.maps.LatLng(52.5497, 13.3819),
          weight: 2,
        },
        // new window.google.maps.LatLng(52.5481, 13.3507),
        // {
        //   location: new window.google.maps.LatLng(37.782, -122.435),
        //   weight: 0.5,
        // },

        // {
        //   location: new window.google.maps.LatLng(37.785, -122.447),
        //   weight: 3,
        // },
        // {
        //   location: new window.google.maps.LatLng(37.785, -122.445),
        //   weight: 2,
        // },
        // new window.google.maps.LatLng(37.785, -122.443),
        // {
        //   location: new window.google.maps.LatLng(37.785, -122.441),
        //   weight: 0.5,
        // },
        // new window.google.maps.LatLng(37.785, -122.439),
        // {
        //   location: new window.google.maps.LatLng(37.785, -122.437),
        //   weight: 2,
        // },
        // {
        //   location: new window.google.maps.LatLng(37.785, -122.435),
        //   weight: 3,
        // },
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
