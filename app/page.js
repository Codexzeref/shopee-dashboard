"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";
import { getDaily, getWeekly } from "../services/api";

export default function Home() {
  const [daily, setDaily] = useState(null);
  const [weekly, setWeekly] = useState([]);

  useEffect(() => {
    getDaily().then(setDaily);
    getWeekly().then(setWeekly);
  }, []);

  if (!daily) return <div>Loading...</div>;

  return (
    <main className="p-6">
      <h1>Shopee Dashboard</h1>
      <Card title="Orders" value={daily.total_orders} />
      <Card title="Revenue" value={daily.total_revenue} />
      <Chart data={weekly} />
    </main>
  );
}