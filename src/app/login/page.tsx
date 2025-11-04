
"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AppWindowIcon, CodeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from "@/components/ui/resizable-navbar";
export function NavbarDemo() {
  const navItems = [
    {
      name: "Integration Platform",
      link: "/",
    },
   
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="absolute w-full top-10">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" href="/login">User Authentication </NavbarButton>

          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}

                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

 
      {/* Navbar */}
    </div>
  );
} 
export function TabsDemo() {
  const [username, setUsername] = useState<string >("");
  const [password, setPassword] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('organization', data.organization);
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        router.push('/dashboard');
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Login failed' }));
        setError(errorData.message || `Login failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };
  const handleRegister = async () => {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          organization: organization,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log('Registration successful:', data);
        router.push('/login');
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Registration failed' }));
        setError(errorData.message || `Registration failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="flex w-1150 max-w-sm flex-col z-40 gap-6">

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="password">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
             Login to access your integration content details
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="username" >Username</Label>
                <Input id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleLogin} className="w-full">Login</Button>
            </CardFooter>
         
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Create a new account to access integration content.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="NewUsername">Username</Label>
                <Input id="NewUsername" placeholder="enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="NewPassword">Password</Label>
                <Input id="NewPassword" type="password" placeholder="enter password 8 digits" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="NewOrganization">Organization</Label>
                <Input id="NewOrganization" type="text" placeholder="enter organization" value={organization} onChange={(e) => setOrganization(e.target.value)} />
              </div>

            </CardContent>
            <CardFooter>
              <Button onClick={handleRegister} >Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export function GridBackgroundDemo() {
  return (
    <div className="relative flex flex-row h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <NavbarDemo />
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="relative z-20 bg-gradient-to-b mr-8 from-neutral-200 to-neutral-500 bg-clip-text py-8 text-xl font-bold text-transparent sm:text-7xl -ml-32">

        Tripathi
        <br></br> Cloud Integration
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <TabsDemo />
    </div>
  );
}
export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-row gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-4xl  flex flex-col font-bold dark:text-white text-center">
          <div>
               SAPIans Cloud Integration
          </div>

          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
         Sign in to access your integration content details
        </div>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
         <TabsDemo />
        </div>
    
      </motion.div>
    </AuroraBackground>
  );
}
export default function LoginComponent() {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSignupClick = () => {
    router.push('/login/signup');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Login response data:', data);
        

        const token = data.Token;
        


        
        // store username and token in localStorage  
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
        
        console.log('About to redirect to dashboard...');
        router.push('/dashboard');
        console.log('Redirect called');
      } else {
        const errorData = await response.json();
        console.log('Login error response:', errorData);
        setError(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
<div>
  <GridBackgroundDemo />
</div>
  );
}
