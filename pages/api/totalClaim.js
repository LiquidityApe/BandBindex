import { useCors } from "@/hooks/useCors";
import clientPromise from "@/lib/mongodb";

export default async function (req, res) {
  await useCors("https://bandbindex.com/")(req, res);

  try {
    const client = await clientPromise;

  
    const db = client.db("Bandb");
    const walletData = await db.collection("Index").find({}).toArray();

    if (!walletData || walletData.length === 0) {
      return res.status(404).json({ error: "No wallet data found" });
    }

    let totalPoints = 0;

    walletData.forEach(wallet => {
      if (wallet.points) { // Check if 'points' exists and is not undefined
        totalPoints += wallet.points;
      }
    });

    res.status(200).json({ totalPoints });
  } catch (e) {
    console.error("Query Error:", e);
    res
      .status(500)
      .json({ error: "An error occurred while calculating the total points" });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
