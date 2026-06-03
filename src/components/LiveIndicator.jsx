export default function LiveIndicator() {
  return (
    <div
      className="
      inline-flex
      items-center
      gap-3
      bg-red-500/20
      border
      border-red-500
      px-5
      py-2
      rounded-full
      "
    >
      <span
        className="
        w-3
        h-3
        bg-red-500
        rounded-full
        animate-pulse
        "
      />

      <span className="font-semibold">
        LIVE NOW
      </span>
    </div>
  );
}