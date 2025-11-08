import React from "react";

const Footer = ({ teamMembers }) => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
              SMOOTHIE VIBE
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Fresh, creamy, and healthy smoothies made by students.
              <br />
              Match your vibe every day at school!
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
              Team Members & Roles
            </h3>
            <ul className="space-y-1 text-gray-700">
              {teamMembers.map((member, index) => (
                <li key={index} className="text-xs sm:text-sm">
                  <span className="font-semibold">{member.name}</span> –{" "}
                  {member.role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
