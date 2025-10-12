
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { RuntimeArtifacts } from "@/radtable/columns";
import DemoPage from "@/radtable/page";
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export default function DashboardComponent() {

  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const[started,setStarted]=useState<number>(0);
  const[error,setError]=useState<number>(0);
  const[mm,setMm]=useState<number>(0);
  const[tic,setTic]=useState<string>('');
  const items = [
  {
    title: "Total Runtime Artifacts",
    description: "Total number of runtime artifacts",
    header: <div className="flex items-center space-x-2 text-9xl">{started+error}</div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total Integration Packages",
    description: "Total Number of integration Packages",
    header: <div className="flex items-center space-x-2 text-9xl">{tic}</div>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total Deployed",
    description: "Total number of runtime artifacts deployed",
    header: <div className="flex items-center space-x-2 text-9xl">{started}</div>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total Errors",
    description:
      "Number of errors in the runtime artifacts",
    header: <div className="flex items-center space-x-2 text-9xl">{error}</div>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total Message Mapping",
    description: "Total Number of Message Mappings",
    header: <div className="flex items-center space-x-2 text-9xl">{mm}</div>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  }
];


 /*  useEffect(() => { 
         const fetchData = async () => {
          try {
            const username = localStorage.getItem('username');
            const token = localStorage.getItem('token');

            const response = await fetch('/api/mmapping', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: username,
                token: token,
              }),
            });
            
            const xmlText = await response.text();  

            
            // Parse XML and extract runtime artifacts data
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "application/xml");
            const entries = xmlDoc.getElementsByTagName('m:properties');

            var length=entries.length;
            localStorage.setItem("totalmm",length.toString());
            setMm(length);
            


          } catch (error) {
            console.error('Error:', error);
          }
        };
        fetchData();
  },[]) */

  return (

      <>
      {/* Main content container with top padding for navbar */}
      <div className="pt-20 px-4 mt-11 ">
        {/* Flex row container */}
    
      </div>
        <DemoPage/>
</>

  );
}
