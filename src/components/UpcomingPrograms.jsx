import { motion } from "framer-motion";
import EventCountdown from "./EventCountdown";

const events = [
  {
    title: "Prime Summit",
    date: "2026-08-25",
    image: "/events/prime summit.png",
    status: "Registration Open",
    venue: "Main Auditorium(Lecture East Audit)",
  },
  {
    title: "Destiny Conference",
    date: "2026-09-12",
    image: "/events/desting.png",
    status: "Upcoming",
    venue: "Church Arena",
  },
  {
    title: "Fire Camp",
    date: "2026-10-03",
    image: "/events/fire camp.png",
    status: "Coming Soon",
    venue: "Camp of Testimony",
  },

];

export default function UpcomingPrograms() {
  return (
    <section
      id="programs"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">

          <span className="text-yellow-500 uppercase tracking-[4px]">
            Upcoming Events
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Upcoming Programs
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Register for life-transforming conferences,
            worship experiences and special meetings.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {events.map((event) => (
            <motion.div
              key={event.title}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
              overflow-hidden
              rounded-3xl
              bg-slate-900
              border
              border-slate-800
              shadow-xl
              "
            >
              <div className="relative overflow-hidden">

                <span
                  className="
                  absolute
                  top-4
                  left-4
                  z-10
                  bg-yellow-500
                  text-black
                  px-4
                  py-2
                  rounded-full
                  text-xs
                  font-bold
                  "
                >
                  {event.status}
                </span>

                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="h-72 w-full object-cover"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {event.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  {event.venue}
                </p>

                <EventCountdown
                  targetDate={event.date}
                />

                <button
                  className="
                  w-full
                  mt-6
                  bg-yellow-500
                  text-black
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-yellow-400
                  transition
                  "
                >
                  Register Now
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}