export const payWithPaystack = (
  email: string,
  amount: number,
  onSuccess: (ref: string) => void
) => {
  const handler = (window as any).PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount: amount * 100,
    currency: "NGN",
    callback: function (response: any) {
      onSuccess(response.reference);
    },
    onClose: function () {
      alert("Payment cancelled");
    },
  });

  handler.openIframe();
};