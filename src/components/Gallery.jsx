import LightboxGallery from "./LightboxGallery";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-yellow-500 uppercase tracking-[4px]">
            Moments
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Church Gallery
          </h2>

          <p className="text-slate-400 mt-4">
            Worship • Fellowship • Conferences • Outreach
          </p>

        </div>

        <div className="mt-16">
          <LightboxGallery />
        </div>

      </div>
    </section>
  );
}