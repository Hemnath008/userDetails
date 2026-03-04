import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function Dashboard() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
    const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/chart");
        const result = await response.json();
        console.log(response, "result");

        const labels = Object.keys(result);
        const values = Object.values(result);

        const data = {
          labels: labels,
          datasets: [
            {
              label: "Movies by Rating",
              data: values,
              backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726",
                "#EF5350",
                "#AB47BC",
                "#26C6DA",
                "#FF7043",
              ],
              borderWidth: 1,
            },
          ],
        };

        const options = {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        };

        setChartData(data);
        setChartOptions(options);
                setLoading(false);
      } catch (error) {
        console.error("Error fetching rating data:", error);
      }
    };

    fetchData();
  }, []);

    if (loading) {
    return <p>Loading chart...</p>;
  }

  return (
    <div className="card">
      <h3>Movies by Rating</h3>
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
