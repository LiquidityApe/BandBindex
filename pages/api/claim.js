import clientPromise from "@/lib/mongodb";
import { useCors } from "@/hooks/useCors";

export default async function (req, res) {
  // Use the cors middleware and pass the origin you want to accept
  await useCors("https://bandbindex.com/")(req, res);

  const { address, points } = req.body;

  let point = Number(points);

  // Check if points is not a number
  if (points === null || isNaN(points)) {
    res.status(400).json({ error: "Points value must be a number" });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db("Bandb");

    const userDoc = await db.collection("Index").findOne({ address: address });

    if (!userDoc) {
      res.status(404).json({ error: "Address not found" });
      return;
    }

    let dailyClaim = userDoc.dailyClaim;
    // Progress claim logic
    if (dailyClaim < 60) {
      dailyClaim += 10;
    } else if (dailyClaim >= 60 && dailyClaim < 100) {
      dailyClaim += 40;
    } else if (dailyClaim >= 100) {
      dailyClaim = 10;
    }

    const result = await db.collection("Index").findOneAndUpdate(
      { address: address },
      {
        $inc: { points: point },
        $set: {
          dailyClaim: dailyClaim,
          lastClaim: new Date(),
        },
      },
      { returnOriginal: false }
    );

    res.status(200).json({
      msg: "Points and other values updated successfully",
      updatedDocument: result.value,
    });
  } catch (e) {
    console.error("Update Error:", e);
    res
      .status(500)
      .json({ error: "An error occurred while updating the data" });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
