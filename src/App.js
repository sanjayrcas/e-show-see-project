// import React from 'react'
// import Router from './components/Router'

// export default function App() {
//   return (
//     <div>
//         <Router/>
//     </div>
//   )
// }
import React from "react";

function App() {
  console.log("API URL:", process.env.REACT_APP_API_URL);
  console.log("Secret Key:", process.env.REACT_APP_SECRET_KEY);

  return (
    <div>
      <h1>Environment Variables in React</h1>
      <p>API URL: {process.env.REACT_APP_API_URL}</p>
    </div>
  );
}

export default App;
