import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      bg-black
      border-t
      border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* CHURCH INFO */}

          <div>

            <h3
              className="
              text-3xl
              font-bold
              text-yellow-500
              "
            >
              CHURCH NAME
            </h3>

            <p
              className="
              mt-6
              text-slate-400
              leading-8
              "
            >
              Equipping Believers for the work of the ministry, through
              God's Word, worship and discipleship.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="https://www.facebook.com/profile.php?id=100066267020371&sk=about"
                className="
                bg-slate-900
                p-3
                rounded-full
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/lwcc.absu/"
                className="
                bg-slate-900
                p-3
                rounded-full
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                bg-slate-900
                p-3
                rounded-full
                "
              >
                <FaYoutube />
              </a>

              <a
                href="https://t.me/lwccabsu"
                className="
                bg-slate-900
                p-3
                rounded-full
                "
              >
                <FaTelegramPlane />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h4 className="text-xl font-bold">
              Quick Links
            </h4>

            <div
              className="
              flex
              flex-col
              gap-4
              mt-6
              text-slate-400
              "
            >
              <a href="#home">Home</a>
              <a href="#programs">Programs</a>
              <a href="#giving">Giving</a>
              <a href="#sermons">Sermons</a>
              <a href="#contact">Contact</a>
            </div>

          </div>

          {/* SERVICE TIMES */}

          <div>

            <h4 className="text-xl font-bold">
              Service Times
            </h4>

            <div
              className="
              mt-6
              text-slate-400
              space-y-4
              "
            >
              <p>Sunday Worship - 8:00 AM</p>
              <p>Thursday Bible Study - 6:00 PM</p>
              <p>Monday Prayer Meeting - 6:00 PM</p>
            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h4 className="text-xl font-bold">
              Contact
            </h4>

            <div
              className="
              mt-6
              text-slate-400
              space-y-4
              "
            >
              <p>livingwordabsu@gmail.com</p>
              <p>+234 9018463343</p>
              <p>
                Church Address,
                Abia state, Nigeria
              </p>
            </div>

          </div>

        </div>

        <div
          className="
          border-t
          border-slate-800
          mt-16
          pt-8
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          "
        >
          <p className="text-slate-500">
            © 2026 Church Name.
            All rights reserved.
          </p>

          <p className="text-slate-500">
            Equipping Believers for the work of the ministry.
          </p>

        </div>

      </div>
    </footer>
  );
}