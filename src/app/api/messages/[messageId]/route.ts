/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import dbConnect from "@/src/lib/database";
import { MessageModel } from "@/src/schemas/message.schema";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, context: any) {
  try {
    await dbConnect();
    const { messageId } = await context.params;

    await MessageModel.findByIdAndDelete(messageId);
    return NextResponse.json({
      message: "Message Deleted Successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to Delete Message",
      status: 500,
      error,
    });
  }
}
