"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { submitSurvey } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";

interface SurveySectionProps {
    saasProduct: {
        id: number;
        name: string;
        imagekey: string;
        tagline: string;
        description: string;
        link: string;
        tags: string[];
    };
    fetchProduct: () => void;
    setShowConfetti: (show: boolean) => void;
    excludedIds: number[];
}

export function SurveySection({ saasProduct, fetchProduct, excludedIds, setShowConfetti }: SurveySectionProps) {
    const [price, setPrice] = useState(NaN);
    const [submitted, setSubmitted] = useState(false);
    const [step, setStep] = useState(1);
    const toast = useToast();
    

    const handleSubmit = async () => {
        if (price >= 10000) {
            toast.toast({
                title: "let's be real, you aren't paying that much"
            });
            return;
        }
        setShowConfetti(true);
        await submitSurvey(isNaN(price) ? 0.0 : price, saasProduct.id);
        setPrice(NaN);
        setSubmitted(true);
        excludedIds.push(saasProduct.id);
        localStorage.setItem("excludedIds", JSON.stringify(excludedIds));
        setTimeout(() => {
            setShowConfetti(false);
        }, 2500);
    };

    return (
        <div className="relative flex-grow h-full flex flex-col justify-end w-full rounded-lg">
            

            {submitted ? (
                <motion.div
                    className="flex-grow flex flex-col justify-center w-full text-white text-center text-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                >
                    <div
                        onClick={() => {
                            fetchProduct();
                            setSubmitted(false);
                            setStep(1);
                        }}
                        className="flex-grow flex justify-center items-center text-3xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all ease-in-out cursor-pointer"
                    >
                        next product
                    </div>
                </motion.div>
            ) : (
                <AnimatePresence mode="wait">
                    {step === 1 ? (
                        <motion.div
                            key="step1"
                            className="flex-grow grid grid-cols-2 w-full h-full"
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.1 }}
                        >
                            <div
                                onClick={() => setStep(2)}
                                className="cursor-pointer flex justify-center items-center text-white text-4xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all ease-in-out w-full"
                            >
                                i&apos;d pay
                            </div>
                            <div
                                onClick={() => handleSubmit()}
                                className="cursor-pointer flex justify-center items-center text-4xl w-full border-gray-300 border-2 hover:bg-gray-300 transition-all ease-in-out"
                            >
                                nope
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="step2"
                            className="flex-grow flex flex-col items-center bg-primary w-full h-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.1 }}
                        >
                            <div className="bg-primary text-white p-4 rounded-none md:rounded-lg text-center text-2xl md:text-3xl shadow-lg w-full">
                                how much per month?
                            </div>
                            <div className="relative w-full text-3xl">
                                <Input
                                    id="price"
                                    min={0}
                                    max={10000}
                                    value={isNaN(price) ? "" : price}
                                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                                    className="peer pe-24 ps-12 text-center border-4 border-primary rounded-none"
                                    placeholder="0.00"
                                    type="number"
                                />
                                <span className="absolute inset-y-0 start-0 flex items-center ps-4 font-bold text-gray-700">
                                    $
                                </span>
                                <span className="absolute inset-y-0 end-0 flex items-center pe-4 font-bold text-gray-700">
                                    USD
                                </span>
                            </div>
                            <div className="flex-grow h-full flex justify-center w-full">
                                <div
                                    onClick={() => {
                                        if (price) {
                                            handleSubmit();
                                        }
                                    }}
                                    className={`text-3xl w-full rounded-none flex justify-center text-white items-center ${!price
                                            ? "bg-neutral-800 cursor-not-allowed"
                                            : "bg-primary text-primary-foreground hover:bg-primary/90 transition-all ease-in-out cursor-pointer"
                                        }`}
                                >
                                    enter
                                </div>
                                <div
                                    onClick={() => setStep(1)}
                                    className="cursor-pointer text-3xl w-full flex justify-center items-center rounded-none bg-white hover:bg-gray-300 transition-all ease-in-out"
                                >
                                    nevermind
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
}
