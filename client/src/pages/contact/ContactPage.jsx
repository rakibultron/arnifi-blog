import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-14">
          <span className="text-sm font-semibold">Reach Us</span>
          <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
            Speak with Our Friendly Team
          </h1>
          <p className="text-lg text-muted-foreground">
            We&apos;d love to assist you. Fill out the form or drop us an email.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Email Us</p>
            <p className="mb-3 text-muted-foreground">
              Our team is ready to assist.
            </p>
            <a
              href="mailto:abc@example.com"
              className="font-semibold hover:underline"
            >
              abc@example.com
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Visit Us</p>
            <p className="mb-3 text-muted-foreground">
              Drop by our office for a chat.
            </p>
            <a
              href="https://goo.gl/maps/example"
              className="font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              1234 Street Name, City Name
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Call Us</p>
            <p className="mb-3 text-muted-foreground">
              We&apos;re available Mon-Fri, 9am-5pm.
            </p>
            <a href="tel:+1234567890" className="font-semibold hover:underline">
              +123 456 7890
            </a>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold">Contact Us</h2>
          <form className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border rounded-md"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <Button size="lg" className="mt-10 w-full">
                Send Message
              </Button>
              {/* <button
                type="submit"
                className="w-full px-6 py-3  dark:bg-primary rounded-md "
              >
                Send Message
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
