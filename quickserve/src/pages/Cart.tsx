const subtotal = cart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);

const vat = subtotal * 0.075;
const total = subtotal + vat;
