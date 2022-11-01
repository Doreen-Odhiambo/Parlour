// import React, { Component } from "react";
// import axios from "axios";
// // import "./users.css";


// class Users extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       usersCollection: [],
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("http://localhost:8080/users")
//       .then((res) => {
//         this.setState({ usersCollection: res.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   render() {
//     return (
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Services</th>
//               <th>Date</th>
//               <th>Feedback</th>

//             </tr>
//           </thead>
//           <tbody>
//             {this.state.usersCollection.map((
//               user, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{user.name}</td>
//                     <td>{user.service}</td>
//                     <td>{user.date}</td>
//                     <td>{user.feedback}</td>
//                   </tr>
//                 )
//               }
//             )}
//           </tbody>
//         </table>
        
//       </div>
//     );
//   }
// }

// export default Users;