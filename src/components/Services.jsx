import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-8 lg:pt-16">
      <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md lg:p-12">
        <h1 className="text-3xl font-bold mb-4 grid justify-items-center">Our Services</h1>
        <p className="mb-6">
          At FavouredChild Clinic, we are dedicated to providing the highest quality healthcare for children. Our team of experienced and caring professionals offers a range of specialized services to ensure your child's well-being. Explore the services we offer below:
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Service 1 */}
          <div className="p-4 rounded-lg border border-gray-300">
            <h2 className="text-xl font-semibold mb-2">1. Pediatric Checkups</h2>
            <p className="text-gray-600 mb-4">Regular checkups are essential for monitoring your child's growth and development.</p>
            <ul className="list-disc list-inside">
              <li>Routine well-child visits</li>
              <li>Immunizations</li>
              <li>Growth tracking</li>
              <li>Developmental screenings</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="p-4 rounded-lg border border-gray-300">
            <h2 className="text-xl font-semibold mb-2">2. Vaccinations</h2>
            <p className="text-gray-600 mb-4">Keeping your child up to date on vaccinations is crucial for safeguarding their health.</p>
            <ul className="list-disc list-inside">
              <li>Childhood vaccinations</li>
              <li>Flu shots</li>
              <li>Travel vaccinations</li>
              <li>Vaccine counseling</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="p-4 rounded-lg border border-gray-300">
            <h2 className="text-xl font-semibold mb-2">3. Pediatric Specialists</h2>
            <p className="text-gray-600 mb-4">Our team includes pediatric specialists who are experts in various areas of child healthcare.</p>
            <ul className="list-disc list-inside">
              <li>Pediatric cardiology</li>
              <li>Pediatric dermatology</li>
              <li>Pediatric neurology</li>
              <li>Pediatric pulmonology</li>
              <li>Pediatric gastroenterology</li>
            </ul>
          </div>
        </div>

        {/* Continue with the rest of the services... */}
      </div>
    </div>
  );
}

export default App;
