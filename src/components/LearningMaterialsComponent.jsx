import React, { useState } from "react";
import { Key, Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [materials,setMaterials] = useState(learningMaterials);
  const handleSortValue = (e) => {
      if(e == "A-Z"){
        const sortAsc = [...materials].sort((a,b)=>(
          a.title.localeCompare(b.title)
        ))
        setMaterials(sortAsc)
      }else{
        const sortDsc = [...materials].sort((a,b)=>(
          a.title.localeCompare(b.title)
        )).reverse()
        setMaterials(sortDsc)
      }
  }
  const toggleStar = (id)=>{
     setMaterials((oldData)=> {
       return oldData.map((data)=> data.id === id ? { ...data, isFavorite: !data.isFavorite }: data)})
  }

    // format date
  const formattedDate = (date) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const newDate = new Date(date).toLocaleDateString("en-US", options);
    return newDate;
  };


  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[87vh] no-scrollbar mr-3">
      
      {/* calling filter component */}
      <FilterComponent takeSortValue={handleSortValue}/>
      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      {materials.map((items)=>(
        <div className="space-y-3">
        <div className="bg-light-gray px-4 py-3 m-4 rounded-2xl flex gap-5 items-center">
          <img
            src={items.image}
            alt="HTML5"
            width={50}
            height={50}
            className="rounded-xl"
          />
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-base font-medium">{items.title}</p>
              <Star size={20}
              onClick={()=>toggleStar(items.id)} 
              fill={`${items.isFavorite? "#FAA300" : "none" }`}
              stroke={`${items.isFavorite ? "#FAA300" : "#2B343B"}`}
               />
            </div>
            <p className="text-gray-400 text-sm">Posted at: {formattedDate(items.postedAt)}</p>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
