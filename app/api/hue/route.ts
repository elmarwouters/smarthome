import {NextResponse} from 'next/server';

export async function GET() {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_HUE_IP}/api/${process.env.NEXT_PUBLIC_HUE_USER}`, {
        method: 'GET',
        next: {revalidate: 60} // Revalidate every 60 seconds
    });
    const data = await res.json();

    return NextResponse.json(data)
}
