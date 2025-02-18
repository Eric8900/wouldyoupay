'use client';
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from 'framer-motion';

const LoadingSkeleton = () => {
    return (
        <>
            {/* Header with logo and visit button */}
            <div className="relative bg-white shadow-lg rounded-lg p-6 w-full mx-auto flex flex-col gap-9">
                <div className="w-full mb-4 lg:mb-0 max-h-[400px] lg:max-h-[700px] overflow-y-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-12 w-12 rounded-lg bg-sky-600" /> {/* Logo */}
                            <Skeleton className="h-8 w-32 bg-neutral-300" /> {/* Company name */}
                        </div>
                        <Skeleton className="h-10 w-24 rounded-full bg-neutral-500" /> {/* Visit button */}
                    </div>
                    <Skeleton className="h-6 w-80 sm:w-96 my-3 bg-neutral-300" /> {/* description */}
                    <div className="flex gap-2 mb-3">
                        <Skeleton className="h-5 w-24 rounded-full bg-neutral-300" />
                        <Skeleton className="h-5 w-32 rounded-full bg-neutral-300" />
                        <Skeleton className="h-5 w-28 rounded-full bg-neutral-300" />
                    </div>
                    <Skeleton className="h-10 w-full bg-neutral-300" />
                </div>
                <Skeleton className="h-14 w-full rounded-lg mt-4 bg-neutral-500" />
            </div>

            {/* Bottom split section */}
            <div className="flex-grow h-full flex flex-col justify-end w-full rounded-lg">
                <motion.div
                    key="step1"
                    className="flex-grow grid grid-cols-2 w-full h-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.1 }}
                >
                    <div
                        className="cursor-pointer flex justify-center items-center text-white text-4xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all ease-in-out w-full"
                    >
                        i&apos;d pay
                    </div>
                    <div
                        className="cursor-pointer flex justify-center items-center text-4xl w-full border-gray-300 border-2 hover:bg-gray-300 transition-all ease-in-out"
                    >
                        nope
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default LoadingSkeleton;