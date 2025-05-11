import { useState } from "react";
import { ChefHat, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import FoodCard from "@/components/FoodCard";
import QuoteModal from "@/components/QuoteModal";
import Navbar from "@/components/Navbar";

const menuItems = [
  {
    id: "1",
    name: "Jollof Rice",
    description: "Traditional West African rice dish with tomatoes and spices",
    image:
      "https://res.cloudinary.com/dyagqvjxl/image/upload/v1746435839/cld-sample-2.jpg",
    category: "Main Course",
    servings: 0,
  },
  {
    id: "2",
    name: "Egusi Soup",
    description: "Smooth yam paste served with melon seed soup",
    image:
      "https://res.cloudinary.com/dyagqvjxl/image/upload/v1746435342/cld-sample-4.jpg",
    category: "Main Course",
    servings: 0,
  },
  {
    id: "3",
    name: "Nkwobi",
    description: "Spiced grilled meat skewers",
    image:
      "https://res.cloudinary.com/dyagqvjxl/image/upload/v1745330600/Goat-Head_ctf6yj.jpg",
    category: "Appetizer",
    servings: 0,
  },
  {
    id: "4",
    name: "ISI EWU",
    description: "Traditional West African rice dish with tomatoes and spices",
    image:
      "https://res.cloudinary.com/dyagqvjxl/image/upload/v1746442734/Greenpearl/isiewu_yujeta.jpg",
    category: "Appetizer",
    servings: 0,
  },
  {
    id: "5",
    name: "Ogbono Soup",
    description: "Smooth yam paste served with melon seed soup",
    image:
      "https://res.cloudinary.com/dyagqvjxl/image/upload/v1746443075/Greenpearl/39_file_czwkzr.webp",
    category: "Main Course",
    servings: 0,
  },
  {
    id: "6",
    name: "Vegetable Soup",
    description: "Spiced grilled meat skewers",
    image:
      "https://res.cloudinary.com/dyagqvjxl/image/upload/v1746436161/Nigeria-vegetable-Soup-Deychop_lqyrcy.jpg",
    category: "Main Course",
    servings: 0,
  },
];

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");

  //FILTER FOR THE CATEGORY
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToQuote = (addedItem) => {
    if (
      selectedItems.find(
        (selected) =>
          selected.id === addedItem.id && selected.unit === addedItem.unit
      )
    ) {
      toast({
        title: "Already added",
        description:
          "This item with the same unit is already in your quote request",
      });
      return;
    }
    setSelectedItems([...selectedItems, addedItem]);
    toast({
      title: "Added to quote",
      description: (
        <div className="flex flex-col gap-2">
          <p>
            {addedItem.name} ({addedItem.quantity} {addedItem.unit}) has been
            added to your quote request.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsQuoteModalOpen(true)}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Edit items & request quote
          </Button>
        </div>
      ),
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Navbar at the top */}
      <Navbar openQuoteModal={() => setIsQuoteModalOpen(true)} />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 rounded-full px-3 py-1 text-sm font-medium mb-4">
            <ChefHat className="inline-block w-4 h-4 mr-2" />
            African Cuisine
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Authentic African Dishes
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            Select your desired dishes and get a customized quote for your event
            or home.
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          {["All", "Main Course", "Appetizer", "Protein"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onAddToQuote={handleAddToQuote}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>

      {selectedItems.length > 0 && (
        <div className="fixed bottom-8 right-8 animate-slide-up z-50">
          <Button
            onClick={() => setIsQuoteModalOpen(true)}
            size="lg"
            className="shadow-lg"
          >
            <MessageSquare className="mr-2" />
            Request Quote ({selectedItems.length})
          </Button>
        </div>
      )}

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedItems={selectedItems}
        onClearItems={() => setSelectedItems([])}
      />
    </div>
  );
};

export default Menu;
