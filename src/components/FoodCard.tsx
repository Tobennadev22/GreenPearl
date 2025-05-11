
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FoodItem {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  servings: number;
}

interface FoodCardProps {
  item: FoodItem;
  onAddToQuote: () => void;
  className?: string;
}

const FoodCard = ({ item, onAddToQuote, className }: FoodCardProps) => {
  return (
    <div className={cn(
      'bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300',
      className
    )}>
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
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            Serves {item.servings} people
          </span>
          <Button onClick={onAddToQuote} variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add to Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
