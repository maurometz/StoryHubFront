import { Footer, Header } from "../../components";
import { useState } from "react";

export function Categories() {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const categories = [
    {
      name: "Fantasy",
      description: "Stories set in magical worlds and realms.",
      subcategories: [
        {
          name: "Epic Fantasy",
          description: "Large-scale adventures and quests.",
        },
        {
          name: "Urban Fantasy",
          description: "Magic in modern settings.",
        },
        {
          name: "Dark Fantasy",
          description: "Grim, often horror-infused magical tales.",
        },
        {
          name: "Mythic Fantasy",
          description: "Inspired by myths, legends, and folklore.",
        },
        {
          name: "High Fantasy",
          description: "Intricate magical worlds with detailed lore.",
        },
      ],
    },
    {
      name: "Science Fiction",
      description: "Futuristic tales and advanced technology.",
      subcategories: [
        {
          name: "Space Opera",
          description: "Adventures across the galaxy.",
        },
        {
          name: "Cyberpunk",
          description: "High-tech, low-life futures.",
        },
        {
          name: "Hard Sci-Fi",
          description: "Based on realistic science and technology.",
        },
        {
          name: "Post-Apocalyptic",
          description: "Aftermath of world-altering catastrophes.",
        },
        {
          name: "Time Travel",
          description: "Explorations across different timelines.",
        },
        {
          name: "Dystopian",
          description: "Societies in decay or oppression.",
        },
      ],
    },
    {
      name: "Mystery",
      description: "Whodunits and thrilling investigations.",
      subcategories: [
        {
          name: "Detective",
          description: "Classic detective stories.",
        },
        {
          name: "Cozy Mystery",
          description: "Lighthearted mysteries in small towns.",
        },
        {
          name: "Noir",
          description: "Dark, gritty tales with morally gray characters.",
        },
        {
          name: "Police Procedural",
          description: "Follows law enforcement investigations.",
        },
        {
          name: "Historical Mystery",
          description: "Mysteries set in the past.",
        },
      ],
    },
    {
      name: "Horror",
      description: "Frightening and supernatural stories.",
      subcategories: [
        {
          name: "Psychological Horror",
          description: "Mind-bending terror and paranoia.",
        },
        {
          name: "Supernatural Horror",
          description: "Ghosts, demons, and otherworldly threats.",
        },
        {
          name: "Body Horror",
          description: "Grotesque transformation and mutilation.",
        },
        {
          name: "Slasher",
          description: "Serial killers and gory violence.",
        },
        {
          name: "Folk Horror",
          description: "Ancient rites and rural fears.",
        },
      ],
    },
    {
      name: "Romance",
      description: "Love stories across all settings.",
      subcategories: [
        {
          name: "Contemporary Romance",
          description: "Modern-day love stories.",
        },
        {
          name: "Historical Romance",
          description: "Love in past eras.",
        },
        {
          name: "Paranormal Romance",
          description: "Supernatural beings and romance.",
        },
        {
          name: "Romantic Comedy",
          description: "Lighthearted and humorous love stories.",
        },
        {
          name: "Dark Romance",
          description: "Twisted, intense romantic themes.",
        },
      ],
    },
    {
      name: "Thriller",
      description: "High-stakes, suspenseful stories.",
      subcategories: [
        {
          name: "Psychological Thriller",
          description: "Mind games and mental tension.",
        },
        {
          name: "Crime Thriller",
          description: "Criminal plots and moral ambiguity.",
        },
        {
          name: "Techno Thriller",
          description: "Technology-driven tension.",
        },
        {
          name: "Political Thriller",
          description: "Government conspiracies and espionage.",
        },
        {
          name: "Legal Thriller",
          description: "Courtroom drama and legal strategy.",
        },
      ],
    },
    {
      name: "Historical",
      description: "Fiction based on or inspired by history.",
      subcategories: [
        {
          name: "Historical Drama",
          description: "Serious, character-driven period stories.",
        },
        {
          name: "Alternate History",
          description: "What if historical events had turned out differently?",
        },
        {
          name: "Historical Adventure",
          description: "Action-packed tales in historic settings.",
        },
        {
          name: "Historical Romance",
          description: "Love stories set in the past.",
        },
      ],
    },
    {
      name: "Adventure",
      description: "Exciting journeys and bold explorations.",
      subcategories: [
        {
          name: "Survival",
          description: "Endurance against the elements or danger.",
        },
        {
          name: "Exploration",
          description: "Discovering uncharted lands or realms.",
        },
        {
          name: "Treasure Hunt",
          description: "Questing for hidden riches or relics.",
        },
        {
          name: "Swashbuckler",
          description: "Sword fights and daring exploits.",
        },
      ],
    },
    {
      name: "Comedy",
      description: "Stories designed to amuse and entertain.",
      subcategories: [
        {
          name: "Satire",
          description: "Critique through humor.",
        },
        {
          name: "Parody",
          description: "Humorous imitation of genres or tropes.",
        },
        {
          name: "Romantic Comedy",
          description: "Light-hearted romance with humor.",
        },
        {
          name: "Slapstick",
          description: "Physical and exaggerated comedy.",
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 pt-30 pb-30 py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 drop-shadow">
          Categories
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Select a category to explore their subcategories.
        </p>
        <div className="max-w-2xl mx-auto space-y-4">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-lg bg-white transition-all border border-gray-200 ${
                openIdx === idx ? "ring-0 black" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-left focus:outline-none focus:ring-1 focus:black rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`cat-panel-${idx}`}
              >
                <span className="text-gray-800">{category.name}</span>
                <span
                  className={`ml-4 transition-transform duration-300 ${
                    openIdx === idx ? "rotate-90" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
              <div
                id={`cat-panel-${idx}`}
                className={`overflow-hidden transition-all duration-400 ${
                  openIdx === idx ? "max-h-96" : "max-h-0"
                }`}
                style={{
                  transition: "max-height 0.4s cubic-bezier(.4,2,.6,1)",
                }}
              >
                <div className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 mb-2">{category.description}</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {category.subcategories.map((sub, subIdx) => (
                      <li key={subIdx} className="text-gray-600">
                        <strong className="text-gray-800">{sub.name}</strong>:{" "}
                        {sub.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
