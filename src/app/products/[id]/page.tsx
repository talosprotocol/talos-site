import products from "@/content/products.json";
import ProductDetailClient from "./ProductDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  return <ProductDetailClient product={product} />;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
