"use client"

import {useState} from "react";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className="bg-black text-white p-4">
                <div>
                    <nav>
                        <ul className="flex flex-row gap-4">
                            <li ><a href="/">Home</a></li>
                            <li ><a href="/lights">Lights</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navigation;
