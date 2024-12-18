import { useState } from "react";
import { Button } from "@/components/ui/button";

const CategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Design",
    "Marketing",
    "Finance",
    "Development",
    "Education",
  ];

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Explore Categories
      </h2>
      <div className="flex justify-center flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="rounded-full px-4 py-2 text-sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
