export const getDaily = async () => {
  return { total_orders: 10, total_revenue: 100000 };
};

export const getWeekly = async () => {
  return [
    { date: "Mon", value: 10 },
    { date: "Tue", value: 20 },
    { date: "Wed", value: 15 }
  ];
};