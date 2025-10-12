
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export function ModifyTab() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [client_id, setClientId] = useState<string>('');
  const [client_secret, setClientSecret] = useState<string>('');
  const [token_url, setTokenUrl] = useState<string>('');
  const [tenant_url, setTenantUrl] = useState<string>('');
  
  const [error, setError] = useState<string | null>(null);
  const handleCredentialsSubmit = async () => {
    const org = localStorage.getItem('organization');
    const usr= localStorage.getItem('username');
    const pwd= localStorage.getItem('password');
       try {

      setError('');

      const response = await fetch('http://localhost:8000/auth/update_user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usr,
          password: pwd,
          client_id: client_id,
          client_secret: client_secret,
          token_url: token_url,
          tenant_url: tenant_url,
          organization: org
        }),
      });

      if (response.status === 200) {
        const data = await response.json();

        if (data.token) {
          localStorage.setItem('token', data.token);
        }

      } else {
        const errorData = await response.json().catch(() => ({ message: 'Login failed' }));
        setError(errorData.message || `Login failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {

    }

  }
  const handleRegister = async () => {
    try {

      setError('');
      const organization = localStorage.getItem('organization');
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

      } else {
        const errorData = await response.json().catch(() => ({ message: 'Registration failed' }));
        setError(errorData.message || `Registration failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {

    }
  }
  return (
    <div className="flex w-1150 max-w-sm flex-col z-40 gap-6">

      <Tabs defaultValue="config">
        <TabsList>
          <TabsTrigger value="config">ADD Configurations</TabsTrigger>
          <TabsTrigger value="tenant">ADD TENANT ACCOUNT</TabsTrigger>
        </TabsList>
        <TabsContent value="config">
          <Card>
            <CardHeader>
              <CardTitle>ADD Credentials</CardTitle>
              <CardDescription>
                ADD Credentials to access your integration content details
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Client ID</Label>
                <Input id="tabs-demo-name" placeholder="Enter Client ID" value={client_id} onChange={(e) => setClientId(e.target.value)} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Client Secret</Label>
                <Input id="tabs-demo-username" placeholder="Enter Client Secret" type="password" value={client_secret} onChange={(e) => setClientSecret(e.target.value)} />
              </div>
                 <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Token Url</Label>
                <Input id="tabs-demo-name" placeholder="Enter Token Url" value={token_url} onChange={(e) => setTokenUrl(e.target.value)} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Tenant Url</Label>
                <Input id="tabs-demo-username" placeholder="Enter Tenant Url" type="text" value={tenant_url} onChange={(e) => setTenantUrl(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleCredentialsSubmit}>ADD Credentials</Button>
            </CardFooter>
         
          </Card>
        </TabsContent>
        <TabsContent value="tenant">
          <Card>
            <CardHeader>
              <CardTitle>ADD ACCOUNT</CardTitle>
              <CardDescription>
                Create a new account to access integration content.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Username</Label>
                <Input id="tabs-demo-current" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Password</Label>
                <Input id="tabs-demo-new" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>


            </CardContent>
            <CardFooter>
              <Button onClick={handleRegister}>ADD ACCOUNT</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default function DashboardComponent() {

  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const[started,setStarted]=useState<number>(0);
  const[error,setError]=useState<number>(0);
  const[mm,setMm]=useState<number>(0);
  const[tic,setTic]=useState<string>('');



  return (
   <>      
      {/* Main content container with top padding for navbar */}
      <div className="pt-20 px-4 mt-11 flex flex-row">
        {/* Flex row container */}
        <div>
           <ModifyTab />

        </div>
       <div>
        {/* Information Section */}
        <div className="ml-20 mt-10 w-[50%] space-y-10">
          <h2 className="text-3xl font-bold mb-4">Information</h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl">
           You can add configurations and tenant accounts using the form on the left.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-xl">
            Ensure that you have the necessary credentials before adding a new configuration. For tenant accounts, make sure to provide valid usernames and passwords.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-xl">
            If you encounter any issues, please refer to the documentation or contact support for assistance.
          </p>  
       </div>
       <div>
        {/* Information Section */}
        
        </div>  
        </div>
      </div>
        


</>
  );
}
