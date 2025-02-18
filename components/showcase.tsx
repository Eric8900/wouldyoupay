'use client';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import Image from "next/image";
import { ProductData } from "@/lib/actions";

interface SaasShowcaseProps {
  saasProduct: ProductData;
}

const ResponsiveIframe = ({ link }: { link: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full text-lg font-semibold py-8">
            view website
          </Button>
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className="w-full max-w-6xl h-[90%] bg-white dark:bg-black p-0 m-0 flex items-center justify-center">
          <iframe
            src={link}
            className="w-full h-full sm:rounded-lg"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export function SaasShowcase({ saasProduct }: SaasShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-white shadow-lg rounded-lg p-6 w-full mx-auto flex flex-col gap-9"
    >
      <div className="w-full mb-4 lg:mb-0 max-h-[280px] sm:max-h-[350px] lg:max-h-[700px] overflow-y-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src={saasProduct.imagekey}
              alt="logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <h2 className="text-3xl font-bold">{saasProduct.name}</h2>
          </div>
          <Button asChild className="rounded-full">
            <a href={saasProduct.link} target="_blank" rel="noopener noreferrer">
              Visit
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <h3 className="text-xl my-4">{saasProduct.tagline}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {saasProduct.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-gray-700 text-sm mt-4">{saasProduct.description}</p>
      </div>
      <ResponsiveIframe link={saasProduct.link} />
    </motion.div>
  );
}