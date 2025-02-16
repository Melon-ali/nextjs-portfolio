/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import dbConnect from "@/src/lib/database";
import { ProjectModel } from "@/src/schemas/project.schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  try {
    await dbConnect();

    const { projectId } = await context.params;

    if (!projectId) {
      return NextResponse.json({
        message: "Project ID is Required",
        status: 400,
      });
    }

    const project = await ProjectModel.findById(projectId);

    if (!project) {
      return NextResponse.json({ message: "Project Not Found", status: 404 });
    }

    return NextResponse.json({
      data: project,
      message: "Project Fetched Successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error Fetching Project:", error);
    return NextResponse.json({
      message: "Failed to Fetch Project",
      status: 500,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

// PUT to update a project by ID
export async function PATCH(request: NextRequest, context: any) {
  try {
    await dbConnect();
    const { projectId } = await context.params;
    const data = await request.json();

    const updatedProject = await ProjectModel.findByIdAndUpdate(
      projectId,
      data,
      {
        new: true,
      }
    );

    if (!updatedProject) {
      return NextResponse.json({ message: "Project Not Found", status: 404 });
    }

    return NextResponse.json({
      data: updatedProject,
      message: "Project Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to Update Project",
      status: 500,
      error,
    });
  }
}

// DELETE a project by ID
export async function DELETE(req: NextRequest, context: any) {
  try {
    await dbConnect();
    const { projectId } = await context.params;

    await ProjectModel.findByIdAndDelete(projectId);
    return NextResponse.json({
      message: "Project Deleted Successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to Delete Project",
      status: 500,
      error,
    });
  }
}
