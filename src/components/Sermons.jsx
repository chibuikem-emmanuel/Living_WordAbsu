const sermons = [
  {
    title: "Prayer by precept and example",
    image: "/gallery/Prayer.png",
  },
  {
    title: "Love walk by precept and example",
    image: "/gallery/Love.png",
  },
  {
    title: "Honor by precept and example",
    image: "/gallery/Honor.png",
  },
];

export default function Sermons() {
  return (
    <section id="sermons" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Latest Sermons
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {sermons.map((sermon) => (
            <div
              key={sermon.title}
              className="bg-slate-800 rounded-3xl overflow-hidden"
            >
              <img
                src={sermon.image}
                alt=""
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {sermon.title}
                </h3>

                <button className="mt-6 bg-yellow-500 text-black px-5 py-3 rounded-full" href="https://t.me/lwccabsu" target="_blank" rel="noreferrer">
                  <a className="text-black font-bold" href="https://t.me/lwccabsu" target="_blank" rel="noreferrer">
                    Listen Now
                  </a>
                </button>
              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <a
            href="https://t.me/lwccabsu"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 px-8 py-4 rounded-full"
          >
            Join Telegram Channel
          </a>
        </div>

      </div>
    </section>
  );
}