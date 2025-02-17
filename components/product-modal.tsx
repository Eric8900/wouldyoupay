"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react"

interface Product {
    name: string
    description: string
    images: string[]
    website: string
    tags: string[]
}

interface ProductModalProps {
    product: Product
    isOpen: boolean
    onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
    }

    return (
        <div className={`fixed inset-0 transition-opacity ${isOpen ? "bg-black bg-opacity-50" : "bg-transparent pointer-events-none"} z-40`}>
            <div
                className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-lg transition-transform transform ${isOpen ? "translate-y-0" : "translate-y-full"} z-50 h-[90%] overflow-y-auto`}
            >
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <Button variant="outline" size="icon" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>
                <div className="flex flex-col relative h-[70%] w-full items-center justify-center">
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Image
                        src={product.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${product.name} screenshot ${currentImageIndex + 1}`}
                        width={600}
                        height={300}
                        className="object-cover"
                    />
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4"
                        onClick={nextImage}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-700">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {product.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <Button asChild className="mt-4 w-full bg-green-700 hover:bg-green-800">
                        <a href={product.website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}