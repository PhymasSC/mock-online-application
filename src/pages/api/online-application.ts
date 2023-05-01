import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import formidable from 'formidable';
type SheetData = {
  fName: string;
  lName: string;
  phoneNumber: string,
  emailAddress: string,
  linkedInProfileLink: string,
  country: string,
  ageAboveEighteen: 'y' | 'n',
  nationality: string,
  vaccinated: 'y' | 'n',
  bmi: 'y' | 'n',
  height: 'y' | 'n',
  weight: number,
  languages: string,
  willingRelocated: 'y' | 'n',
  workedBefore: 'y' | 'n',
  role: string,
  jobTitle: string,
  company: string,
  workFrom: string,
  workTo: string,
  stillWorking: 'y' | 'n',
  location: string,
  roleDescription: string,
  agree: 'y' | 'n',
  resume: Object
}

async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const promise = new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) reject(err);
      resolve({ fields, files });
    })

  })
  const data: {
    info: SheetData,
    files: any
    //@ts-ignore
  } = await promise.then(({ fields, files }) => {
    const info = fields as SheetData
    return { info, files }
  })

  const { fName, lName, phoneNumber, emailAddress, linkedInProfileLink, country, ageAboveEighteen, nationality, vaccinated, bmi, height, weight, languages, willingRelocated, workedBefore, role, jobTitle, company, workFrom, workTo, stillWorking, location, roleDescription, agree } = data.info as SheetData;

  const fileContent = fs.createReadStream(data.files.resume.filepath);

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
  const drive = google.drive({
    auth,
    version: 'v3',
  })
  const sheets = google.sheets({
    auth,
    version: 'v4',
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env?.GOOGLE_SHEET_ID || "",
    range: 'Sheet1!A2:X2',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[fName, lName, phoneNumber, emailAddress, linkedInProfileLink, country, ageAboveEighteen, nationality, vaccinated, bmi, height, weight, languages, willingRelocated, workedBefore, role, jobTitle, company, workFrom, workTo, stillWorking, location, roleDescription, agree]],
    },
  });

  // Upload pdf to google drive
  const fileMetadata = {
    name: `${fName} ${lName}-${data.files.resume.originalFilename}.pdf`,
    parents: [process.env?.GOOGLE_DRIVE_FOLDER_ID || ""],
  };
  const media = {
    mimeType: 'application/pdf',
    body: fileContent,
  };

  await drive.files.create({
    requestBody: fileMetadata,
    media,
    fields: 'id',
  });


  res.redirect(302, `/thank-you?name=${fName + ' ' + lName}`)

}

export default handler;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};