export const PlanVisit = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white text-[#1a2a3a]">
      <div className="max-w-4xl mx-auto">
        {/* Welcome */}
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-[#2c4a6b]">
          Plan Your Visit
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed mb-12 italic">
          "You don't have to be perfect to come here. If you are broken, you are
          in the right place."
        </p>

        {/* Mission */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Our Heart</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Lifeline Family Church is a spiritual home where love is
            demonstrated daily. We exist to help you find your way back to God
            and discover your potential.
          </p>
        </div>

        {/* Schedule */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Sunday Services</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Prayer</span>
                <span className="font-medium">7:30am - 8:30am</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>First Service</span>
                <span className="font-medium">9:00am - 10:30am</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Second Service</span>
                <span className="font-medium">11:00am - 1:00pm</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Thursday Prayer</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Midday</span>
                <span className="font-medium">1pm - 2pm</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Evening</span>
                <span className="font-medium">5pm - 6pm</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Worship Night</span>
                <span className="font-medium">7pm - 8:30pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a
            href="https://maps.app.goo.gl/xcemEHedREjGXLq28"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#2c4a6b] text-white rounded-md text-lg hover:bg-[#1a2a3a] transition-colors"
          >
            Get Directions
          </a>
          <div className="text-gray-600">
            <p>Or call us: 0741 431 911</p>
            <p>Email: thelifelinefamilychurch@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
