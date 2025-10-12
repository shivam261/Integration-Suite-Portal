import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import "../globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navigation_bar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Runtime Artifacts",
  description: "View and manage your runtime artifacts",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* i want gradient in lower half with some curves */
    <div className="min-h-screen bg-white  ">

          <SidebarProvider>
      <AppSidebar />
      <main>
     <div className="relative w-full min-h-screen justify-center-safe ml-20 ">
    <div className=" fixed top-[-36] left-[-90] w-[110%] h-35 bg-gradient-to-b from-zinc-100 to-zinc-100 z-[1] rounded-b-3xl shadow-lg">  <Navbar className="top-2 " /></div>

        {children}
      </div>
      </main>
    </SidebarProvider>
    </div>
  );
}
