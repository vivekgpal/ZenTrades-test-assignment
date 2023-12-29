import "./DashboardPage.css"
import ReactApexChart from 'react-apexcharts';
import { useState } from "react";
function DashboardPage() {


    const companyMetrics = [
        {
            id: "1",
            price: "$406,411.29",
            tag: "Total Revenue"
        },
        {
            id: "2",
            price: "$620",
            tag: "Total Jobs Avg"
        },
        {
            id: "3",
            price: "$655",
            tag: "Tickets Created"
        },
        {
            id: "4",
            price: "$735",
            tag: "Ticket Scheduled"
        },
        {
            id: "5",
            price: "$110,448.8",
            tag: "Outstanding Amount"
        },
        {
            id: "6",
            price: "$105",
            tag: "Total Revenue"
        },
        {
            id: "7",
            price: "$436",
            tag: "Total Revenue"
        },
        {
            id: "8",
            price: "$65",
            tag: "Total Revenue"
        }
    ]

    const [series, setSeries] = useState([
        {
            data: [100000, 90000, 49000, 48000, 42000, 32000]
        }
    ]);

    const [options, setOptions] = useState({
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["Everett", "Seattle", "Lynnwood", "Bothell", "Mukilteo", "Edmonds"]
            ,
        }
    });

    return (
        <>
            <div className="heading">Company Metrics</div>
            <div className="dashboard">
                {companyMetrics.map((data) => (
                    <div className="card" key={data.id}>
                        <div className="price">{data.price}</div>
                        <div className="tag">{data.tag}</div>
                    </div>
                ))}
            </div>

            <div className="charts">

                <div className="chart-box">
                    <div className="heading">Revenue By Job Location</div>

                    <div className="chart">

                        <ReactApexChart options={options} series={series} type="bar" height={350} />
                        <div className="end">Revenue for 2019</div>
                    </div>
                </div>

                <div className="chart-box">
                    <div className="heading">Revenue By Job Type</div>
                    <div className="chart">

                        <ReactApexChart options={options} series={series} type="bar" height={350} />
                        <div className="end">Revenue for 2019</div>
                    </div>
                </div>


            </div>

        </>
    )
}
export default DashboardPage