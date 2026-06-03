import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://chat.whatsapp.com/HMqZ2A73GSX9YPIGMKxMZI?mode=gi_t"
      target="_blank"
      rel="noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      "
    >
      <div className="relative">

        <span
          className="
          absolute
          inset-0
          bg-green-500
          rounded-full
          animate-ping
          "
        />

        <div
          className="
          relative
          bg-green-500
          p-4
          rounded-full
          text-white
          text-3xl
          shadow-xl
          "
        >
          <FaWhatsapp />
        </div>

      </div>
    </a>
  );
}