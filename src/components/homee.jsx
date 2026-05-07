import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import members from "../assets/members.png";
import safar from "../assets/safar.png";
import member1 from "../assets/member1.png";
import suno from "../assets/playlist/suno_cover.png";
import member2 from "../assets/member2.png";
import char_saal from "../assets/char_saal.png";
import member3 from "../assets/member3.png";
import sapna from "../assets/sapna.png";
import member4 from "../assets/member4.png";
import din_dhalay from "../assets/din_dhalay.png";
import member5 from "../assets/member5.png";
import maand from "../assets/maand.png";

const images = [
  members,
  suno,
  member1,
  safar,
  member2,
  char_saal,
  member3,
  sapna,
  member4,
  din_dhalay,
  member5,
  maand,
];

export function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <p className="text-center text-lg sm:text-xl text-gray-600 mb-8">
          Welcome to our gallery!
        </p>

        {/* GRID */}
        <div
          className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          xl:grid-cols-6 
          gap-3
        "
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden rounded-xl cursor-pointer"
              layoutId={`container-${index}`}
              onClick={() => setSelected(src)}
            >
              <motion.img
                src={src}
                alt="gallery"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                layoutId={src}
              />
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={selected}
                alt="preview"
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
                layoutId={selected}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Home;
