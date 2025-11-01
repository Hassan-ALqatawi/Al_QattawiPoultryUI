
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
    }

    // Simulate a delay to mimic a real API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(`Subscribed email: ${email}`);

    // In a real application, you would save the email to a database.
    // For this mock API, we'll just return a success response.

    return NextResponse.json({ message: 'Subscribed successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ message: 'An error occurred during subscription.' }, { status: 500 });
  }
}
