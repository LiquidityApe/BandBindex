import { useState, useEffect } from "react";

const useDataFetching = () => {
  const [data, setData] = useState({
    coin: {},
    sentiment: null,
    STP: null,
    BTD: null,
    chartData: null,
    yesterday: null,
    today: null,
    lastweek: null,
    lastMonth: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://bandbindex.com/"
        : "http://localhost:3000";
    const APIkey = " h569uy3tkd6hfydgfzz8q74fd6lkbkpvjv0m4r85e";

    const fetchData = async () => {
      try {
        const chartDataRes = await fetch(`${baseUrl}/api/chart`);
        const sheetDataRes = await fetch(`${baseUrl}/api/sheet`);
        const dipDataRes = await fetch(`${baseUrl}/api/dip`);
        const lunrRes = await fetch(
          "https://lunarcrush.com/api3/coinoftheday",
          {
            headers: {
              Authorization: `Bearer${APIkey}`,
            },
          }
        );

        const chartData = await chartDataRes.json();
        const sheetData = await sheetDataRes.json();
        const dipData = await dipDataRes.json();
        const lunrData = await lunrRes.json();

        setData({
          coin: { name: lunrData.name, symbol: lunrData.symbol },
          sentiment: dipData.data.sentiment,
          STP: dipData.data.STP,
          BTD: dipData.data.BTD,
          chartData: chartData.data,
          yesterday: sheetData.data.yesterday,
          today: sheetData.data.today,
          lastweek: sheetData.data.lastweek,
          lastMonth: sheetData.data.lastMonth,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useDataFetching;
