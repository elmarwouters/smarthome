import {NextResponse} from 'next/server';

export async function GET() {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_HUE_IP}/api/${process.env.NEXT_PUBLIC_HUE_USER}/lights`, {
        method: 'GET',
        next: {revalidate: 60} // Revalidate every 60 seconds
    });
    const data = await res.json();

    return NextResponse.json(data)
}

export async function POST(request: Request) {
    const body = await request.json();
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_HUE_IP}/api/${process.env.NEXT_PUBLIC_HUE_USER}/lights/${request.body}`, {
        method: 'POST',
        body: JSON.stringify(body),
        next: {revalidate: 60}
    });
    const data = await res.json();

    return NextResponse.json(data)
}
