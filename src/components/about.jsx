import React from "react";

import members from "../assets/members.png";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import member5 from "../assets/member5.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bandMembers = [
  {
    id: 1,
    title: "The Pen, Voice and Heart of Bayaan",
    src: member1,
    name: "ASFAR HUSSAIN",
    city: "Chitral",
    intro:
      "Featured on Nescafe Basement, Pepsi Battle of the Bands and Coke Studio.",
  },
  {
    id: 2,
    title: "The Level Head of Bayaan",
    src: member2,
    name: "MARSOOR LASHARI",
    city: "Lahore",
    intro:
      "Mansoor balances his life as an entrepreneur, loving partner and drummer in ways that seem effortless.",
  },
  {
    id: 3,
    title: "The Aspiratory Eyes of Bayaan",
    src: member3,
    name: "MUQUEET SHAHZAAD",
    city: "Lahore",
    intro:
      "While the rest might be thinking about today, Muqueet keeps dreaming about where we will be 5 years from now.",
  },
  {
    id: 4,
    title: "The Rage of Bayaan",
    src: member4,
    name: "SHAHRUKH ASLAM",
    city: "Lahore",
    intro:
      "Only has time for you if you are family, a coworker or doing music with him.",
  },
  {
    id: 5,
    title: "The Humor of Bayaan",
    src: member5,
    name: "HAIDAR ABBAS",
    city: "Lahore",
    intro:
      "Living proof that you don’t need to act serious in order to do serious work.",
  },
];

