import DashboardHeader from "../components/DashboardHeader";
import RevenueChart from "../components/RevenueChart";
import ServiceStats from "../components/ServiceStats";
import StatsCard from "../components/StatsCard";
import OrdersTable from "../components/OrdersTable";
import { userContext } from "../providers/userProviders";
import { useContext, useState, useEffect } from "react";
const Dashboard = () => {
   const [state, setState] = useState({
      totalSales: 0,
      totalUsers: 0,
      totalProfit: 0,
      totalRevenue: 0
    });
  
    const { user } = useContext(userContext); 
    console.log(user.id);
  
    useEffect(() => {
      if (!user?.id) return; 
  
      const fetchStats = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/dashboard/get?sellerId=${user.id}`, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json"
            }
          });
  
          const data = await response.json();
          console.log(data);
  
          setState(data);
        } catch (error) {
          console.error("Error fetching dashboard stats:", error);
        }
      };
  
      fetchStats();
    }, [user]); 
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main
        className="p-6 space-y-6"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
      >
        <StatsCard />
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-stretch">
          <div className="lg:col-span-4">
        <RevenueChart totalRevenue={state.totalRevenue} />

          </div>
          <div className="lg:col-span-2">
            <ServiceStats />
          </div>
          <div className="lg:col-span-6">
            <OrdersTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
