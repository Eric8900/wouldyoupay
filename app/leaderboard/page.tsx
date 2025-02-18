'use client';

import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-grow w-full h-full flex flex-col items-center justify-center">
                <h1 className="text-5xl">
                    Coming Soon...
                </h1>
            </div>
        </main>
    )
}