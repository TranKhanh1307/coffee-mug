import type { Story } from "../lib/definition";
import { convertDate } from "../lib/util";
import Card from "./Card";

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
    <Card
      key={story.title}
      imageUrl={story.thumbnail}
      hoverText="Read the full story"
      className="h-[300px]"
    >
      <p className="text-center text-xl md:text-left">{story.title}</p>
      <p className="mt-2 text-center text-gray-400 md:text-left">
        {story.summary}
      </p>
      <p className="mt-2 text-center text-lg text-gray-500 uppercase md:text-left">
        {convertDate(story.date)}
      </p>
    </Card>
  );
}
