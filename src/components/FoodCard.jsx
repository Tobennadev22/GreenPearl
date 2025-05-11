import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Footer } from "react-day-picker";

const FoodCard = ({ item, onAddToQuote, className }) => {
  const [unit, setUnit] = useState("servings");
  const [quantity, setQuantity] = useState(item.servings);

  return (
    <div
      className={cn(
        "bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {item.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          {item.description}
        </p>
        <div className="flex items-center gap-2 mb-3">
          <select
            value={unit}
            onChange={(e) => {
              setUnit(e.target.value);
              setQuantity(e.target.value === "servings" ? item.servings : 1);
            }}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="servings">Servings</option>
            <option value="liters">Liters</option>
          </select>
          <input
            type="number"
            min="1"
            className="border rounded px-2 py-1 w-20 text-sm"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <span className="text-sm">{unit}</span>
        </div>
        <div className="flex items-center justify-end">
          <Button
            onClick={() =>
              onAddToQuote({
                ...item,
                unit,
                quantity,
              })
            }
            variant="outline"
            size="sm"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add to Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
