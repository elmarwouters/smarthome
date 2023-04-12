import {Inter} from 'next/font/google'
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation/Navigation";

const inter = Inter({subsets: ['latin']})

export default function Groups() {

    const Groups = dynamic(() => import("@/components/Groups/Groups"), {
        ssr: false,
    });

    return (
        <>
            <Navigation />
            <main className="flex min-h-screen flex-col p-24">
                <h1 className="text-6xl font-bold mb-4">Groups</h1>
                <Groups/>
            </main>
        </>
    )
}
