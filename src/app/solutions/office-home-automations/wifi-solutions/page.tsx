import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

const category = {
  title: "WiFi Solutions",
  description:
    "High-performance wireless networking solutions for seamless connectivity in offices and homes. From enterprise-grade routers to mesh networks, we provide reliable WiFi infrastructure.",
  categoryFilter: "Wifi solutions",
};

export const metadata: Metadata = {
  title: `${category.title} | Office & Home Automations | GenX Security`,
  description: category.description,
};

export default function WifiSolutionsPage() {
  const categoryProducts = products.filter(
    (product) => product.category === category.categoryFilter
  );

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-b from-[#E0F7FA] to-[#F2F2F2] z-0" />
      <div className="relative z-10">
        {/* Hero Banner Section */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/20 to-cyan-400/10" />
          <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-600 tracking-tight mb-4">
              {category.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12">
          <Button variant="outline" asChild className="mb-8 group hover:bg-cyan-50 hover:border-cyan-400">
            <Link href="/solutions/office-home-automations">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-cyan-600 transition-colors" />
              <span className="group-hover:text-cyan-600 transition-colors">Back to Office & Home Automations</span>
            </Link>
          </Button>

          {/* Products Section */}
          {categoryProducts.length > 0 ? (
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
                Available {category.title} Products
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {categoryProducts.map((product) => {
                  const { icon, ...productFieldsForCard } = product;
                  return (
                    <div key={productFieldsForCard.id} className="w-full max-w-xs">
                      <ProductCard product={productFieldsForCard} isVisible={true} />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg shadow border">
              <p className="text-xl text-muted-foreground mb-2">No products found in this category.</p>
              <p className="text-sm text-muted-foreground mb-4">Please check back later for new products.</p>
              <Button variant="link" asChild className="text-cyan-600">
                <Link href="/solutions/office-home-automations">Back to Office & Home Automations</Link>
              </Button>
            </div>
          )}

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-cyan-50 rounded-2xl p-8 border border-cyan-100">
              <h3 className="text-2xl font-bold text-cyan-600 mb-4">
                Need More Information?
              </h3>
              <p className="text-gray-700 mb-6">
                Our team is ready to help you find the perfect {category.title.toLowerCase()} solution for your needs.
              </p>
              <Button size="lg" asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Link href="/contact">Request More Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 