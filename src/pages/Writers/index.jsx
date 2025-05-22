import { useState } from "react";
import { Header, Footer, LoadingSpinner } from "../../components";
import { useGetStories } from "../../hooks/useStories";

export const Writers = () => {
  const { stories, error, loading } = useGetStories();
  const [selectedWriter, setSelectedWriter] = useState(null);

  const writers = stories.reduce((acc, story) => {
    if (!acc[story.author]) {
      acc[story.author] = {
        name: story.author,
        stories: [],
        storyCount: 0
      };
    }
    acc[story.author].stories.push(story);
    acc[story.author].storyCount++;
    return acc;
  }, {});

  const writersList = Object.values(writers);

  if (selectedWriter !== null) {
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
    <>
      {selectedWriter !== null && (
        <div
          className="fixed inset-0 bg-white-opaque z-40"
          style={{ pointerEvents: "auto" }}
          onClick={() => setSelectedWriter(null)}
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
        <>
          <Header />
          <main className="min-h-140 bg-gray-100 pt-30 pb-30">
            <div className="flex flex-col items-center justify-center bg-gray-100 pt-8 pb-8">
              <h1 className="text-4xl font-bold">Writers</h1>
              <div className="w-[80%] mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {writersList.map((writer) => (
                    <div
                      key={writer.name}
                      onClick={() => setSelectedWriter(writer)}
                      className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <span className="w-16 h-16 rounded-full overflow-hidden">
                          <img
                            src="../../utils/img/avatar.png"
                            alt={`${writer.name}'s avatar`}
                            className="w-full h-full object-cover"
                          />
                        </span>
                        <div>
                          <h2 className="text-xl font-semibold">{writer.name}</h2>
                          <p className="text-gray-600">{writer.storyCount} stories</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
          <Footer />

          {/* Writer Details Modal */}
          {selectedWriter && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-xl w-[90%] max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="w-20 h-20 rounded-full overflow-hidden">
                      <img
                        src="../../utils/img/avatar.png"
                        alt={`${selectedWriter.name}'s avatar`}
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedWriter.name}</h2>
                      <p className="text-gray-600">{selectedWriter.storyCount} stories</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedWriter(null)}
                    className="text-gray-400 hover:text-gray-700 text-xl"
                  >
                    &times;
                  </button>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Stories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedWriter.stories.map((story) => (
                      <div
                        key={story.id}
                        className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                      >
                        <h4 className="text-lg font-semibold mb-2">{story.title}</h4>
                        <div className="text-gray-700">
                          {story.content.length > 150
                            ? `${story.content.slice(0, 150)}...`
                            : story.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}; 