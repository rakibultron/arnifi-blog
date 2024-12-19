import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogsUnavailable = () => {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-lg font-semibold">
            Blogs Not Available
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-sm text-gray-600">
          There are no blogs available at the moment. Please check back later.
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogsUnavailable;
