import { LoadingSpinner } from "../../components";
import { useGetStories } from "../../hooks/useStories";

export const Stories = () => {
  const { stories, error, loading } = useGetStories();

  return (
    <main className="min-h-140 bg-gray-100">
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
            <ul className="flex justify-center flex-wrap mt-4">
              {stories.map((story) => (
                <li
                  key={story.id}
                  className="p-4 m-5 bg-white rounded shadow-md max-w-2xs"
                >
                  <h2 className="text-2xl font-semibold">{story.title}</h2>
                  <p className="text-gray-700">
                    {story.content.length > 100
                      ? `${story.content.slice(0, 80)}...`
                      : story.content}
                  </p>
                  <p className="text-gray-500">By {story.author}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
};
