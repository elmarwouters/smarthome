import {Inter} from 'next/font/google'
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation/Navigation";

const inter = Inter({subsets: ['latin']})

export default function Lights() {

    const Lights = dynamic(() => import("@/components/Lights/Lights"), {
        ssr: false,
    });

    return (
        <>
            <Navigation />
            <main className="flex min-h-screen flex-col p-24">
                <h1 className="text-6xl font-bold mb-4">Lights</h1>
                <Lights/>
            </main>
        </>
    )
}
