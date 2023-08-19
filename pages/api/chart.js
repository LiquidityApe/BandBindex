import { useCors } from "@/hooks/useCors";
import { google } from "googleapis";

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
      const responses = await Promise.all([gsapi.spreadsheets.values.get(opt)]);

      const rows = responses[0].data.values;
      // Transform the data into an array of objects
      const data = rows
        .map((row) => {
          return {
            Date: row[0],
            MSA: row[1],
            SAS: row[2],
            RSI: row[3],
          };
        })
        .filter((item) => item.MSA !== "");
      // Calculate the day before today

      return res.status(200).send(
        JSON.stringify({
          error: false,
          data: data,
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
