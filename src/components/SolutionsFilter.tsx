"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

interface SolutionsFilterProps {
  query: string;
  selectedCategory: string;
  mainCategories: string[];
  subCategories: string[];
  allCategories: string[];
  themeColor: string;
}

export function SolutionsFilter({
  query,
  selectedCategory,
  mainCategories,
  subCategories,
  allCategories,
  themeColor,
}: SolutionsFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  // Controlled state for search input
  const [searchValue, setSearchValue] = useState(query || "");
  useEffect(() => {
    setSearchValue(query || "");
  }, [query]);

  // Handler for form submit
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    const q = searchValue || "";
    const cat = categoryRef.current?.value || "all";
    if (q) {
      params.set("query", q);
    } else {
      params.delete("query");
    }
    if (cat && cat !== "all") {
      params.set("category", cat);
    } else {
      params.delete("category");
    }
    router.push(`/solutions?${params.toString()}`);
  }

  return (
    <div className="w-full px-2 md:px-6">
      <div className="bg-white/90 rounded-2xl shadow-xl border border-cyan-200 p-6 mb-8 w-full">
        <form
          ref={formRef}
          className="flex flex-col gap-4 md:flex-row md:items-end md:gap-6"
          action="/solutions"
          onSubmit={handleSubmit}
        >
          <div className="flex-1">
            <label htmlFor="searchQuery" className="block text-sm font-medium text-foreground mb-1.5">Search Products</label>
            <Input
              ref={inputRef}
              type="text"
              id="searchQuery"
              name="query"
              placeholder="Search products..."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="category" className="block text-sm font-medium text-foreground mb-1.5">Category</label>
            <Select
              name="category"
              defaultValue={selectedCategory}
              onValueChange={value => {
                // Categories with dedicated pages
                if (value === "Fire & Emergency System") {
                  window.location.href = "/solutions/fire-safety";
                  return;
                }
                if (value === "Access Control") {
                  window.location.href = "/solutions/access-control/";
                  return;
                }
                if (value === "Office & Home Automations") {
                  window.location.href = "/solutions/office-home-automations/";
                  return;
                }
                if (value === "Intruder Detection System") {
                  window.location.href = "/solutions/intruder-detection-system";
                  return;
                }
                if (value === "Command Control Room") {
                  window.location.href = "/solutions/command-control-room";
                  return;
                }
                if (value === "Surveillance Systems") {
                  window.location.href = "/solutions/surveillance-systems/";
                  return;
                }
                // For all other categories, update query params on /solutions
                const params = new URLSearchParams(searchParams.toString());
                if (value && value !== "all") {
                  params.set("category", value);
                } else {
                  params.delete("category");
                }
                // Use the controlled search value
                const q = searchValue || "";
                if (q) {
                  params.set("query", q);
                } else {
                  params.delete("query");
                }
                router.push(`/solutions?${params.toString()}`);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {mainCategories.map(mainCat => (
                  <SelectItem key={mainCat} value={mainCat}>{mainCat}</SelectItem>
                ))}
                {subCategories.map(subCat => (
                  <SelectItem key={subCat} value={subCat}>{subCat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-none md:self-end">
            <Button type="submit" className={`w-full md:w-auto h-11 text-base text-white mt-2 md:mt-0 ${themeColor} shadow-md hover:scale-105 transition-transform`}>
              <Filter className="mr-2 h-5 w-5" /> Apply Filters
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 