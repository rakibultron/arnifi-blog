import BlogItem from "./BlogItem";

const blogPosts = [
  {
    slug: "post-1",
    title: "Static Blog Post Title 1",
    imageUrl: "https://via.placeholder.com/300x400",
    summary: "This is a static summary of the blog post 1.",
    authorName: "John Doe",
    authorImg: "https://via.placeholder.com/150",
    authorPosition: "Senior Writer",
    authorBio: "Passionate about technology and storytelling.",
    tag: "Tech",
  },
  {
    slug: "post-2",
    title: "Static Blog Post Title 2",
    imageUrl: "https://via.placeholder.com/300x400",
    summary: "This is a static summary of the blog post 2.",
    authorName: "Jane Doe",
    authorImg: "https://via.placeholder.com/150",
    authorPosition: "Content Strategist",
    authorBio: "Expert in digital marketing and SEO.",
    tag: "Marketing",
  },
  {
    slug: "post-3",
    title: "Static Blog Post Title 3",
    imageUrl: "https://via.placeholder.com/300x400",
    summary: "This is a static summary of the blog post 3.",
    authorName: "Alex Smith",
    authorImg: "https://via.placeholder.com/150",
    authorPosition: "Freelance Writer",
    authorBio: "Lover of all things tech and AI.",
    tag: "AI",
  },
  {
    slug: "post-4",
    title: "Static Blog Post Title 4",
    imageUrl: "https://via.placeholder.com/300x400",
    summary: "This is a static summary of the blog post 4.",
    authorName: "Emily Clark",
    authorImg: "https://via.placeholder.com/150",
    authorPosition: "UX Designer",
    authorBio: "Designing with empathy and creativity.",
    tag: "UX",
  },
];

export default function BlogSection() {
  return (
    <div className="min-h-screen  p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogPosts.map((post) => (
          <BlogItem
            key={post.slug}
            slug={post.slug}
            title={post.title}
            imageUrl={post.imageUrl}
            summary={post.summary}
            tag={post.tag}
            authorName={post.authorName}
            authorImg={post.authorImg}
            authorPosition={post.authorPosition}
            authorBio={post.authorBio}
          />
        ))}
      </div>
    </div>
  );
}
