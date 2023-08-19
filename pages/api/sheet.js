import { useCors } from "@/hooks/useCors";
import { google } from "googleapis";
// import keys from "../../key";

export default async function (req, res) {
  await useCors("https://bandbindex.com/")(req, res);

  try {
    const client = new google.auth.JWT(
      process.env.CLIENT_EMAIL,
      null,
      process.env.PRIVATE_KEY,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }

      const gsapi = google.sheets({ version: "v4", auth: client });

      //CUSTOMIZATION FROM HERE
      const opt = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!A1:J",
      };

      const lastweekSAS = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J9",
      };
      const lastMonthSAS = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J10",
      };

      const lastweekMSA = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J15",
      };
      const lastMonthMSA = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J16",
      };

      const lastweekRSI = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J21",
      };
      const lastMonthRSI = {
        spreadsheetId: "11sscuZ3Ylgp7qDCnDJYF8qcO5A4ZIxW0xC3e-3f42qs",
        range: "Data Point!J22",
      };

      const responses = await Promise.all([
        gsapi.spreadsheets.values.get(opt),
        gsapi.spreadsheets.values.get(lastweekSAS),
        gsapi.spreadsheets.values.get(lastMonthSAS),
        gsapi.spreadsheets.values.get(lastweekMSA),
        gsapi.spreadsheets.values.get(lastMonthMSA),
        gsapi.spreadsheets.values.get(lastweekRSI),
        gsapi.spreadsheets.values.get(lastMonthRSI),
      ]);

      const rows = responses[0].data.values;
      const rows1 = responses[1].data.values;
      const rows2 = responses[2].data.values;
      const rows3 = responses[3].data.values;
      const rows4 = responses[4].data.values;
      const rows5 = responses[5].data.values;
      const rows6 = responses[6].data.values;

      // Transform the data into an array of objects
      const data = rows.map((row) => {
        return {
          Date: row[0],
          MSA: row[1],
          SAS: row[2],
          RSI: row[3],
          Bitcoin: row[4],
          Ethereum: row[5],
          column7: row[6],
          column8: row[7],
          "Date Calculator": row[8],
          column10: row[9],
        };
      });
      // Calculate the day before today
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      // Calculate  today
      const today = new Date();

      // Format the date as a string in the same format as the values in the Date column
      const dateString =
        ("0" + (yesterday.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + yesterday.getDate()).slice(-2) +
        "-" +
        yesterday.getFullYear();
      // Format the date as a string in the same format as the values in the Date column
      const todaydateString =
        ("0" + (today.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + today.getDate()).slice(-2) +
        "-" +
        today.getFullYear();

      const yesterdayData = data.filter((row) => {
        // filter yesterdays data out
        return row.Date == dateString;
      });
      const todayData = data.filter((row) => {
        // filter yesterdays data out
        return row.Date == todaydateString;
      });

      return res.status(200).send(
        JSON.stringify({
          error: false,
          data: {
            today: todayData[0],
            yesterday: yesterdayData[0],
            lastweek: { SAS: rows1[0][0], MSA: rows3[0][0], RSI: rows5[0][0] },
            lastMonth: { SAS: rows2[0][0], MSA: rows4[0][0], RSI: rows6[0][0] },
          },
        })
      );
    });
  } catch (e) {
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}

// export this from the api route
export const config = {
  api: {
    externalResolver: true,
  },
};
