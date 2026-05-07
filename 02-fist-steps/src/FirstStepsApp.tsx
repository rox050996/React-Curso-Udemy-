import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemsInCart {
  name: string;
  quantity?: number;
}

const itemsInCart: ItemsInCart[] = [
  { name: "Nintendo Switch 2", quantity: 10 },
  { name: "Pro Controller", quantity: 12 },
  { name: "Joy-Con", quantity: 20 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsInCart.map((item) => (
        <ItemCounter
          key={item.name}
          name={item.name}
          quantity={item.quantity}
        />
      ))}
    </>
  );
}
