import { Star } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div>
      <section className="py-32">
        <div className="container text-center">
          <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
            <h1 className="text-3xl font-extrabold lg:text-6xl">
              Discover Blogs from Our Community of Writers
            </h1>
            <p className="text-balance text-muted-foreground lg:text-lg">
              Explore a wide range of topics contributed by talented writers.
              Dive into well-crafted blogs created with passion and share your
              thoughts with the community.
            </p>
          </div>
          <Button size="lg" className="mt-10">
            Explore All Blogs
          </Button>
          {/* <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="mx-4 inline-flex items-center -space-x-4">
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                  alt="User 1"
                />
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-2.webp"
                  alt="User 2"
                />
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-3.webp"
                  alt="User 3"
                />
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-4.webp"
                  alt="User 4"
                />
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-5.webp"
                  alt="User 5"
                />
              </Avatar>
            </span>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
