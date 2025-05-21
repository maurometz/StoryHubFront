import { useState } from "react";
import { LoadingSpinner } from "../../components";
import { useGetStories } from "../../hooks/useStories";

export const Stories = () => {
  const { stories, error, loading } = useGetStories();

  const [expandedId, setExpandedId] = useState(null);

  if (expandedId !== null) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  const renderParagraphs = (content) => {
    if (!content) return null;
    return content.split(/\n\s*\n/).map((para, idx) => (
      <p key={idx} className="mb-4">
        {para.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < para.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>
    ));
  };

  return (
    <main className="min-h-140 bg-gray-100">
      {expandedId !== null && (
        <div
          className="fixed inset-0 bg-white-opaque z-40"
          style={{ pointerEvents: "auto" }}
          onClick={() => setExpandedId(null)}
        />
      )}
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="flex flex-col items-center justify-center min-h-90 mt-1 bg-gray-100">
          {error.status && (
            <h1 className="text-6xl font-bold pb-4 text-gray">
              {error.status}
            </h1>
          )}
          <p className="text-[20px]">{error.message}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center bg-gray-100 pt-8 pb-8">
          <h1 className="text-4xl font-bold">Stories</h1>
          <div className="w-[80%] mt-4">
            <ul className="flex justify-center flex-wrap mt-4 relative">
              {stories.map((story) => {
                const isExpanded = expandedId === story.id;
                return (
                  <li
                    key={story.id}
                    className={`p-4 m-5 bg-white rounded shadow-md max-w-2xs transition-all duration-300 z-10 ${
                      isExpanded
                        ? "fixed left-1/4 top-1/10 w-1/2 h-3/4 max-w-none max-h-none overflow-auto z-50"
                        : "hover:scale-105"
                    }`}
                    style={isExpanded ? { minWidth: 0, minHeight: 0 } : {}}
                    onClick={() => setExpandedId(story.id)}
                  >
                    <h2 className="text-2xl font-semibold">{story.title}</h2>
                    <div className="text-gray-700 mt-5">
                      {isExpanded
                        ? renderParagraphs(story.content)
                        : story.content.length > 100
                        ? `${story.content.slice(0, 80)}...`
                        : story.content}
                    </div>
                    <p className="text-gray-500 mt-4">By {story.author}</p>
                    {isExpanded && (
                      <button
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedId(null);
                        }}
                        aria-label="Close"
                      >
                        &times;
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
};
