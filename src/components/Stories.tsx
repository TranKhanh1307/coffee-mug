import clsx from "clsx";
import type { Story } from "../lib/definition";
import { convertDate } from "../lib/util";

export default function Stories({ stories }: { stories: Story[] }) {
  return (
    <div className="grid gap-y-24 md:grid-cols-3 md:gap-x-4">
      {stories.map((story) => (
        <Story key={story.title} story={story} />
      ))}
    </div>
  );
}

function Story({ story }: { story: Story }) {
  return (
    <div>
      <a
        href="#"
        className={clsx(
          "group relative mx-auto block h-[300px] bg-cover bg-center bg-blend-darken transition-all duration-300 ease-in-out hover:bg-black/10",
        )}
        style={{ backgroundImage: `url(${story.thumbnail})` }}
      >
        <div className="absolute bottom-2 w-full scale-x-95 bg-white p-4 text-center uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
          Read the full story
        </div>
      </a>
      <p className="mt-8 text-center text-xl md:text-left">{story.title}</p>
      <p className="mt-2 text-center text-gray-400 md:text-left">
        {story.summary}
      </p>
      <p className="mt-2 text-center text-lg text-gray-500 uppercase md:text-left">
        {convertDate(story.date)}
      </p>
    </div>
  );
}
