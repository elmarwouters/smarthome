import {Inter} from 'next/font/google'
import Navigation from "@/components/Navigation/Navigation";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Navigation />
            <main className="flex min-h-screen flex-col p-24">
                <p>Make a selection from the navigation.</p>
            </main>
        </>
    )
}
