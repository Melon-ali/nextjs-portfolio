// import { TProjectExtended } from "@/src/app/(dashboardLayout)/dashboard/projects/page";
// import ArrowUpRightIcon from "@heroicons/react/16/solid/ArrowUpRightIcon";
// import { motion } from "framer-motion";
// import Image from "next/image";


// const ProjectCard = ({project}:{
//   project: TProjectExtended;
// }) => {
//     return (
//         <div>
//             {/* Image Section */}
//             <motion.div
//                 className="h-[250px] relative"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover"
//                   priority
//                 />
//               </motion.div>

//               {/* Content Section */}
//               <motion.div
//                 className="p-6 h-[25px] bg-surface"
//                 transition={{ duration: 0.3 }}
//               >
//                 <div
//                   className="flex justify-between items-start
//                         mb-4 group/title"
//                 >
//                   <h3 className="text-2xl font-bold text-content">
//                     {project.title}
//                   </h3>
//                   <ArrowUpRightIcon
//                     className="h-6 w-6 text-content/50
//                                     group-hover/title:text-primary transition-colors duration-300"
//                   />
//                 </div>
//                 <p className="text-content/80 mb-4">{project.description}</p>

//                 {/* <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech, j) => (
//                     <span
//                       key={j}
//                       className="px-3 py-1 rounded-full bg-white/5 text-content/80
//                                         text-sm border border-white/5
//                                         hover:bg-surface transition-colors flex items-center
//                                         gap-1.5 group/tech"
//                     >
//                       <tech.icon
//                         style={{ color: tech.color }}
//                         className="w-4 h-4 transition-colors"
//                       />
//                       <span className="group-hover/tech:text-content transition-colors">
//                         {tech.name}
//                       </span>
//                     </span>
//                   ))}
//                 </div> */}
//               </motion.div>
//         </div>
//     );
// };

// export default ProjectCard;