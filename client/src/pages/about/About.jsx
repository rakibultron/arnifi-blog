const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          Welcome to <strong>BlogSphere</strong>, a vibrant platform where
          creators, writers, and tech enthusiasts converge. Whether you're into
          technology, lifestyle, business, or arts, you'll find engaging content
          here, crafted by our diverse community of contributors. We empower
          voices across categories, ensuring there's something for everyone.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-muted-foreground">
              To create a platform where voices are amplified, stories are
              shared, and ideas thrive.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the global hub for multi-category blogging, inspiring
              millions worldwide.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
            <p className="text-muted-foreground">
              A collaborative space where creators can publish, connect, and
              inspire readers.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-8">
            Behind BlogSphere is a passionate team of developers, writers, and
            designers working to provide the best blogging experience.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 text-center">
              <img
                src="/images/placeholder.jpg"
                alt="Team Member 1"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-semibold">Jane Doe</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            <div className="p-4 text-center">
              <img
                src="/images/placeholder.jpg"
                alt="Team Member 2"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-semibold">John Smith</h3>
              <p className="text-muted-foreground">Tech Lead</p>
            </div>
            <div className="p-4 text-center">
              <img
                src="/images/placeholder.jpg"
                alt="Team Member 3"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-semibold">Alex Johnson</h3>
              <p className="text-muted-foreground">Content Strategist</p>
            </div>
            <div className="p-4 text-center">
              <img
                src="/images/placeholder.jpg"
                alt="Team Member 4"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-semibold">Emily Davis</h3>
              <p className="text-muted-foreground">UI/UX Designer</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-4">Join Us</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto">
            Ready to share your voice and connect with our community? Become a
            part of BlogSphere today and start publishing your stories!
          </p>
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="px-6 py-3  dark:text-black font-semibold rounded-md dark:bg-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
