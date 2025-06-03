"use client";
import { Button } from "@/components/ui/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/ui/card";
import { useCartStore } from "@/store/cart-store";
import { clear } from "console";
import toast from "react-hot-toast";

export default function Checkoutpage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (total === 0 || items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-xl font-semibold">
        🛒 Your cart is empty.
      </div>
    );
  }

  const handleAdd = (item: any) => {
    addItem({ ...item, quantity: 1 });
    toast.success(`${item.name} added to cart`);
  };

  const handleRemove = (item: any) => {
    removeItem(item.id);
    toast.error(`${item.name} removed from cart`);
  };

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6 space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">🧾 Checkout</h1>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl font-semibold">
            Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="space-y-6">
            {items.map((item, key) => (
              <li
                key={key}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-4 gap-4"
              >
                <div>
                  <p className="font-medium text-base sm:text-lg">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Price: ${(item.price / 100).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleRemove(item)}
                  >
                    −
                  </Button>
                  <span className="font-semibold text-base sm:text-lg">
                    {item.quantity}
                  </span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleAdd(item)}
                  >
                    +
                  </Button>
                </div>
                <div className="text-right font-medium text-base sm:text-lg">
                  ${((item.price * item.quantity) / 100).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center border-t pt-4 text-lg sm:text-xl font-bold">
            <span>Total:</span>
            <span>${(total / 100).toFixed(2)}</span>
          </div>

          <form className="pt-4">
            <Button variant="default" className="w-full text-base sm:text-lg">
              Proceed to Payment
            </Button>
            <Button
              onClick={() => clearCart()}
              variant="default"
              className="w-full sm:w-1/2 text-base sm:text-lg py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition duration-300 ease-in-out mt-5 ml-25"
            >
              Clear your Cart
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
