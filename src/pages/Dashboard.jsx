import React, { useEffect, useState } from "react";
import { getWellbeingScore } from "../services/WellbeingService.jsx";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "../styles/Dashboard.css";

const Dashboard = () => {
    const [score, setScore] = useState(null);
    const [year, setYear] = useState(2023); // Default year
    const [error, setError] = useState(null);
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchScore = async () => {
            try {
                const data = await getWellbeingScore(year);
                setScore(data.score);
                setChartData({
                    labels: data.months,
                    datasets: [
                        {
                            label: `Wellbeing Score for ${year}`,
                            data: data.scores,
                            borderColor: "rgba(75,192,192,1)",
                            backgroundColor: "rgba(75,192,192,0.2)",
                        },
                    ],
                });
            } catch (error) {
                console.error("Error fetching wellbeing score:", error);
                setError("Failed to fetch wellbeing score.");
            }
        };

        fetchScore();
    }, [year]);

    return (
        <div className="dashboard mt-20">
            <h1 className>Wellbeing Dashboard</h1>
            <div>
                <label htmlFor="year">Select Year: </label>
                <select
                    id="year"
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value))}
                >
                    <option value={2023}>2023</option>
                    <option value={2022}>2022</option>
                    <option value={2021}>2021</option>
                    {/* Add more years as needed */}
                </select>
            </div>
            <div>
                <h2>Aggregated Wellbeing Score for {year}</h2>
                {error ? <p>{error}</p> : score !== null ? <p>{score}</p> : <p>Loading...</p>}
            </div>
            <div>
                <h2>Monthly Wellbeing Scores</h2>
                {chartData.labels ? <Line data={chartData} /> : <p>Loading chart...</p>}
            </div>
        </div>
    );
};

export default Dashboard;