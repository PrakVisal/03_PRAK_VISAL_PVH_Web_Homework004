import React from "react";
import {dashboard} from "../data/dashboard";
export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5 m-3">Dashboard</h2>

      {/* display summary on each card */}
        <div className="flex gap-8 mb-6 mx-3">
      {dashboard.map((items)=>(
        <div className="flex bg-white gap-3 py-3.5 px-4 rounded-xl w-100 ">
          <div className={`p-3 rounded-xl ${items.color}`}>
            <img src={items.icon} alt="file icon" />
          </div>
          <div>
            <p className="text-xl font-black">{items.totalTasks}</p>
            <p className="text-gray-400">{items.label}</p>
          </div>
        </div>
          ))}
      </div>
      
    </div>
  );
}
