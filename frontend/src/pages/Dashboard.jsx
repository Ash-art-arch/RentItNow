import DashboardHeader from "../components/DashboardHeader";
import RevenueChart from "../components/RevenueChart";
import ServiceStats from "../components/ServiceStats";
import StatsCard from "../components/StatsCard";
import OrdersTable from "../components/OrdersTable";

const Dashboard = () => {
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
            <RevenueChart />
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
