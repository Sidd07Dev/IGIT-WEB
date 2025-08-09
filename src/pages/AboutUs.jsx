import React from 'react';
import { Users, Globe2, HeartHandshake } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-[#e0f7fa] via-white to-[#e0f7fa] min-h-screen p-8 md:p-16">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#003366] mb-6">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to <span className="font-bold text-[#FF9933]">BatoiBhai</span> — your ultimate guide to discovering the beauty, culture, and spirit of Odisha. 
            We believe every district has a story worth telling and experiences worth sharing.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zromJFrvbVpcO6RJhij_GIyqGdURstXSog&s"
            alt="Explore Odisha"
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
          />

          {/* Right Side - Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#003366]">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              Our mission is simple — to connect travelers, history enthusiasts, and culture seekers with the rich heritage of Odisha.
              From the golden beaches of Puri to the lush forests of Sambalpur, we aim to showcase the diverse landscapes, cuisines, festivals, and hidden gems that make Odisha truly magical.
            </p>
            <p className="text-gray-700 text-lg">
              We want to empower both locals and tourists to explore beyond the typical tourist spots and experience the heart and soul of every district.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#003366] mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition space-y-4">
              <Globe2 className="mx-auto text-[#FF9933]" size={40} />
              <h3 className="text-2xl font-semibold text-[#003366]">Promoting Culture</h3>
              <p className="text-gray-600">
                We celebrate Odisha's vibrant traditions, arts, and history, bringing its colorful culture to the forefront.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition space-y-4">
              <Users className="mx-auto text-[#FF9933]" size={40} />
              <h3 className="text-2xl font-semibold text-[#003366]">Connecting People</h3>
              <p className="text-gray-600">
                We build bridges between local communities and travelers, creating meaningful and memorable experiences.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition space-y-4">
              <HeartHandshake className="mx-auto text-[#FF9933]" size={40} />
              <h3 className="text-2xl font-semibold text-[#003366]">Sustainable Tourism</h3>
              <p className="text-gray-600">
                We encourage responsible tourism that respects the environment, supports local businesses, and preserves heritage sites.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-700">
            Whether you're a history buff, a nature lover, a foodie, or an adventurer — <span className="font-bold text-[#003366]">BatoiBhai</span> invites you to embark on a journey you’ll never forget. 🌟
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
