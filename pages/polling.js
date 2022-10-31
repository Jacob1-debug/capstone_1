import React from "react"

export default function polling() {
  return (
      <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
          <div className="text-xl"><Link href='/'>Starwars API</Link></div>
          <div className="flex">
              <div className="ml-8"><Link href='/people'>People</Link></div>
              <div className="ml-8"><Link href='/planets'>Planets</Link></div>
              <div className="ml-8"><Link href='/vehicles'>Vehicles</Link></div>
          </div>
      </div>
  )
}

// <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <style>
// body {
//   font-family: Arial;
//   color: white;
// }

// .split {
//   height: 100%;
//   width: 50%;
//   position: fixed;
//   z-index: 1;
//   top: 0;
//   overflow-x: hidden;
//   padding-top: 20px;
// }

// .left {
//   left: 0;
//   background-color: #111;
// }

// .right {
//   right: 0;
//   background-color: red;
// }

// .centered {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
// }

// .centered img {
//   width: 150px;
//   border-radius: 50%;
// }
// </style>
// </head>
// <body>

// <div class="split left">
//   <div class="centered">
//     <img src="img_avatar2.png" alt="Avatar woman">
//     <h2>Jane Flex</h2>
//     <p>Some text.</p>
//   </div>
// </div>

// <div class="split right">
//   <div class="centered">
//     <img src="img_avatar.png" alt="Avatar man">
//     <h2>John Doe</h2>
//     <p>Some text here too.</p>
//   </div>
// </div>
     
// </body>
// </html> 
