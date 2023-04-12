import {Inter} from 'next/font/google'
import dynamic from "next/dynamic";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    const Lights = dynamic(() => import("@/components/Lights/Lights"), {
        ssr: false,
    });

    return (
        <main className="flex min-h-screen flex-col p-24">
            <h1 className="text-6xl font-bold mb-4">Smart Home</h1>
            <Lights />
        </main>
    )
}
