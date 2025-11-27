"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

interface User {
  username: string;
  password: string;
}
export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [users, setUsers] = useState<User[] | null>([{ username: "shviam", password: "shivam" },{ username: "john", password: "doe" },{ username: "jane", password: "doe" }]); 
  // logic to get all users from same organization and set in users state
  useEffect(()=>{
    // logic to get all user from same oragnization and set in users state
    const fetchUsers = async () => {
      try {
        // Get organization from localStorage or use a default
        const organization = localStorage.getItem('organization') || 'default-org';

        const response = await fetch(`http://localhost:8000/auth/get_users_same_organization?organization=${organization}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          
          
          if (result) {
            setUsers(result.users);
          } else {
            console.error('Failed to fetch users:', result.message);
          }
        } else {
          console.error('API error:', response.status);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    if(localStorage.getItem('token')){   
      fetchUsers();
    }


  },[])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const handleSwitchUser = async (user: User) => {
 try {
      setIsLoading(true);
      setError('');

      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('username', user.username);
        localStorage.setItem('password', user.password);
        localStorage.setItem('organization', data.organization);
        if (data.token) {
          localStorage.setItem('token', data.token);
          // navigate to dashboard and reload the page
          window.location.href = '/dashboard';
          window.location.reload();
        }

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
  }   
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
              href="#"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Integration content enables you to read, update, deploy, or undeploy integration artifacts (such as integration flows) on a tenant.
 "
            />
            <ProductItem
              title="Security Content"
              href="#"
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
            <Link href="/dashboard/manage">Settings</Link>
            <HoveredLink href="#">Profile</HoveredLink>
          </div>
        </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Switch Account">
          <div className="flex flex-col space-y-4 text-sm">
            {users && users.map((user) => (
              <HoveredLink key={user.username} href="#"><button onClick={() => handleSwitchUser(user)}>{user.username}</button></HoveredLink>
            ))}

            <HoveredLink href="/dashboard/manage"><span className="text-blue-900 font-bold">ADD SUBACCOUNT</span></HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}