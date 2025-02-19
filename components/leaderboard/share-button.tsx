"use client";

import { Button } from "@/components/ui/button";

export default function ShareButton() {

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "you gotta see this",
                    text: "you gotta see this",
                    url: "https://wouldyoupay.vercel.app/",
                });
            } catch (error) {
                console.error("Canceled sharing:", error);
            }
        };
    }

    return (
        <div>
            <Button variant={'outline'} onClick={handleShare} className="flex items-center gap-2 text-3xl px-9 py-8">
                Share
            </Button>
        </div>
    );
}
