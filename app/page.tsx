'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { SaasShowcase } from "@/components/showcase";
import { SurveySection } from "@/components/survey-section";
import { getRandomRow, incrementViewCount, ProductData } from "@/lib/actions";

export default function Home() {
  const [saasProduct, setSaasProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const storedExcludedIds = localStorage.getItem('excludedIds');
      const excludedIds: number[] = storedExcludedIds ? JSON.parse(storedExcludedIds) : [];
      const result = await getRandomRow(excludedIds);
      if (result) {
        const { row } = result;
        setSaasProduct({
          id: row.id,
          name: row.name,
          imagekey: `https://glfrhzonunwevxkhjgqg.supabase.co/storage/v1/object/public/websites/images/${row.imagekey}/logoicon.png`,
          tagline: row.tagline,
          description: row.description,
          link: row.link,
          tags: row.tags,
        });
      }
      if (result) {
        const { row } = result;
        const storedExcludedIds = localStorage.getItem('excludedIds');
        const excludedIds: number[] = storedExcludedIds ? JSON.parse(storedExcludedIds) : [];
        excludedIds.push(row.id);
        localStorage.setItem('excludedIds', JSON.stringify(excludedIds));
        await incrementViewCount(row.id);
      }
      setLoading(false);
    };

    fetchProduct();
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        {loading || !saasProduct ? (
          <div className="flex justify-center items-center w-full h-[400px]">
            <p className="text-lg font-semibold text-gray-500">Loading...</p>
          </div>
        ) : (
          <SaasShowcase saasProduct={saasProduct} />
        )}
        <SurveySection />
      </div>
    </main>
  );
}