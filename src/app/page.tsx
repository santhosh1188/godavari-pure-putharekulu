import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Clock, Heart, Star } from "lucide-react";

const products = [
  {
    name: "Classic Sugar Putharekulu",
    price: "₹180",
    weight: "250g",
    rating: 4.9,
    image: "/images/products/sugar.jpg",
  },
  {
    name: "Bellam (Jaggery) Special",
    price: "₹220",
    weight: "250g",
    rating: 5.0,
    image: "/images/products/bellam.jpg",
  },
  {
    name: "Dry Fruit Delight",
    price: "₹380",
    weight: "250g",
    rating: 4.8,
    image: "/images/products/dryfruit.jpg",
  },
  {
    name: "Combo Pack (1kg)",
    price: "₹799",
    weight: "1kg",
    rating: 5.0,
    image: "/images/products/combo.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6">
            Godavari Pure
            <br />
            <span className="text-4xl md:text-6xl text-orange-700">Putharekulu</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto">
            Paper-thin sweetness from the banks of Godavari • Handmade in Atreyapuram since generations
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-amber-600 text-amber-600">
              <Heart className="mr-2 h-5 w-5" /> Gift a Sweet Memory
            </Button>
          </div>

          <div className="flex justify-center gap-8 mt-12 text-amber-900">
            <div className="text-center">
              <Package className="h-10 w-10 mx-auto mb-2" />
              <p className="font-semibold">100% Handmade</p>
            </div>
            <div className="text-center">
              <Clock className="h-10 w-10 mx-auto mb-2" />
              <p className="font-semibold">12 Days Fresh</p>
            </div>
            <div className="text-center">
              <Star className="h-10 w-10 mx-auto mb-2" />
              <p className="font-semibold">4.9/5 Rated</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Best Sellers</h2>
            <p className="text-xl text-gray-600 mt-4">Loved by thousands across India & abroad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.name} className="group hover:shadow-2xl transition-all duration-300 border-amber-100">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                    <div className="aspect-square relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Package className="h-32 w-32 text-amber-200" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.weight}</p>
                    <div className="flex items-center justify-center gap-1 my-2">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <p className="text-2xl font-bold text-amber-600 my-4">{product.price}</p>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}