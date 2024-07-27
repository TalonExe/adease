// import { cn } from "@/lib/utils";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconFilter,
  IconTableColumn,
  IconHandClick,
  IconEye,
  IconShoppingBag,
  IconShoppingCart,
} from "@tabler/icons-react";
import PieChartDemo from "@/components/Charts/PieChart"

 
function Dashboard() {
  return (
    <BentoGrid className="max-w-8xl mx-auto h-full w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({children} : {children:React.ReactNode} ) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    {children}
  </div>
);
const items = [
  {
    title: "Impressions",
    description: "175,235",
    header:
    <Skeleton>
      <PieChartDemo/>
    </Skeleton>,
    
    icon: <IconEye className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Clicks",
    description: "21,138",
    header: <Skeleton><PieChartDemo/></Skeleton>,
    icon: <IconHandClick className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Conversions",
    description: "7,125",
    header: <Skeleton><PieChartDemo/></Skeleton>,
    icon: <IconFilter className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Opportunity Status",
    description:
      "145",
    header: <Skeleton><PieChartDemo/></Skeleton>,
    icon: <IconShoppingBag className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Conversion Rate",
    description: "40",
    header: <Skeleton><PieChartDemo/></Skeleton>,
    icon: <IconShoppingCart className="h-4 w-4 text-neutral-500" />,
  },
  
];

export default Dashboard