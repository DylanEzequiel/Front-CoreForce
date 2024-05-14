import { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  children: ReactNode;
}

export const CardData: React.FC<CardDataStatsProps> = ({title, total, children}) => {
  return (
    <div className="flex justify-between items-center rounded-sm border border-stroke bg-white py-6 px-7 shadow-md">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-300">
        {children}
      </div>
 
      <div className="mt-4 flex flex-col items-end justify-between">
          <h4 className="text-2xl font-bold text-black">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>
      </div>
    
  )
}
