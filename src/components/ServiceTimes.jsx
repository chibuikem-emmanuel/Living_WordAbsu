export default function ServiceTimes() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Service Times
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="glass p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold">
              Sunday Service
            </h3>
            <p className="mt-4">8:00 AM</p>
          </div>

          <div className="glass p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold">
              Bible Study
            </h3>
            <p className="mt-4">Thursday 6 PM</p>
          </div>

          <div className="glass p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold">
              Prayer Meeting
            </h3>
            <p className="mt-4">Monday 6 PM</p>
          </div>

        </div>

      </div>
    </section>
  );
}