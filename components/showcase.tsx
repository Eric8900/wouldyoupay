"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
import { useState } from "react"
import Image from "next/image"

const saasProduct = {
    name: "SuperSaaS",
    logo: "https://ph-files.imgix.net/62db6534-92fb-48f2-9812-04f0244f8b68.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&frame=1&dpr=3",
    images: [
        "https://ph-files.imgix.net/d1f428d5-ca9b-45aa-8d96-f559800e715c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=367&h=220&fit=max&frame=1&dpr=3",
        "https://ph-files.imgix.net/b93d200a-5728-4c17-a8a7-6db1ae209b44.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=367&h=220&fit=max&frame=1&dpr=3",
        "https://ph-files.imgix.net/5d2d3698-31f8-4825-b787-c402aa967065.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=367&h=220&fit=max&frame=1&dpr=3",
    ],
    tagline: "The ultimate productivity tool",
    description:
        "SuperSaaS is the ultimate productivity tool designed to streamline your workflow and boost efficiency. With its intuitive interface and powerful features, SuperSaaS helps teams collaborate seamlessly, manage projects effortlessly, and automate repetitive tasks. SuperSaaS is the ultimate productivity tool designed to streamline your workflow and boost efficiency. With its intuitive interface and powerful features, SuperSaaS helps teams collaborate seamlessly, manage projects effortlessly, and automate repetitive tasks. SuperSaaS is the ultimate productivity tool designed to streamline your workflow and boost efficiency. With its intuitive interface and powerful features, SuperSaaS helps teams collaborate seamlessly, manage projects effortlessly, and automate repetitive tasks. SuperSaaS is the ultimate productivity tool designed to streamline your workflow and boost efficiency. With its intuitive interface and powerful features, SuperSaaS helps teams collaborate seamlessly, manage projects effortlessly, and automate repetitive tasks. SuperSaaS is the ultimate productivity tool designed to streamline your workflow and boost efficiency. With its intuitive interface and powerful features, SuperSaaS helps teams collaborate seamlessly, manage projects effortlessly, and automate repetitive tasks. SuperSaaS is the ultimate productivity tool designed to streamline your workflow and boost efficiency. With its intuitive interface and powerful features, SuperSaaS helps teams collaborate seamlessly, manage projects effortlessly, and automate repetitive tasks.",
    website: "https://www.supersaas.com",
    tags: ["Productivity", "Developer Tools", "Artificial Intelligence"],
}

const ResponsiveIframe = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center w-full">
            {/* Full Width Trigger Button */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button className="w-full text-lg font-semibold py-8">
                        view website
                    </Button>
                </DialogTrigger>

                {/* Fullscreen Modal with Iframe */}
                <DialogTitle>
                </DialogTitle>
                <DialogContent className="w-full max-w-6xl h-[90%] bg-white dark:bg-black p-0 m-0 flex items-center justify-center">
                    <iframe
                        src="https://supersaas.com"
                        className="w-full h-full sm:rounded-lg"
                        allowFullScreen
                    ></iframe>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export function SaasShowcase() {

    return (
        <div className="relative bg-white shadow-lg rounded-lg p-6 w-full mx-auto flex flex-col gap-9">
            <div className="w-full mb-4 lg:mb-0 max-h-[400px] lg:max-h-[700px] overflow-y-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Image src={saasProduct.logo} alt="product logo" width={48} height={48} className="w-full h-full rounded-lg" />
                        <h2 className="text-3xl font-bold">{saasProduct.name}</h2>
                    </div>
                    <Button asChild className="rounded-full mt-4">
                        <a href={saasProduct.website} target="_blank" rel="noopener noreferrer">
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
            <ResponsiveIframe />
            {/* <div className="relative flex items-center justify-center w-full"> */}
            {/* <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 z-10"
                    onClick={prevImage}
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <Image
                    src={saasProduct.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${saasProduct.name} screenshot ${currentImageIndex + 1}`}
                    width={600}
                    height={300}
                    className="object-cover rounded-lg"
                />
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 z-10"
                    onClick={nextImage}
                >
                    <ChevronRight className="h-5 w-5" />
                </Button> */}
            {/* </div> */}
        </div>
    )
}
