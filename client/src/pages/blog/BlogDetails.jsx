import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
const BlogDetailsPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
        <CardHeader
          className="h-96 bg-cover rounded-t-lg text-center overflow-hidden"
          style={{ backgroundImage: "url('/img/blog-image.jpg')" }}
        ></CardHeader>

        <CardContent className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              The Benefits of Drinking Coffee for Developers
            </h1>

            <div className="flex items-center mb-4">
              <Avatar
                className="w-12 h-12 rounded-full mr-4"
                src="/img/jonathan.jpg"
                alt="Author Avatar"
              />
              <div>
                <p className="text-gray-900 font-semibold">Jonathan Reinink</p>
                <p className="text-gray-600 text-sm">August 18, 2024</p>
              </div>
            </div>

            <div className="mb-4">
              <Badge className="mr-2 text-sm bg-blue-500 text-white">
                Development
              </Badge>
            </div>

            <div className="text-gray-700 text-base leading-relaxed">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur suscipit, justo non venenatis tincidunt, purus sapien
                feugiat nunc, euismod pellentesque nulla turpis in leo. Integer
                euismod magna sed nisi posuere, a interdum felis dignissim.
                Donec vel enim nisi. Integer vel ex felis.
              </p>
              <p className="mb-4">
                Curabitur lobortis, nisl a fermentum congue, elit justo
                convallis augue, a consequat enim nunc et leo. Fusce euismod,
                felis nec ultricies pharetra, orci urna fermentum odio, a
                vehicula urna est eget leo. Etiam hendrerit ipsum eu augue
                tincidunt tincidunt. Cras et nisi et ante consequat vehicula.
                Proin fermentum risus at lacinia lobortis.
              </p>
              <p>
                Suspendisse potenti. Nullam vel risus nec mauris efficitur
                hendrerit. Duis a est in sapien feugiat auctor. Vivamus aliquet
                viverra felis, ac maximus urna laoreet vel. Donec ut justo eget
                elit tincidunt suscipit. Maecenas fermentum, mi ac interdum
                consequat, justo magna interdum mi, nec varius justo eros at
                ipsum.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogDetailsPage;
