
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
interface User {
  username: string;
  password: string;
}
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [users, setUsers] = useState<User[] | null>([{ username: "shviam", password: "shivam" },{ username: "john", password: "doe" },{ username: "jane", password: "doe" }]);    
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Features">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Deployment</HoveredLink>
            <HoveredLink href="#">Creation</HoveredLink>
            <HoveredLink href="#">Modification</HoveredLink>
            <HoveredLink href="#">download artifacts</HoveredLink>
            <HoveredLink href="#">Send Notification</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="  text-sm grid grid-cols-1gap-10 p-4 space-y-10">
            <ProductItem
              title="Integration Content"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Integration content enables you to read, update, deploy, or undeploy integration artifacts (such as integration flows) on a tenant.
 "
            />
            <ProductItem
              title="Security Content"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Security content enables you to get, write or delete various security content.  "
            />
            <ProductItem
              title="Message Processing Logs"
              href="#"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="enable you to store data about the messages processed on a tenant."
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
                <MenuItem setActive={setActive} active={active} item="Switch Account">
          <div className="flex flex-col space-y-4 text-sm">
            {users && users.map((user) => (
              <HoveredLink key={user.username} href="#">{user.username}</HoveredLink>
            ))}

            <HoveredLink href="/dashboard/settings"><span className="text-blue-900 font-bold">ADD SUBACCOUNT</span></HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
 function FieldInput() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" type="text" placeholder="Max Leiter" />
            <FieldDescription>
              Choose a unique username for your account.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
            <Input id="password" type="password" placeholder="********" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
export function ModifyTab() {
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
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Client Secret</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" type="password" />
              </div>
                 <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Token Url</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Tenant Url</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" type="text" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => {}}>ADD</Button>
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
                <Input id="tabs-demo-current" type="email" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Organization</Label>
                <Input id="tabs-demo-new" type="text" />
              </div>

            </CardContent>
            <CardFooter>
              <Button>ADD ACCOUNT</Button>
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
