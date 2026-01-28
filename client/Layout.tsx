"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/footer"

type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
