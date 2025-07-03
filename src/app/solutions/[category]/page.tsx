import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products, solutionCategoriesData } from "@/lib/data";

interface SolutionsCategoryPageProps {
  params: { category: string };
}

function slugToName(slug: string) {
  // Find the category by slug
  const cat = solutionCategoriesData.find(cat => cat.slug === slug);
  return cat ? cat.name : slug;
}

export async function generateMetadata({ params }: SolutionsCategoryPageProps): Promise<Metadata> {
  const category = await params.category;
  const categoryName = slugToName(category);
  const categoryObj = solutionCategoriesData.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
  if (!categoryObj) {
    return { title: "Category Not Found" };
  }
  return {
    title: `${categoryObj.name} | Solutions | GenX Security`,
    description: categoryObj.description,
  };
}

export async function generateStaticParams() {
  // Return all valid category slugs for static export
  return [
    { category: 'access-control' },
    { category: 'fire-safety' },
    { category: 'surveillance-systems' },
    { category: 'intruder-detection-system' },
    { category: 'office-home-automations' },
    { category: 'command-control-room' },
    { category: 'product' }
    // Add more if you have more categories
  ];
}

export default async function SolutionsCategoryPage({ params }: SolutionsCategoryPageProps) {
  const category = await params.category;
  const categoryObj = solutionCategoriesData.find(cat => cat.slug === category);

  if (!categoryObj) {
    notFound();
  }

  // Filter products for this specific category
  const categoryProducts = products.filter(
    (product) => product.category === categoryObj.name
  );

  // Choose theme color (blue for Command Control Room subcategories, cyan for Office Automation, fallback to gray)
  let theme = 'blue';
  if ([
    'Wifi Solutions',
    'Conference Room Solutions',
    'PA System'
  ].includes(categoryObj.name)) {
    theme = 'cyan';
  }

  return (
    <div className="relative min-h-screen">
      <div className={`fixed inset-0 bg-gradient-to-b from-[${theme === 'blue' ? '#578FCA' : '#E0F7FA'}] to-[#F2F2F2] z-0`} />
      <div className="relative z-10">
        {/* Hero Banner Section */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-b from-${theme}-600/20 to-${theme}-400/10`} />
          <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-${theme}-700 tracking-tight mb-4`}>
              {categoryObj.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              {categoryObj.description}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12">
          <Button variant="outline" asChild className={`mb-8 group hover:bg-${theme}-50 hover:border-${theme}-400`}>
            <Link href="/solutions">
              <ArrowLeft className={`mr-2 h-4 w-4 group-hover:text-${theme}-700 transition-colors`} />
              <span className={`group-hover:text-${theme}-700 transition-colors`}>Back to Solutions</span>
            </Link>
          </Button>

          {/* Products Section */}
          {categoryProducts.length > 0 ? (
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
                Available {categoryObj.name} Products
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
              <Button variant="link" asChild className={`text-${theme}-700`}>
                <Link href="/solutions">Back to Solutions</Link>
              </Button>
            </div>
          )}

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className={`bg-${theme}-50 rounded-2xl p-8 border border-${theme}-100`}>
              <h3 className={`text-2xl font-bold text-${theme}-700 mb-4`}>
                Need More Information?
              </h3>
              <p className="text-gray-700 mb-6">
                Our team is ready to help you find the perfect {categoryObj.name.toLowerCase()} solution for your needs.
              </p>
              <Button size="lg" asChild className={`bg-${theme}-700 hover:bg-${theme}-800 text-white`}>
                <Link href="/contact">Request More Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 