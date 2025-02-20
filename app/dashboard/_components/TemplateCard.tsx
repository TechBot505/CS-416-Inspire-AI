import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";

function TemplateCard(item: TEMPLATE) {

  return (
      <div className="sm:p-5 p-4 shadow-md rounded-md border dark:bg-gray-700 bg-white flex flex-col gap-2 cursor-pointer hover:scale-105 transition-all">
        <div className="flex gap-2 items-start justify-between">
          <Image src={item.icon} alt={item.name} width={50} height={50} />
        </div>
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-gray-500 dark:text-gray-300 line-clamp-3">{item.description}</p>
      </div>
  );
}

export default TemplateCard;