import { motion } from "framer-motion";

const stats = [
  {
    number: "2000+",
    label: "Members",
  },
  {
    number: "1000+",
    label: "Foundation Students",
  },
  {
    number: "3000+",
    label: "Souls Won",
  },
  {
    number: "20+",
    label: "Years Ministry",
  },
];

export default function Statistics() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
              bg-slate-950
              border
              border-slate-800
              rounded-3xl
              p-8
              text-center
              "
            >
              <h3
                className="
                text-5xl
                font-bold
                text-yellow-500
                "
              >
                {stat.number}
              </h3>

              <p className="mt-3 text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}