'use client';

import ShareButton from "@/components/leaderboard/share-button";
import Navbar from "@/components/navbar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-grow w-full h-full flex flex-col items-center justify-center mt-9">
                <div className="flex flex-col items-center justify-center gap-3 text-lg sm:text-xl">
                    <h1 className="font-bold">not enough data for a leaderboard…yet</h1>
                    <p>share this with all your friends!</p>
                    <div className="flex"><span className="text-6xl">👉</span><ShareButton /><span className="text-6xl">👈</span></div>
                </div>
                <Skeleton className="h-24 w-80 sm:w-[60%] my-3 bg-neutral-300" />
                <Skeleton className="h-24 w-80 sm:w-[60%] my-3 bg-neutral-300" />
                <Skeleton className="h-24 w-80 sm:w-[60%] my-3 bg-neutral-300" />
                <Skeleton className="h-24 w-80 sm:w-[60%] my-3 bg-neutral-300" />
                <Skeleton className="h-24 w-80 sm:w-[60%] my-3 bg-neutral-300" />
                <Skeleton className="h-24 w-80 sm:w-[60%] my-3 bg-neutral-300" />
                <Skeleton className="h-24 w-80 sm:w-[60%] my-3 bg-neutral-300" />
                <Skeleton className="h-24 w-80 sm:w-[60%] my-3 bg-neutral-300" />
                <Skeleton className="h-24 w-80 sm:w-[60%] my-3 bg-neutral-300" />
                <Skeleton className="h-24 w-80 sm:w-[60%] my-3 bg-neutral-300" />
            </div>
        </main>
    )
}