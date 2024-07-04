// import { useState } from "react";
// import MoviesList from "../src/components/MoviesList";
// import Star from "../src/components/Star";

// function Paginador() {
//   const [pagina, setPagina] = useState(1);

//   function functionNext() {
//     setPagina(pagina + 1);
//     console.log(pagina);
//   }

//   function functionPrevious() {
//     setPagina(pagina - 1);
//     console.log(pagina);
//   }

//   return (
//     <>
//       <div className="fakeBody">
//         {/* <div className="star">
//           <Star />
//         </div> */}
//         {/* <div>
//           <MoviesList pagina={pagina} />
//         </div> */}
//       </div>
//       <div className="d-flex justify-content-center aloha ">
//         <nav aria-label="Page navigation example">
//           <ul className="pagination  ">
//             <li className="page-item ">
//               <a
//                 className="page-link aloha "
//                 href="#"
//                 aria-label="Previous"
//                 onClick={() => functionPrevious()}
//               >
//                 <span aria-hidden="true">&laquo;</span>
//               </a>
//             </li>
//             <li class="page-item ">
//               <a
//                 class="page-link aloha"
//                 href="#"
//                 onClick={() => functionPrevious()}
//               >
//                 {pagina - 1}
//               </a>
//             </li>
//             <li class="page-item">
//               <a class="page-link aloha" href="#">
//                 {pagina}
//               </a>
//             </li>
//             <li class="page-item">
//               <a
//                 class="page-link aloha"
//                 href="#"
//                 onClick={() => functionNext()}
//               >
//                 {pagina + 1}
//               </a>
//             </li>
//             <li class="page-item">
//               <a
//                 class="page-link aloha"
//                 href="#"
//                 aria-label="Next"
//                 onClick={() => functionNext()}
//               >
//                 <span aria-hidden="true">&raquo;</span>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default Paginador;
