import { StartUp } from "@/sanity.types";

interface CardPostProps {
  el: StartUp;
}
const CardPost = ({ el }: CardPostProps) => {
  return (
    <li
      className="
        group
        relative
        flex
        flex-col
        justify-between
        rounded-2xl
        border
        border-black/10
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-[rgba(255,162,232,0.35)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between text-sm text-black/60">
        <span className="font-medium">{el.category ?? "Startup"}</span>
        <span>{new Date(el._createdAt).toLocaleDateString()}</span>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-xl font-semibold text-black line-clamp-2">
        {el.title}
      </h3>

      {/* Image */}
      {el.image && (
        <div className="mt-3 overflow-hidden rounded-xl">
          <img
            src={el.image}
            alt={el.title}
            className="
              h-40
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />
        </div>
      )}

      {/* Description */}
      {el.description && (
        <p className="mt-2 text-sm text-black/70 line-clamp-3">
          {el.description}
        </p>
      )}

      {/* Pitch */}
      {el.pitch && (
        <p className="mt-3 text-sm italic text-black/60 line-clamp-2">
          “{el.pitch}”
        </p>
      )}

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between">
        {/* Author */}
        {el.author && (
          <div className="flex items-center gap-2">
            {el.author. ? (
              <img
                src={el.author.image}
                alt={el.author.name}
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-8 w-25 items-center justify-center rounded-full bg-black/5 text-xs font-medium">
                {el.author..charAt(0)}
              </div>
            )}

            <div className="text-sm">
              <p className="font-medium text-black">{el.author.name}</p>
              {el.author.bio && (
                <p className="text-xs text-black/50 line-clamp-1">
                  {el.author.bio}
                </p>
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        <span
          className="
            rounded-full
            bg-[rgba(255,162,232,0.15)]
            px-3
            py-1
            text-xs
            font-medium
            text-black
            transition-colors
            group-hover:bg-[rgba(255,162,232,0.35)]
          "
        >
          View
        </span>
      </div>
    </li>
  );
};

export default CardPost;
