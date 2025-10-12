"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
    SidebarGroupContent,
      SidebarGroupLabel,
        SidebarMenu,
          SidebarMenuButton,
            SidebarMenuItem,
} from "@/components/ui/sidebar"
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "motion/react";
import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Loader, Lock, Map, Package, Search, Settings, User2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Separator } from "@radix-ui/react-separator"
import { HeroHighlight } from "./ui/hero-highlight"
import { NavbarLogo } from "./ui/resizable-navbar";
import Link from "next/link"; 
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Integration Packages",
    url: "/dashboard/integration_content",
    icon: Package,
  },
  {
  title: "Message Mapping",
  url: "/dashboard/message_mappings",
  icon: Map,
},
  {
  title: "Runtime Artifacts",
  url: "/dashboard/runtime_artifacts",
  icon: Loader,
},
  {
  title: "Value Mappings",
  url: "/dashboard/value_mappings",
  icon: Map,
},
  {
    title: "Message Processing Logs",
    url: "/dashboard/message_processing_logs",
    icon: Calendar,
  },
  {
    title: "Security Content",
    url: "/dashboard/security_content",
    icon: Lock,
  },
  {
    title: "Configurations",
    url: "/dashboard/manage",
    icon: Settings,
  },
]


export function AppSidebar() {

  return (
    <Sidebar>
        <SidebarHeader>
    <SidebarMenu>
        
      <SidebarMenuItem>
        {/* add gradient in background of h1 */}
        <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black "
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/9f/LTIMindtree_Logo.svg"
        alt="logo"
        width={200}
        height={200}
      />

    </a>
        <h1 className=" flex flex-row justify-center mt-4 text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          
            SAPIANS
        </h1>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
      <SidebarContent>
        
        <SidebarGroup>
          <SidebarGroupLabel>CLOUD INTEGRATION</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span className="text-xl ">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
      </SidebarContent>
       <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Shivam Tripathi
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span><a href="/">Sign out</a></span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}