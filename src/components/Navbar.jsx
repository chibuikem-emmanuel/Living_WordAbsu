import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Giving", id: "giving" },
    { title: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      fixed
      top-0
      left-0
      right-0
      z-50
      transition-all
      duration-300
      ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}

          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <img
              src="/gallery/living-logo3.jpg"
              alt="Church Logo"
              className="w-12 h-12 object-contain"
            />

            <div>
              <h1 className="font-bold text-xl text-yellow-500">
                LIVING WORD ABSU
              </h1>

              <p className="text-xs text-slate-400">
                Equipping Believers For The Work of Ministry
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`
                relative
                text-sm
                font-medium
                transition-all
                duration-300
                hover:text-yellow-500
                ${
                  activeSection === link.id
                    ? "text-yellow-500"
                    : "text-white"
                }
                `}
              >
                {link.title}

                {activeSection === link.id && (
                  <span
                    className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-full
                    bg-yellow-500
                    rounded-full
                    "
                  />
                )}
              </a>
            ))}

            {/* PROGRAMS DROPDOWN */}

            <div
              className="relative"
              onMouseEnter={() =>
                setShowPrograms(true)
              }
              onMouseLeave={() =>
                setShowPrograms(false)
              }
            >
              <button
                className="
                flex
                items-center
                gap-2
                text-white
                hover:text-yellow-500
                transition
                "
              >
                Programs
                <FaChevronDown className="text-xs" />
              </button>

              <div
                className={`
                absolute
                top-full
                left-0
                mt-4
                w-64
                rounded-2xl
                bg-slate-900
                border
                border-slate-800
                shadow-2xl
                overflow-hidden
                transition-all
                duration-300
                ${
                  showPrograms
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }
                `}
              >
                <a
                  href="#programs"
                  className="block px-5 py-4 hover:bg-slate-800"
                >
                  Upcoming Programs
                </a>

                <a
                  href="#foundation"
                  className="block px-5 py-4 hover:bg-slate-800"
                >
                  Foundation School
                </a>

                <a
                  href="#gallery"
                  className="block px-5 py-4 hover:bg-slate-800"
                >
                  Gallery
                </a>

                <a
                  href="#sermons"
                  className="block px-5 py-4 hover:bg-slate-800"
                >
                  Sermons
                </a>
              </div>
            </div>

          </nav>

          {/* CTA BUTTONS */}

          <div className="hidden lg:flex items-center gap-3">

            <a
              href="#live"
              className="
              bg-red-600
              hover:bg-red-500
              px-5
              py-3
              rounded-full
              text-sm
              font-semibold
              transition
              "
            >
              Watch Live
            </a>

            <a
              href="https://lwcc-absu-apf-school.onrender.com/"
              className="
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              px-5
              py-3
              rounded-full
              text-sm
              font-semibold
              transition
              "
            >
              Become a member
            </a>

          </div>

          {/* MOBILE TOGGLE */}

          <button
            className="lg:hidden text-2xl"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`
        lg:hidden
        overflow-hidden
        transition-all
        duration-500
        ${
          menuOpen
            ? "max-h-[700px]"
            : "max-h-0"
        }
        `}
      >
        <div
          className="
          bg-slate-950
          border-t
          border-slate-800
          px-6
          py-6
          "
        >
          <div className="flex flex-col gap-5">

            <a href="#home">Home</a>
            <a href="#about">About</a>

            {/* PROGRAMS */}

            <div className="space-y-3">

              <p className="font-semibold text-yellow-500">
                Programs
              </p>

              <a
                href="#programs"
                className="block pl-4 text-slate-300"
              >
                Upcoming Programs
              </a>

              <a
                href="https://lwcc-absu-apf-school.onrender.com/"
                className="block pl-4 text-slate-300"
              >
                Foundation School
              </a>

              <a
                href="#gallery"
                className="block pl-4 text-slate-300"
              >
                Gallery
              </a>

              <a
                href="#sermons"
                className="block pl-4 text-slate-300"
              >
                Sermons
              </a>

            </div>

            <a href="#giving">Giving</a>

            <a href="#contact">Contact</a>

            <a
              href="#live"
              className="
              bg-red-600
              text-center
              py-3
              rounded-full
              font-semibold
              "
            >
              Watch Live
            </a>

            <a
              href="#programs"
              className="
              bg-yellow-500
              text-black
              text-center
              py-3
              rounded-full
              font-semibold
              "
            >
              Register For Event
            </a>

          </div>
        </div>
      </div>
    </header>
  );
}