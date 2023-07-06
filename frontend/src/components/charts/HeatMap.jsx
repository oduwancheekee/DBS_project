// import React, { useEffect } from 'react';
// import {
//   Map,
//   GoogleApiWrapper,
//   HeatMap,
//   useJsApiLoader,
// } from '@react-google-maps/api';

// import './styles.css';

// const MapContainer = (props) => {
//   const gradient = [
//     'rgba(0, 255, 255, 0)',
//     'rgba(0, 255, 255, 1)',
//     'rgba(0, 191, 255, 1)',
//     'rgba(0, 127, 255, 1)',
//     'rgba(0, 63, 255, 1)',
//     'rgba(0, 0, 255, 1)',
//     'rgba(0, 0, 223, 1)',
//     'rgba(0, 0, 191, 1)',
//     'rgba(0, 0, 159, 1)',
//     'rgba(0, 0, 127, 1)',
//     'rgba(63, 0, 91, 1)',
//     'rgba(127, 0, 63, 1)',
//     'rgba(191, 0, 31, 1)',
//     'rgba(255, 0, 0, 1)',
//   ];

//   useEffect(() => {
//     handleMapReady();
//   }, []);

//   const handleMapReady = () => {
//     // Code to handle map ready event
//   };

//   return (
//     <div className="map-container">
//       <Map
//         google={props.google}
//         className={'map'}
//         zoom={4}
//         initialCenter={props.center}
//         onReady={handleMapReady}
//       >
//         <HeatMap
//           gradient={gradient}
//           positions={props.data}
//           opacity={1}
//           radius={20}
//         />
//       </Map>
//     </div>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBe4mp-LVlcotjJlniSG7U4XXPS3uLFfsw',
//   libraries: ['visualization'],
// })(MapContainer);

// //   apiKey: 'AIzaSyBe4mp-LVlcotjJlniSG7U4XXPS3uLFfsw'
