import { Button, LoadingSpinner } from "../../components";
import { useGetStories } from "../../hooks/useStories";

export const Home = () => {
  const { stories, error, loading } = useGetStories();

  return (
    <main className="flex flex-col min-h-140">
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="flex flex-col items-center min-h-90 mt-1 justify-center bg-gray-100">
          {error.status && (
            <h1 className="text-6xl font-bold pb-4 text-gray">
              {error.status}
            </h1>
          )}
          <p className="text-[20px]">{error.message}</p>
        </div>
      ) : (
        <div>
          <section className="h-[80vh] flex justify-center items-center flex-col">
            <div className="text-center mb-4">
              <h1 className="text-large font-medium mb-4">
                Where Stories Come to Life
              </h1>
              <p className="text-gray text-medium mb-4">
                Join our community of writers and readers. Share your stories,
                discover new worlds.
              </p>
            </div>
            <Button text="Start Writing" />
          </section>
          <section className="pb-2.5 bg-gray-lightly">
            <div className="w-[90%] mx-auto">
              <div className="pt-10 mb-4">
                <h2 className="font-medium text-2xl">Featured Stories</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {stories
                  .filter((story, i) => i < 4)
                  .map((story, i) => (
                    <div
                      key={i}
                      className="bg-white shadow-md rounded-lg p-5 mt-4 mb-4 flex flex-col items-start"
                    >
                      <span className="w-full h-40 mb-4 flex justify-center items-center bg-gray-bluey rounded-lg overflow-hidden">
                        <img src="#" alt="Here should be a image" />
                      </span>
                      <h3 className="text-xl font-semibold mb-2">
                        {story.title}
                      </h3>
                      <p className="text-gray">
                        {story.content.length > 100
                          ? `${story.content.slice(0, 100)}...`
                          : story.content}
                      </p>
                      <div className="flex flex-row items-start mt-4 align-middle">
                        <span className="w-8 h-8 rounded-full overflow-hidden mr-2">
                          <img src="../../utils/img/avatar.png" alt="Avatar" />
                        </span>
                        <p className="text-black text-sm mt-[8px]">
                          {story.author}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
          <section className="pb-2.5">
            <div className="w-[90%] mx-auto">
              <div className="pt-10 mb-4">
                <h2 className="font-medium text-2xl">Popular Writers</h2>
              </div>
              <div className="flex justify-around mb-10">
                {[...Array(4)].map((index) => (
                  <div key={index} className="flex flex-col items-center">
                    <span className="w-24 h-24 rounded-full overflow-hidden mb-2">
                      <img src="../../utils/img/avatar.png" alt="Avatar" />
                    </span>
                    <h3 className="font-bold">Maria Doe</h3>
                    <p>Fantasy writer</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};
