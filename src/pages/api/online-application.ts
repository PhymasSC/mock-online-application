import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

type SheetData = {
  fName: string;
  lName: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const { fName, lName } = req.body as SheetData;
  console.log(fName, lName)

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env?.GOOGLE_CLIENT_EMAIL || "",
      private_key: process.env?.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || "",
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  const sheets = google.sheets({
    auth,
    version: 'v4',
  });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env?.GOOGLE_SHEET_ID || "",
    range: 'Sheet1!A2:B2',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[fName, lName]],
    },
  });

  res.status(201).json({ message: 'It works!', response });

}

export default handler;
