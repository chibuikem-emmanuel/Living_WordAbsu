import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "John Mbabie",
    role: "Church memeber",
    image: "/gallery/living-logo3.jpg",
    testimony:
      "My life has been transformed through the teachings and fellowship of this ministry.",
  },
  {
    name: "Jane Onyeforo",
    role: "Foundation School Graduate",
    image: "/gallery/living-logo3.jpg",
    testimony:
      "Foundation School gave me a deeper understanding of God's Word and purpose.",
  },
  {
    name: "Mercy Uduma",
    role: "Volunteer",
    image: "/gallery/living-logo3.jpg",
    testimony:
      "Serving in this ministry has strengthened my faith and leadership journey.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <span className="text-yellow-500 uppercase tracking-[4px]">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Changed Lives
          </h2>

        </div>

        <div className="flex justify-center gap-4 mt-12">

          <button
            className="
            testimonial-prev
            bg-yellow-500
            text-black
            p-4
            rounded-full
            "
          >
            <FaArrowLeft />
          </button>

          <button
            className="
            testimonial-next
            bg-yellow-500
            text-black
            p-4
            rounded-full
            "
          >
            <FaArrowRight />
          </button>

        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          autoplay={{
            delay: 5000,
          }}
          loop
          className="mt-10"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>

              <div
                className="
                glass
                rounded-3xl
                p-10
                text-center
                max-w-4xl
                mx-auto
                "
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-24
                  h-24
                  rounded-full
                  object-cover
                  mx-auto
                  border-4
                  border-yellow-500
                  "
                />

                <p
                  className="
                  text-lg
                  text-slate-300
                  mt-8
                  leading-8
                  "
                >
                  "{item.testimony}"
                </p>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-yellow-500">
                  {item.role}
                </p>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}