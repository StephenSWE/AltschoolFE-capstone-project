payWithPaystack(email, total, (reference) => {
  clearCart();
  navigate(`/confirmation?ref=${reference}`);
});