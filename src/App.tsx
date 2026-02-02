// const tracks = null;

// import React from "react";
//
//
// export function App() {
//   const [selectedTrackId, setSelectedTrackId] = React.useState(null);
//   const [selectedTrack, setSelectedTrack] = React.useState(null);
//
//   const [tracks, setTracks] = React.useState([]);
//
//
//
//   React.useEffect(() => {
//     fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
//       headers: {
//         "api-key": "da682b4a-9b5e-4604-be57-45212959210d",
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         setTracks(json.data);
//       });
//   }, []);
//   React.useEffect(() => {
//     if(!selectedTrackId) {
//       return
//     }
//     fetch(
//       "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + selectedTrackId ,
//       {
//         headers: {
//           "api-key": "da682b4a-9b5e-4604-be57-45212959210d",
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         setSelectedTrack(json.data);
//       });
//   }, [selectedTrackId]);
//
//   if (!tracks) {
//     return (
//       <>
//         <h1>Musicfun Player</h1>
//         <span>loading...</span>
//       </>
//     );
//   }
//
//   if (tracks.length === 0) {
//     return (
//       <>
//         <h1>Musicfun Player</h1>
//         <span>no tracks</span>
//       </>
//     );
//   }
//
//   return (
//     <div>
//       <h1>Musicfun Player</h1>
//       <button
//         onClick={() => {
//           setSelectedTrackId(null);
//           setSelectedTrack(null);
//         }}
//       >
//         reset selection
//       </button>
//       <div style={{ display: "flex", gap: "20px" }}>
//         <ul style={{ display: "grid", gap: "20px" }}>
//           {tracks.map((track) => {
//             return (
//               <li
//                 key={track.id}
//                 style={{
//                   border:
//                     track.id === selectedTrackId ? "1px solid red" : "none",
//                 }}
//               >
//                 <div
//                   style={{ cursor: "pointer", marginBottom: "10px" }}
//                   onClick={() => {
//                     setSelectedTrackId(track.id);
//                   }}
//                 >
//                   {track.attributes.title}
//                 </div>{" "}
//                 <audio
//                   controls
//                   src={track.attributes.attachments[0].url}
//                 ></audio>
//               </li>
//             );
//           })}
//         </ul>
//         <div>
//           <h3>Details</h3>
//           {!selectedTrack && !selectedTrackId && "Track is not selected"}
//           {!selectedTrack && selectedTrackId && "loading..."}
//           {selectedTrack &&
//             selectedTrackId &&
//             selectedTrack.id !== selectedTrackId &&
//             "loading..."}
//
//           {selectedTrack && (
//             <div>
//               <h3>{selectedTrack.attributes.title}</h3>
//               <h4>Lyrics</h4>
//               <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
