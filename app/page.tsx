'use client';

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import { SaasShowcase } from "@/components/showcase";
import { SurveySection } from "@/components/survey-section";
import { getRandomRow, incrementViewCount, ProductData } from "@/lib/actions";
import LoadingSkeleton from "@/components/loading-skeleton";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const [saasProduct, setSaasProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [excludedIds, setExcludedIds] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    const storedExcludedIds = localStorage.getItem("excludedIds");
    if (storedExcludedIds) {
      setExcludedIds(JSON.parse(storedExcludedIds));
    }
  }, []);

  const fetchProduct = async () => {
    setLoading(true);
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

      await incrementViewCount(row.id);
    }
    setLoading(false);
    console.log("fetched product");
  };

  useEffect(() => {
    if (!hasFetched.current) {
      fetchProduct();
      hasFetched.current = true;
    }
  }, [excludedIds]);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        {loading ? (
          <LoadingSkeleton />
        ) : saasProduct ? (
          <>
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-[100]">
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: "-10vh", opacity: 1 }}
                    animate={{ y: "100vh", opacity: 0 }}
                    transition={{ duration: 1, delay: Math.random() * 0.5, ease: "linear" }}
                    className="absolute text-6xl"
                    style={{ left: `${Math.random() * 100}%` }}
                  >
                    💰
                  </motion.div>
                ))}
              </div>
            )}
            <SaasShowcase saasProduct={saasProduct} />
            <SurveySection saasProduct={saasProduct} fetchProduct={fetchProduct} excludedIds={excludedIds} setShowConfetti={setShowConfetti} />
            <Toaster/>
          </>
        ) : null}
      </div>
    </main>
  );
}
