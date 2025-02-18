'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { SaasShowcase } from "@/components/showcase";
import { SurveySection } from "@/components/survey-section";
import { getRandomRow, incrementViewCount, ProductData } from "@/lib/actions";
import LoadingSkeleton from "@/components/loading-skeleton";

export default function Home() {
  const [saasProduct, setSaasProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);

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
      excludedIds.push(row.id);
      localStorage.setItem('excludedIds', JSON.stringify(excludedIds));
      await incrementViewCount(row.id);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        {loading ? (
          <LoadingSkeleton />
        ) : saasProduct ? (
          <>
            <SaasShowcase saasProduct={saasProduct} />
            <SurveySection saasProduct={saasProduct} fetchProduct={fetchProduct} />
          </>
        ) : null}
      </div>
    </main>
  );
}
