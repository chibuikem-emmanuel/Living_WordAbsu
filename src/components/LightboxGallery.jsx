import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/gallery/gallery 1.jpg",
  "/gallery/gallery  2.jpg",
  "/gallery/gallery  3.jpg",
  "/gallery/gallery  4.jpg",
  "/gallery/gallery  5.jpg",
  "/gallery/gallery  6.jpg",
  "/gallery/gallery 7.jpg",
  "/gallery/gallery 8.jpg",
  "/gallery/gallery 9.jpg",

];

export default function LightboxGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div
        className="
        columns-1
        md:columns-2
        lg:columns-3
        gap-4
        "
      >

        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt=""
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            whileHover={{
              scale: 1.03,
            }}
            onClick={() =>
              setSelected(image)
            }
            className="
            mb-4
            rounded-3xl
            cursor-pointer
            w-full
            "
          />
        ))}

      </div>

      {selected && (
        <div
          onClick={() =>
            setSelected(null)
          }
          className="
          fixed
          inset-0
          bg-black/95
          flex
          items-center
          justify-center
          z-[999]
          "
        >

          <img
            src={selected}
            alt=""
            className="
            max-w-[90%]
            max-h-[90vh]
            rounded-3xl
            "
          />

        </div>
      )}
    </>
  );
}