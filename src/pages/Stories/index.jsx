import { Footer, Header } from "../../components";
import { useGetStories } from "../../hooks/useStories";

export const Stories = () => {
  const { stories, loading, error } = useGetStories();

  return (
    <>
      <Header />
      {!stories && loading ? (
        <div>Loading ...</div>
      ) : error ? (
        <div className="flex flex-col items-center min-h-90 mt-1 justify-center bg-gray-100">
          {error.status && (
            <h1 className="text-6xl font-bold pb-4 text-gray">
              {error.status}
            </h1>
          )}
          <p className="text-[20px]">{error.message}</p>
        </div>
      ) : stories.length === 0 ? (
        <div>No story found</div>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center flex-wrap min-h-120 bg-gray-100">
            <h1 className="text-4xl font-bold">Stories</h1>
            <ul className="flex items-center justify-center w-full max-w-2xl mt-4">
              {stories.map((story) => (
                <li
                  key={story.id}
                  className="p-4 m-5 bg-white rounded shadow-md w-1/2"
                >
                  <h2 className="text-2xl font-semibold">{story.title}</h2>
                  <p className="text-gray-700">{story.content}</p>
                  <p className="text-gray-500">By {story.author}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};
