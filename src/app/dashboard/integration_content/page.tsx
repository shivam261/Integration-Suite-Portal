
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  username: string;
  password: string;
}
import DemoicPage from "@/ictable/page";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export function AddIntegrationPackage() {
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [shortText, setShortText] = useState<string>('');
  const [version, setVersion] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const [user, setUser] = useState<User>({ username: '', password: '' });
  const handleOnsubmit = async (e: any) => {
    e.preventDefault();

   try {
      setIsLoading(true);
      setError('');
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');

      const response = await fetch('http://localhost:8000/integration_content/create_integration_packages_odata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user.username,
          token: token,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        

      } else {
        const errorData = await response.json().catch(() => ({ message: 'Creation failed' }));
        setError(errorData.message || `Creation failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Creation error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <Dialog>
      <form onSubmit={handleOnsubmit}>
        <DialogTrigger asChild>
          <Button variant="outline" className="text-lg"> Create Integration Package</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Integration Package</DialogTitle>
            <DialogDescription>
              Enter the details to create a new integration package.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="id-1">Id</Label>
              <Input id="id-1" name="id" placeholder="Enter Id" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
                        <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
                        <div className="grid gap-3">
              <Label htmlFor="Description">Description</Label>
              <Input id="Description" name="Description" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
                        <div className="grid gap-3">
              <Label htmlFor="ShortText">ShortText</Label>
              <Input id="ShortText" name="ShortText" placeholder="Enter ShortText" value={shortText} onChange={(e) => setShortText(e.target.value)} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="Version">Version</Label>
              <Input id="Version" name="Version" placeholder="Enter Version" value={version} onChange={(e) => setVersion(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={(e) => handleOnsubmit(e)}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
export function DeletePackage() {

  const [versionId, setVersionId] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');


  const handleOnDelete = async (e: any) => {
    e.preventDefault();

   try {
      setIsLoading(true);
      setError('');
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');
      const version = versionId;
      const response = await fetch('http://localhost:8000/integration_content/delete_integration_packages_odata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          token: token,
          path:"/IntegrationPackages('"+version+"')"
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        

      } else {
        const errorData = await response.json().catch(() => ({ message: 'Deletion failed' }));

        setError(errorData.message || ` Deletion failed with status ${response.status}`);
        alert(errorData.message || ` Deletion failed with status ${response.status}`);
      }
    } catch (error) {
              alert(error || ` Deletion failed with status ${error}`);
      console.error('Deletion error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <Dialog>
      <form onSubmit={handleOnDelete}>
        <DialogTrigger asChild>
          <Button variant="outline" className="text-lg"> Delete Integration Package</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Integration Package</DialogTitle>
            <DialogDescription>
  You Can delete Integration Package here. Click save when you&apos;re
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">

            <div className="grid gap-3">
              <Label htmlFor="Version">Version</Label>
              <Input id="Version" name="Version" placeholder="Enter Version to delete" value={versionId} onChange={(e) => setVersionId(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={(e) => handleOnDelete(e)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
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
      <div className="flex flex-col  gap-4 mb-4">
      <div className="flex-1">
        <div className="flex flex-row  gap-4">
        <AddIntegrationPackage/>
        <DeletePackage/>
        </div>
        </div>
        <div className="flex-2">
           <DemoicPage/>
        </div>
      </div>

</>

  );
}
