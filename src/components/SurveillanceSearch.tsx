"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const surveillanceCategories = [
  "CCTV Cameras",
  "Voice Logger",
  "HPC"
];

export function SurveillanceSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set('query', query);
    if (category) params.set('category', category);
    
    const url = `/solutions/surveillance-systems${params.toString() ? `?${params.toString()}` : ''}`;
    router.push(url);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    const params = new URLSearchParams();
    if (query) params.set('query', query);
    if (value) params.set('category', value);
    
    const url = `/solutions/surveillance-systems${params.toString() ? `?${params.toString()}` : ''}`;
    router.push(url);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1">
        <Input
          placeholder="Search surveillance products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="w-full"
        />
      </div>
      <div className="w-full sm:w-48">
        <Select value={category} onValueChange={handleCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Categories</SelectItem>
            {surveillanceCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleSearch} className="flex items-center gap-2">
        <Filter className="h-4 w-4" />
        Search
      </Button>
    </div>
  );
} 