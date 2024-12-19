import { Link } from "react-router-dom";

const BlogItem = ({
  id,
  title,
  imageUrl,
  content,
  category,
  authorName,
  authorImg,
}) => {
  return (
    <div className="card bg-background border border-border shadow-sm rounded-md overflow-hidden flex flex-col">
      <div className="relative h-48">
        <div className="absolute top-2 right-2 px-2 py-1 dark:text-black text-white text-xs rounded-tr-lg rounded-bl-lg">
          <div className="flex space-x-2">
            <span className="px-2 py-1 rounded-full text-xs bg-primary">
              {category}
            </span>
          </div>
        </div>

        <Link to={`/blogs/${id}`}>
          <img
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            src={imageUrl || "/images/placeholder.jpg"}
            alt={title}
          />
        </Link>
      </div>

      <div className="flex flex-col justify-between p-6 flex-grow">
        <div>
          <h3 className="font-semibold text-lg text-foreground">
            <Link to={`/blogs/${id}`} className="text-primary hover:underline">
              {title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground mt-2">{content}</p>
        </div>

        <div className="flex items-center mt-4 space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-border">
            <img
              src={authorImg || "/images/placeholder.jpg"}
              alt={authorName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-sm text-foreground">{authorName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
