import { useState } from "react";
import { Calendar, Mail, MessageSquare, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useForm, ValidationError } from "@formspree/react";

const QuoteModal = ({ isOpen, onClose, selectedItems, onClearItems }) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   date: "",
  //   guests: "",
  //   message: "",
  // });

  const [formData, setFormData] = useForm("mwpoojdg");

  // Track editing quantities (by item id and unit)
  const [editingQuantities, setEditingQuantities] = useState({});

  const handleQuantityChange = (itemIdx, value) => {
    const num = parseInt(value, 10);
    if (num > 0) {
      setEditingQuantities({
        ...editingQuantities,
        [itemIdx]: num,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare quote data with latest quantities
    const itemsWithUpdatedQuantities = selectedItems.map((item, idx) => ({
      ...item,
      quantity: editingQuantities[idx] || item.quantity,
    }));

    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you with a quote soon.",
    });
    onClearItems();
    onClose();
    // Here you could integrate: send itemsWithUpdatedQuantities to backend or email
  };

  const handleReset = () => {
    onClearItems();
    toast({
      title: "Quote Reset",
      description: "Your quote has been cleared.",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 animate-fade-in z-50">
      <div className="bg-white dark:bg-neutral-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Request a Quote</h2>
            <Button
              variant="outline"
              size="icon"
              onClick={handleReset}
              className="shrink-0"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Selected Items:</h3>
            <ul className="space-y-4">
              {selectedItems.map((item, idx) => (
                <li
                  key={item.id + item.unit}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {item.name}
                    </span>
                    <span className="text-xs ml-2 rounded bg-neutral-200 px-2 py-0.5">
                      {item.unit.charAt(0).toUpperCase() + item.unit.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      name="servings"
                      type="number"
                      min="1"
                      value={editingQuantities[idx] || item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(idx, e.target.value)
                      }
                      className="w-20"
                    />
                    <span className="text-sm">{item.unit}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                name="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                name="email"
                required
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Event Date
                </label>
                <Input
                  name="date"
                  required
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Total Number of Guests
                </label>
                <Input
                  name="guest"
                  required
                  type="number"
                  placeholder="50"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Additional Details
              </label>
              <Textarea
                name="message"
                placeholder="Tell us more about your order..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button variant="outline" type="button" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Quote Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
