import { Link } from "react-router-dom";

const BlogItem = ({
  slug,
  title,
  imageUrl,
  summary,
  tag,
  authorName,
  authorImg,
  authorPosition,
  authorBio,
}) => {
  return (
    <div className="card bg-white  shadow-lg rounded-lg overflow-hidden flex flex-col">
      {/* Blog Image Section */}
      <div className="relative h-48">
        <div className="absolute top-2 right-2 px-2 py-1  text-white text-xs rounded-tr-lg rounded-bl-lg ">
          {/* Displaying tags */}
          <div className="flex space-x-2">
            <span className="px-2 py-1 rounded-full text-xs bg-blue-500">
              {tag}
            </span>
          </div>
        </div>
        <Link to={`/blog/post/${slug}`}>
          <img
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            src={imageUrl}
            alt={title}
          />
        </Link>
      </div>

      {/* Blog Details Section */}
      <div className="flex flex-col justify-between p-6 flex-grow">
        <div>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            <Link
              to={`/blog/post/${slug}`}
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {summary}
          </p>
        </div>

        {/* Author Info Section */}
        <div className="flex items-center mt-4 space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
            <img
              src={authorImg}
              alt={authorName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-medium text-sm text-gray-800 dark:text-gray-200">
              {authorName}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {authorPosition}
            </p>
            <p className="text-xs mt-1 text-gray-500 dark:text-gray-400 truncate">
              {authorBio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
