import React from 'react'
import Link from 'next/link';

export default function Nav() {
    return (
        <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
            <div className="text-xl"><Link href='/'>Blockkvoting</Link></div>
            <div className="flex">
                <div className="ml-8"><Link href='/people'>People</Link></div>
                <div className="ml-8"><Link href='/About'>About</Link></div>
                <div className="ml-8"><Link href='/Opinion Polls'>Opinion Polls</Link></div>
            </div>
        </div>
    )
}
// import React, { useState } from "react";
 
// function App(props) {
//   const [count, setRandomCount] =
//     useState(function generateRandomInteger() {
//     return Math.floor(Math.random() * 100);
//   });
//   function clickHandler(e) {
//     setRandomCount(Math.floor(Math.random() * 100));
//   }
//   return (
//     <div style={{margin: 'auto', width: 100, display: 'block'}}>
//       <h1> {count} </h1>
       
       
// <p>
//         <button onClick={clickHandler}> Click </button>
//       </p>
 
 
//     </div>
//   );
// }
 
// export default App
// St