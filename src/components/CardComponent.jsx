import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({title,date,progress,description}) {
  function handleColor (progressing){
    if(progressing==="25"){
      return "bg-custom-pink"
    }else if(progressing ==="50"){
      return "bg-custom-yellow-500"
    }else if(progressing === "75"){
      return "bg-custom-carrot"
    }else{
      return "bg-custom-sky-blue"
    }
  }
  // I don't want make this function but when I try to reuse handleColor function some colors just error
   function handleTextColor (progressing){
    if(progressing==="25"){
      return "text-custom-pink"
    }else if(progressing ==="50"){
      return "text-custom-yellow-500"
    }else if(progressing === "75"){
      return "text-custom-carrot"
    }else{
      return "text-custom-sky-blue"
    }
  }
  function handleLength(progressed){
    if(progressed=="25"){
      return "w-20"
    }else if(progressed =="50"){
      return "w-40"
    }else if(progressed =="75"){
      return "w-55"
    }else{
      return "w-full"
    }
  }
  const formattedDate = (date) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const newDate = new Date(date).toLocaleDateString("en-US", options);
    return newDate;
  };
  return (
    <div>
      <div className="min-w-77 h-65 p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p className={`${handleTextColor(progress)} text-md font-medium`}>{formattedDate(date)}</p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {description}
        </p>

        {/* progress bar */}
        <div className="w-full flex justify-between text-sm font-medium mb-1">
          <p>Progress</p>
          <p>{progress}%</p>
        </div>
        <div className={`relative mb-5 ${handleLength(progress)} bg-gray-200 rounded-full h-2.5 dark:bg-gray-700`}>
          <div className={`${handleColor(progress)} h-2.5 rounded-full`}></div>
        </div>
        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
            {new Date(date) > new Date() ? `${Math.ceil((new Date(date) - new Date()) / (1000 * 60 * 60 *24) )} day left` : "Today"}
          </p>
        </div>
      </div>
    </div>
  );
}
