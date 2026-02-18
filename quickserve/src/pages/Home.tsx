import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Failed to load products.</p>;

  return (
    <div>
      <h1>Product Catalog</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {data.map((product: any) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
            <h2>{product.name}</h2>
            <p>Price: ₦{product.price}</p>
            <p>{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}