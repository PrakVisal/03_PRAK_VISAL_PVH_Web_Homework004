import { useState } from "react";
import "./App.css";
import AssignmentsComponent from "./components/AssignmentsComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";

function App() {
  const [newData, setNewData] = useState("")
  return (
    <>
      <main className="grid grid-cols-12 bg-gray-100 overflow-hidden">
        <div className="col-span-2">
          <SidebarComponent />
        </div>
        <div className="col-span-10 p-4">
          <TopNavbarComponent dataTransferToCard={(input)=>{setNewData(input)}}/>
          <div className="grid grid-cols-12">
            <div className="col-span-9 p-4">
              <DashboardComponent />
              <AssignmentsComponent inputed={newData}/>
            </div>
            <div className="col-span-3 mt-5">
              <LearningMaterialsComponent />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
