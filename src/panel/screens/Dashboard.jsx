import React from "react";
import Layout from "../Layout/Layout";
import Breadcrumbs from "../Layout/Breadcrumbs";
import PanelHeading from "../Layout/PanelHeading";
import { MdDashboard } from "react-icons/md";
import DashboardStats from "../Components/DashboardStats";
import BlogLineChart from "../Components/BlogLineChart";
import BlogBarChart from "../Components/BlogBarChart";

const Dashboard = () => {
  return (
    <Layout>
      <Breadcrumbs current={"Dashboard"} currentIcon={<MdDashboard />} />
      <PanelHeading title={"Visualize"} para={"Using responsive utility variants to build adaptive user interfaces."} />
      <DashboardStats />

      <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        <div className="border rounded-md shadow-md p-3 font-bold">
          <BlogLineChart />
        </div>
        <div className="border rounded-md shadow-md p-3 font-bold">
          <BlogBarChart />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
