require('dotenv').config();
const {google} = require('googleapis');
const sheets = google.sheets({version: 'v4', auth});
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URL);

const appendData = async (auth) => {
    const sheets = google.sheets({version: 'v4', auth});
    const request = {
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A1:C',  // The range of the sheet where you want to append the data
      valueInputOption: 'USER_ENTERED', 
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [ [name, reps, numCheckboxes] ]
      }
    };
    try {
        const response = await sheets.spreadsheets.values.append(request);
        console.log(`${response.data.updates.updatedCells} cells appended.`);
    } catch (err) {
        console.error(err);
    }
  };
  