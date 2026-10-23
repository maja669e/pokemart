import { NextResponse } from 'next/server'

export async function POST(request) {
  const order = await request.json()

  // Check that the order contains items
  if (!order.items || order.items.length === 0) {
    return NextResponse.json(
      { message: 'Your cart is empty.' },
      { status: 400 }
    )
  }

  // Confirm that the order was received
  return NextResponse.json({
    message: 'Order received successfully!',
    total: order.total
  })
}