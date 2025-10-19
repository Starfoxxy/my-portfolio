// import React from "react";
// import { motion } from "framer-motion";

// export default function ProjectCard({ title, description, image, link }) {
//   return (
//     <motion.div
//       className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:cursor-pointer hover:scale-105 transition-transform"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       transition={{ type: "spring", stiffness: 300 }}
//     >
//       {image && (
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-48 object-cover rounded-xl mb-4"
//         />
//       )}
//       <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
//       <p className="text-gray-300 mb-4 text-center">{description}</p>
//       {link && (
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-medium transition"
//         >
//           View Project
//         </a>
//       )}
//     </motion.div>
//   );
// }
