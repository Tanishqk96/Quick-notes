import React, { useState } from "react";

const Preferences = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [fontStyle, setFontStyle] = useState("Serif");
  const [homepageView, setHomepageView] = useState("Grid");
  const [sortOrder, setSortOrder] = useState("Last Edited");

  const handleSave = () => {
    alert("✅ Preferences saved successfully!");
    // TODO: Send to backend or localStorage
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Your Preferences</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Personalize your QuickNotes experience to match your style and workflow.
        </p>
      </section>

      {/* Preferences Form */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-6">Customize Your Experience</h2>

        <div className="space-y-8 max-w-xl mx-auto text-lg">

          {/* Font Style */}
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
            <label className="block font-semibold mb-1">✍️ Default Note Font Style</label>
            <select
              value={fontStyle}
              onChange={(e) => setFontStyle(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            >
              <option value="Serif">Serif</option>
              <option value="Sans-Serif">Sans-Serif</option>
              <option value="Monospace">Monospace</option>
              <option value="Handwriting">Handwriting</option>
            </select>
          </div>

         

          {/* Auto-Save */}
          <div className="flex items-center justify-between bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
            <div>
              <h3 className="font-semibold">💾 Auto-Save</h3>
              <p className="text-sm text-gray-500">Save your notes automatically as you type</p>
            </div>
            <input
              type="checkbox"
              checked={autoSave}
              onChange={() => setAutoSave(!autoSave)}
              className="w-5 h-5"
            />
          </div>

          <button
            onClick={handleSave}
            className="mt-6 bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            Save Preferences
          </button>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-gray-100 to-white text-center">
        <h2 className="text-3xl font-bold mb-4">Your Notes, Your Way</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Whether you're a minimalist or a maximalist, we’ve got the settings to match your unique workflow.
        </p>
      </section>
    </div>
  );
};

export default Preferences;
