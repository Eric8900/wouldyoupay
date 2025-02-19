'use client';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white p-4 flex justify-between space-x-4"
        >
            <h1 className="text-5xl">
                <Link href="/">
                    💸
                </Link>
            </h1>
            <div className="flex justify-center items-center gap-4">
                <Link href="/leaderboard">
                    <Button
                        className="px-4 py-2 text-sm sm:text-lg font-medium"
                        variant={'outline'}
                    >
                        Leaderboard 🏆
                    </Button>
                </Link>
                <Button
                    onClick={async () => {
                        await navigator.share({
                            title: "you gotta see this",
                            text: "how much would you pay for these products?",
                            url: "https://wouldyoupay.vercel.app/",
                        });
                    }}
                    className="px-4 py-2 text-sm sm:text-lg font-medium"
                    variant={'outline'}
                >
                    Share 🚀
                </Button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
