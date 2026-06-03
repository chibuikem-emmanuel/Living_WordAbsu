import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      >
        <source
          src="/hero/hero1.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        bg-yellow-500/20
        blur-[180px]
        rounded-full
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="
        relative
        z-10
        text-center
        max-w-5xl
        px-6
        "
      >
        <span className="text-yellow-500 uppercase tracking-[4px]">
          Welcome Home
        </span>

        <h1
          className="
          text-5xl
          md:text-7xl
          font-bold
          mt-6
          "
        >
          Equipping Believers 
          For The Work of Ministry
        </h1>

        <p
          className="
          text-slate-300
          mt-6
          max-w-2xl
          mx-auto
          "
        >
          Worship. Fellowship.
          Discipleship. Transformation.
        </p>

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-4
          mt-10
          "
        >
          <a
            href="#live"
            className="
            bg-yellow-500
            text-black
            px-8
            py-4
            rounded-full
            "
          >
            Join Live Service
          </a>

          <a
            href="#programs"
            className="
            border
            border-white
            px-8
            py-4
            rounded-full
            "
          >
            Upcoming Programs
          </a>
        </div>

      </motion.div>
    </section>
  );
}