// import React from 'react';
// import {useState} from 'react'

// const ReadMore = ({ children }) => {
//     const text = children;
//     const [isReadMore, setIsReadMore] = useState(true);
//     const toggleReadMore = () => {
//       setIsReadMore(!isReadMore);
//     };
//     return (
//       <p className="text">
//         {isReadMore ? text.slice(0, 200) : text}
//         <span onClick={toggleReadMore} className="read-or-hide">
//           {isReadMore ? "...read more" : " show less"}
//         </span>
//       </p>
//     );
//   };
    
//   const Content = ({book}) => {
//     return (
//       <div className="container">
//         <h2>
//           <ReadMore>
//            {book.description}
//           </ReadMore>
//         </h2>
//       </div>
//     );
//   };

//   export default Content;