const mongoose = require('mongoose')
const Schema = mongoose.Schema

// movie blueprint
const movieSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseYear: Number
})

module.exports = mongoose.model('Movie', movieSchema)



// movie.js

// import React, { useState } from 'react';
// import MovieForm from "./MovieForm.js";

// export default function Movie(props) {
//   const { title, genre, _id } = props;
//   const [editToggle, setEditToggle] = useState(false);
//   return (
//     <div className="movie">
//       {!editToggle ? (
//         <>
//           <h1>Title: {title}</h1>
//           <p>Genre: {genre}</p>
//           <button className="delete-btn" onClick={() => props.deleteMovie(_id)}>
//             Delete
//           </button>
//           <button
//             className="edit-btn"
//             onClick={() => setEditToggle(prevToggle => !prevToggle)}
//           >
//             Edit
//           </button>
//         </>
//       ) : (
//         <>
//           <MovieForm
//             title={title}
//             genre={genre}
//             _id={_id}
//             btnText="Submit Edit"
//             submit={props.editMovie}
//           />
//           <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
//             Close
//           </button>
//         </>
//       )}
//     </div>
//   );
// }







