import { useState, useEffect } from "react";
import { Header, Footer, LoadingSpinner } from "../../components";
import { useGetStories } from "../../hooks/useStories";
import { createStory } from "../../services/stories";
import { useParams, useNavigate } from "react-router-dom";

export const Stories = () => {
  const { stories, error, loading } = useGetStories();
  const [expandedId, setExpandedId] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newStory, setNewStory] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setExpandedId(id);
    }
  }, [id]);

  if (expandedId !== null || showCreateForm) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createStory(newStory);
      setShowCreateForm(false);
      setNewStory({ title: "", content: "", author: "" });
      // Refresh the stories list
      window.location.reload();
    } catch (error) {
      console.error("Failed to create story:", error);
      alert("Failed to create story. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStoryClick = (storyId) => {
    setExpandedId(storyId);
    navigate(`/stories/${storyId}`);
  };

  const handleCloseStory = () => {
    setExpandedId(null);
    navigate('/stories');
  };

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
      {(expandedId !== null || showCreateForm) && (
        <div
          className="fixed inset-0 bg-white-opaque z-40"
          style={{ pointerEvents: "auto" }}
          onClick={() => {
            handleCloseStory();
            setShowCreateForm(false);
          }}
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
              <h1 className="text-4xl font-bold">Stories</h1>
              <button
                onClick={() => setShowCreateForm(true)}
                className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Write a New Story
              </button>
              <div className="w-[80%] mt-4">
                <ul className="flex justify-start flex-wrap mt-4 relative">
                  {stories.map((story) => {
                    const isExpanded = expandedId === story.id;
                    return (
                      <li
                        key={story.id}
                        className={`flex flex-col justify-between p-4 m-5 bg-white rounded shadow-md max-w-[365px] transition-all duration-300 z-10 ${
                          isExpanded
                            ? "fixed left-1/4 top-1/10 w-1/2 h-3/4 max-w-none max-h-none overflow-auto z-50"
                            : "hover:scale-105 cursor-pointer"
                        }`}
                        style={isExpanded ? { minWidth: 0, minHeight: 0 } : {}}
                        onClick={() => handleStoryClick(story.id)}
                      >
                        <div>
                          <h2 className="text-[20px] font-semibold">
                            {story.title}
                          </h2>
                          <div className="text-gray-700 mt-5">
                            {isExpanded
                              ? renderParagraphs(story.content)
                              : story.content.length > 100
                              ? `${story.content.slice(0, 80)}...`
                              : story.content}
                          </div>
                        </div>
                        <p className="text-gray-500 mt-4">
                          By <span className="font-bold">{story.author}</span>
                        </p>
                        {isExpanded && (
                          <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCloseStory();
                            }}
                            aria-label="Close"
                          >
                            <div className="">&times;</div>
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </main>
          <Footer />

          {/* Create Story Form Modal */}
          {showCreateForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-xl w-[90%] max-w-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Write a New Story</h2>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="text-gray-400 hover:text-gray-700 text-xl"
                  >
                    &times;
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={newStory.title}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={newStory.author}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                      Story Content
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={newStory.content}
                      onChange={handleInputChange}
                      required
                      rows="10"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50"
                    >
                      {isSubmitting ? "Publishing..." : "Publish Story"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
