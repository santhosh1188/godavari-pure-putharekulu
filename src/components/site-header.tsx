import Link from "next/link";
import { Package, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Package className="h-8 w-8 text-amber-600" />
          <div>
            <p className="text-xl font-bold tracking-tight">Godavari Pure</p>
            <p className="text-xs text-muted-foreground -mt-1">Putharekulu</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Cart (0)
        </Button>
      </div>
    </header>
  );
}