function About() {
  const [itemClicked, setItemClicked] = useState(null);

  return (
    // <section>
    //   <div className="xl:w-5xl lg:w-4xl md:w-2xl sm:w-xl xs mx-auto w-4xl px-4 sm:px-6 py-10">
    //     <h2 className="text-4xl font-bold mb-10">ABOUT BAYAAN</h2>

    //     <div className="flex items-center overflow-hidden group pb-10">
    //       <div className="block overflow-hidden bg-white rounded-xl shadow-lg group cursor-pointer">
    //         <motion.img
    //           src={members}
    //           alt="Bayaan Members"
    //           className="w-1/2 rounded-3xl shadow-xl object-cover transition-transform duration-500 float-left mr-5 group:hover:scale-105 cursor-pointer"
    //           onClick={() => setItemClicked(members)}
    //           layoutId={members}
    //         />

    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. In
    //           consequuntur expedita fugiat perspiciatis quaerat. Obcaecati
    //           voluptates nam maxime reiciendis illum laborum officia eveniet
    //           quaerat sint illo, quo possimus inventore consequatur.
    //         </p>

    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
    //           quibusdam quam odio ullam iste ad ipsa, enim fuga aliquid. Maxime
    //           quod sint molestias deleniti illo distinctio optio explicabo
    //           praesentium consectetur saepe, corporis molestiae eum facilis,
    //           expedita nostrum tempore ipsam doloremque distinctio saepe
    //           veritatis.
    //         </p>

    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
    //           quibusdam quam odio ullam iste ad ipsa, enim fuga aliquid. Maxime
    //           quod sint molestias deleniti illo distinctio optio explicabo
    //           praesentium. Vitae dolorem earum nesciunt vero illo temporibus
    //           mollitia. Saepe, rerum veniam!
    //         </p>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
    //           quibusdam quam odio ullam iste ad ipsa, enim fuga aliquid. Maxime
    //           quod sint molestias deleniti illo distinctio optio explicabo
    //           praesentium consectetur saepe, corporis molestiae eum facilis,
    //           expedita nostrum tempore ipsam doloremque distinctio saepe
    //           veritatis.
    //         </p>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
    //           quibusdam quam odio ullam iste ad ipsa, enim fuga aliquid. Maxime
    //           quod sint molestias deleniti illo distinctio optio explicabo.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-1 gap-8">
    //       {bandMembers.map((member) => (
    //         <div
    //           key={member.id}
    //           className="bg-white flex items-center rounded-xl shadow-lg overflow-hidden group cursor-pointer"
    //         >
    //           <div className="w-60 h-60 shrink-0 rounded-xl overflow-hidden">
    //             <motion.img
    //               src={member.src}
    //               alt={member.name}
    //               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    //               onClick={() => setItemClicked(member.src)}
    //               layoutId={member.src}
    //             />
    //           </div>

    //           <div className="p-4 space-y-1">
    //             <h2 className="font-semibold text-lg">{member.title}</h2>

    //             <p className="font-bold text-yellow-500">{member.name}</p>

    //             <p className="text-sm">From: {member.city}</p>

    //             <p className="text-gray-600 text-sm w-lg">{member.intro}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   <AnimatePresence>
    //     {itemClicked && (
    //       <motion.div
    //         className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
    //         onClick={() => setItemClicked(null)}
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //       >
    //         <motion.img
    //           src={itemClicked}
    //           className="max-h-[90vh] rounded-xl"
    //           layoutId={itemClicked}
    //           onClick={(e) => e.stopPropagation()}
    //         />
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </section>

    <section>
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
        <h2 className="text-4xl font-bold mb-10">ABOUT BAYAAN</h2>

        <div className="flex flex-col md:block overflow-hidden pb-10">
          <div className="block overflow-hidden bg-white rounded-xl">
            <motion.img
              src={members}
              alt="Bayaan Members"
              className="
            w-full md:w-1/3
            rounded-3xl object-cover
            transition-transform duration-500
            md:float-left md:mr-5 mb-4 md:mb-0
            hover:cursor-pointer
          "
              onClick={() => setItemClicked(members)}
              layoutId={members}
            />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              incidunt animi fugit necessitatibus dignissimos repellendus unde
              sint excepturi, dolorem expedita!
            </p>
            <p>
              Lorem ipsum dolor sit amet consus sit laborum ducimus,
              voluptatibus dolore porro, quisquam nam provident laudantium
              dolornt perferendis blanditiis, provident dolor illum ullam eaque
              recusandae corporis, nesciunt cupiditate praesentium. Maxime esse
              consectetur alias nam perspiciatis minima voluptatem fugiat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              incidunt animi fugit necessitatibus dignissimos repellendus unde
              sint excepturi, dolorem expedita!
            </p>
            <p>
              Lorem it laborum ducimus, voluptatibus dolore porro, quisquam nam
              provident laudantium dolorem maiores? Repudiandae vitae incidunt
              perferendis blanditiis, provident dolor illum ullam eaque
              recusandae corporis, nesciunt cupiditate praesentium. Maxime esse
              consectetur alias nam perspiciatis minima voluptatem fugiat.
              provident dolor illum ullam eaque recusandae corporis, nesciunt
              cupiditate praesentium. Maxime esse consectetur alias nam
              perspiciatis minima voluptatem.
            </p>
            <p>
              Lorem t animi fugit provident dolor illum ullam eaque recusandae
              corporis, nesciunt cupiditate praesentium. Maxime esse consectetur
              alias nam perspiciatis minima voluptatem necessitatibus
              dignissimos repellendus unde sint excepturi, dolorem expedita!
            </p>
          </div>
        </div>

        <div className="members-grid grid grid-cols-1 gap-8">
          {bandMembers.map((member) => (
            <div
              className="
    bg-white 
    flex flex-row 
    sm:flex-col md:flex-row
    items-center 
    rounded-xl shadow-lg 
    overflow-hidden 
    group cursor-pointer
  "
            >
              <div className="w-48 h-48 shrink-0 overflow-hidden rounded-xl">
                <motion.img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onClick={() => setItemClicked(member.src)}
                  layoutId={member.src}
                />
              </div>

              {/* TEXT */}
              <div className="p-4 flex-1 min-w-0">
                <h2 className="font-semibold text-lg">{member.title}</h2>
                <p className="font-bold text-yellow-500">{member.name}</p>
                <p className="text-sm">From: {member.city}</p>
                <p className="text-gray-600 text-sm wrap-break-word">
                  {member.intro}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {itemClicked && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setItemClicked(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setItemClicked(null)}
                className="absolute top-2 right-2 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-200"
              >
                ×
              </button>

              <motion.img
                src={itemClicked}
                className="max-w-full max-h-[90vh] rounded-xl object-contain"
                layoutId={itemClicked}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;
