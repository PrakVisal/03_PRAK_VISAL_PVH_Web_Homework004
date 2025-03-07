import React, { useState } from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";
import CardComponent from "./CardComponent";
function AssignmentsComponent({inputed}) {
  const [getData, setData] = useState([]);
  const searchData = getData.filter((e)=>
    e.projectName.toLowerCase().includes(inputed.toLowerCase())
  )
  return (
    <div className="h-screen">
      <div className="flex justify-between m-3">
        {/* assignments  */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent values={(value)=>{setData(value)}}/>
      </div>
      <div className="grid grid-col-12 no-scrollbar overflow-auto h-[63%]">
          <div className="grid grid-cols-3">
            {searchData.map((project,index)=>(
            <CardComponent 
            key={index}
            title={project.projectName}
            date={project.dueDate}
            progress={project.progress}
            description={project.description}/>
          ))}
          </div>
        </div>
    </div>
  );
}
export default AssignmentsComponent;
