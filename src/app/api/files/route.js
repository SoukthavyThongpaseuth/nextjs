import { NextResponse } from "next/server";
import { google } from "googleapis";
import path from "path";
import fs from "fs";

// Construct the path to the service account key file
const SERVICE_ACCOUNT_KEY_FILE = path.join(
  process.cwd(),
  "key",
  "rock-accord-432410-c7-466139af210a.json"
);

// Read the key file
const serviceAccountKey = JSON.parse(
  fs.readFileSync(SERVICE_ACCOUNT_KEY_FILE, "utf-8")
);

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccountKey,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

export async function GET() {
  try {
    const drive = google.drive({ version: "v3", auth });
    const response = await drive.files.list({
      q: "'1-2ux0-loZ09-Oxs32AsMnLebS72loE6N' in parents", // Replace with your actual folder ID
      fields: "files(id, name, mimeType, webViewLink, webContentLink)",
    });

    return NextResponse.json(response.data);
  } catch (error) {
    // Use type assertion to handle the error type
    const errorMessage = error.message;
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
