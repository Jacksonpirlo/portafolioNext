import { ContactMessage } from "@/database/models/ContactMessage";
import { connectDB } from "@/lib/db";

export async function GET(request: Request) {
  await connectDB();
  const messages = await ContactMessage.find();
  return Response.json(messages, { status: 200 });
}

export async function POST(request: Request) {
  await connectDB();
  const body = await request.json();
  const newMessage = new ContactMessage(body);
  await newMessage.save();
  return Response.json({ name: "ContactMessage created", data: newMessage }, { status: 201 });
}

export async function PUT(request: Request) {
  await connectDB();
  const body = await request.json();
  const { id, ...updateData } = body;
  const updatedMessage = await ContactMessage.findByIdAndUpdate(id, updateData, { new: true });
  return Response.json({ name: "ContactMessage updated", data: updatedMessage }, { status: 200 });
}

export async function DELETE(request: Request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  await ContactMessage.findByIdAndDelete(id);
  return Response.json({ name: "ContactMessage deleted" }, { status: 200 });
}
