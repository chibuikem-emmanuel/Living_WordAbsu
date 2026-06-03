import { motion } from "framer-motion";
import { FaHandshake, FaChurch } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";

const projects = [
  {
    title: "LIWO MAX PROJECT",
    image: "/gallery/project 1.png",
    icon: <FaHandshake size={28} />,
    description:
      "Support our evangelism and outreach vision through the LIWO MAX initiative.",
  },
  {
    title: "Audio Equipment Upgrade",
    image: "/gallery/project 1.png",
    icon: <MdGraphicEq size={28} />,
    description:
      "Help us acquire professional sound equipment for a richer worship experience.",
  },
  {
    title: "Church Expansion Project",
    image: "/gallery/project 1.png",
    icon: <FaChurch size={28} />,
    description:
      "Partner with us in expanding our worship facilities and ministry reach.",
  },
];

export default function Giving() {
  const copyAccount = () => {
    navigator.clipboard.writeText("0123456789");
    alert("Account number copied");
  };

  return (
    <section
      id="giving"
      className="py-28 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="text-yellow-500 uppercase tracking-[4px]">
            Giving & Partnership
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Tithes, Offerings & Projects
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            Your giving helps us advance God's kingdom,
            impact lives and expand ministry initiatives.
          </p>
        </div>

        {/* ACCOUNT CARD */}

        <div
          className="
          mt-16
          rounded-3xl
          bg-gradient-to-r
          from-yellow-500
          to-yellow-300
          p-10
          text-black
          "
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <h3 className="text-3xl font-bold">
                Church Account Details
              </h3>

              <div className="mt-6 space-y-2 text-lg">
                <p>
                  <strong>Bank:</strong> Zenith Bank
                </p>

                <p>
                  <strong>Account Name:</strong>{" "}
                  LIVING WORD ABSU
                </p>

                <p>
                  <strong>Account Number:</strong>{" "}
                  1015867826
                </p>
              </div>

              <button
                onClick={copyAccount}
                className="
                mt-6
                bg-black
                text-white
                px-8
                py-4
                rounded-full
                "
              >
                Copy Account Number
              </button>
            </div>

            <div>
              <h4 className="text-2xl font-bold">
                Ways To Give
              </h4>

              <ul className="mt-4 space-y-3">
                <li>✓ Tithes</li>
                <li>✓ Offerings</li>
                <li>✓ Partnership</li>
                <li>✓ Building Project</li>
                <li>✓ Mission Support</li>
              </ul>
            </div>

          </div>
        </div>

        {/* PROJECTS */}

        <div className="mt-24">

          <h3 className="text-3xl font-bold text-center">
            Current Ministry Projects
          </h3>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">

            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{
                  y: -8,
                }}
                className="
                bg-slate-950
                rounded-3xl
                overflow-hidden
                border
                border-slate-800
                "
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover"
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  />
                </div>

                <div className="p-6">

                  <div className="text-yellow-500 mb-4">
                    {project.icon}
                  </div>

                  <h4 className="text-2xl font-bold">
                    {project.title}
                  </h4>

                  <p className="text-slate-400 mt-4">
                    {project.description}
                  </p>

                  <button
                    className="
                    mt-6
                    bg-yellow-500
                    text-black
                    px-6
                    py-3
                    rounded-full
                    font-semibold
                    "
                    href="#giving"
                  >
                    Partner With Us
                  </button>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}