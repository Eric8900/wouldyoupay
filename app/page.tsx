'use client';

import Navbar from "@/components/navbar";
import { SaasShowcase } from "@/components/showcase"
import { SurveySection } from "@/components/survey-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Navbar/>
        <SaasShowcase />
        <SurveySection />
      </div>
    </main>
  )
}

