
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import DemoicPage from "@/ictable/page";
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
import { parse } from "path";
import { m } from "motion/react";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/dashboard/mm">Get Integration Packages</HoveredLink>
            <HoveredLink href="/dashboard">Get Runtime Integration packages</HoveredLink>
            <HoveredLink href="#">Get Message Mapping</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Team">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Shivam Tripathi"
              href="#"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Lead Developer "
            />
            <ProductItem
              title="Ankita"
              href="#"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Backend Developer "
            />
            <ProductItem
              title="Niranjan Yadav"
              href="#"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="team lead. Frontend enthusiast . expert in react js ."
            />

          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Account">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Logout</HoveredLink>
            <HoveredLink href="#">Settings</HoveredLink>
            <HoveredLink href="#">Profile</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export default function DashboardmmComponent() {

  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [totalRuntimeArtifacts,setTotalRuntimeArtifacts] = useState<string>('');
  const [totalArtifactstarted,setTotalArtifactstarted] = useState<string>('');
  const [error,setError] = useState<string>('');
  const [t,setT] = useState<number>(0);
  const [mm,setMm] = useState<string>('');
  const items = [
  {
    title: "Total Runtime Artifacts",
    description: "Total number of runtime artifacts",
    header: <div className="flex items-center space-x-2 text-9xl">{totalRuntimeArtifacts}</div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total Integration Packages",
    description: "Total Number of integration Packages",
    header: <div className="flex items-center space-x-2 text-9xl">{t}</div>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total Deployed",
    description: "Total number of runtime artifacts deployed",
    header: <div className="flex items-center space-x-2 text-9xl">{totalArtifactstarted}</div>,
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

/*   useEffect(() => {
    // Get data from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedToken = localStorage.getItem('token');
    
    if (!storedUsername || !storedToken) {
      // If no valid session, redirect to login
      router.push('/login');
      return;
    }
     const fetchData = async () => {
          try {
            const username = localStorage.getItem('username');
            const token = localStorage.getItem('token');
            
            const response = await fetch('/api/integration-design-packages', {
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


            for (let i = 0; i < entries.length; i++) {
              const id = entries[i].getElementsByTagName('d:Id')[0]?.textContent || '';
              const name = entries[i].getElementsByTagName('d:Name')[0]?.textContent || '';
              const version = entries[i].getElementsByTagName('d:Version')[0]?.textContent || '';
              const Type = entries[i].getElementsByTagName('d:Type')[0]?.textContent || '';
              const DeployedBy = entries[i].getElementsByTagName('d:DeployedBy')[0]?.textContent || '';
              const DeployedOn = entries[i].getElementsByTagName('d:DeployedOn')[0]?.textContent || '';
              const Status = entries[i].getElementsByTagName('d:Status')[0]?.textContent || '';

            }

            setT(entries.length);
            localStorage.setItem("totalic",entries.length.toString());
            // also store started and error count in localstorage
            var ttotalArtifactstarted = (localStorage.getItem("started") || "0");
            var ttotalRuntimeArtifacts = parseInt(localStorage.getItem("started") || "Not Found") + parseInt(localStorage.getItem("error") || "0");
            setTotalArtifactstarted(ttotalArtifactstarted);
            setError(ttotalRuntimeArtifacts-parseInt(ttotalArtifactstarted)+"");
            setTotalRuntimeArtifacts((  ttotalRuntimeArtifacts).toString());
          } catch (error) {
            console.error('Error:', error);
          }
        };
        
        fetchData();
        setMm(localStorage.getItem("totalmm") || "0");
    setUsername(storedUsername);
    setToken(storedToken);
  }, []); */

  return (
    <div className="relative w-full min-h-screen">
      <Navbar className="top-2" />
      
      {/* Main content container with top padding for navbar */}
      <div className="pt-20 px-4 mt-11 ">
        {/* Flex row container */}
        <div className="flex flex-row gap-8  max-w-5xl mx-auto items-center ">
              <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-1" : "md:col-span-1"}
                />
            ))}
            </BentoGrid>
          {/* First div - flex column */}
          <div className="flex flex-col flex-1 space-y-4">
            {/* Content for first column goes here */}
            
          </div>
          
          {/* Second div - for your content */}
          <div className="flex-1">
            {/* You can add your content here */}
            
          </div>

        </div>
      </div>
        <DemoicPage  />
    </div>
  );
}
