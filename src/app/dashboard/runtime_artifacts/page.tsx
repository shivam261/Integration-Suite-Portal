
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RuntimeTable from "@/runtimetable/page";
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
import path from "path";

export function DeleteRuntime() {
  const [id, setId] = useState<string>('');
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
      const response = await fetch('http://localhost:8000/integration_content/delete_runtime_artifacts_odata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          token: token,
          path:"/IntegrationRuntimeArtifacts('"+version+"')"
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
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Delete Runtime Artifact</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Runtime Artifact</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this runtime artifact? This action
              cannot be undone or undeploy the artifact
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="id-1">Version Id of Runtime Artifact</Label>
              <Input id="id-1" name="id" value={versionId} onChange={(e) => setVersionId(e.target.value)} />
            </div>
        
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={(e) => handleOnDelete(e)}>Delete Runtime Artifact</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
export function CreateIflow() {
  const [id, setId] = useState<string>('');
  const [versionId, setVersionId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [packageId, setPackageId] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const handleCreate = async (e: any) => {
    e.preventDefault();

   try {
      setIsLoading(true);
      setError('');
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');
      const version = versionId;
      const response = await fetch('http://localhost:8000/integration_content/create_integration_flow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          token: token,
          Name:name,
          Id:id,
          PackageId:packageId

        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        
        alert("Iflow Created Successfully")
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Creation failed' }));

        setError(errorData.message || ` Creation failed with status ${response.status}`);
        alert(errorData.message || ` Creation failed with status ${response.status}`);
      }
    } catch (error) {
              alert(error || ` Creation failed with status ${error}`);
      console.error('Creation error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Create IFLOW </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create IFLOW</DialogTitle>
            <DialogDescription>
  Create a new iflow in the system.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="id-11">ID</Label>
              <Input id="id-11" name="id" value={versionId} onChange={(e) => setVersionId(e.target.value)} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="id-111">Name</Label>
              <Input id="id-111" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="id-11">Package Id</Label>
              <Input id="id-11" name="id" value={packageId} onChange={(e) => setPackageId(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="outline" onClick={(e) => handleCreate(e)}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
export function DeleteIFLOW() {
  const [id, setId] = useState<string>('');
  const [versionId, setVersionId] = useState<string>('');


  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const handleDelete = async (e: any) => {
    e.preventDefault();

   try {
      setIsLoading(true);
      setError('');
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');
      const version = versionId;
      const response = await fetch('http://localhost:8000/integration_content/delete_iflow_by_id_odata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          token: token,
          path:"/IntegrationDesigntimeArtifacts(Id='"+id+"',Version='"+version+"')"

        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        
        alert("Iflow Created Successfully")
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Creation failed' }));

        setError(errorData.message || ` Creation failed with status ${response.status}`);
        alert(errorData.message || ` Creation failed with status ${response.status}`);
      }
    } catch (error) {
      alert(error || ` Creation failed with status ${error}`);
      console.error('Creation error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Delete IFLOW </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete IFLOW</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this IFLOW?
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="id-11">ID</Label>
              <Input id="id-11" name="id" value={versionId} onChange={(e) => setVersionId(e.target.value)} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="id-12">Version</Label>
              <Input id="id-12" name="version" value={versionId} onChange={(e) => setVersionId(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={(e) => handleDelete(e)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
export function DownloadIFLOW() {
  const [id, setId] = useState<string>('');
  const [versionId, setVersionId] = useState<string>('');


  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const handleDelete = async (e: any) => {
    e.preventDefault();

   try {
      setIsLoading(true);
      setError('');
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');
      const version = versionId;
      const response = await fetch('http://localhost:8000/integration_content/download_iflow_zip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          token: token,
          path:"/IntegrationDesigntimeArtifacts(Id='"+id+"',Version='"+version+"')/$value"

        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        
        alert("Iflow Downloaded Successfully")
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Downloaded failed' }));

        setError(errorData.message || ` Download failed with status ${response.status}`);
        alert(errorData.message || ` Download failed with status ${response.status}`);
      }
    } catch (error) {
      alert(error || ` Download failed with status ${error}`);
      console.error('Download error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Download </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Download Details</DialogTitle>
            <DialogDescription>
              enter verification details to download the iflow
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="id-111">ID</Label>
              <Input id="id-11" name="id" value={versionId} onChange={(e) => setVersionId(e.target.value)} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="id-121">Version</Label>
              <Input id="id-12" name="version" value={versionId} onChange={(e) => setVersionId(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="outline" onClick={(e) => handleDelete(e)}>Download</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
export function DeployIFLOW() {
  const [id, setId] = useState<string>('');
  const [versionId, setVersionId] = useState<string>('');


  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const handleDelete = async (e: any) => {
    e.preventDefault();

   try {
      setIsLoading(true);
      setError('');
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');
      const version = versionId;
      const response = await fetch('http://localhost:8000/integration_content/deploy_iflow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          token: token,
          Id:id,
          Version:version,
          path:"/IntegrationDesigntimeArtifacts(Id='"+id+"',Version='"+version+"')/$value"

        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        
        alert("Iflow Downloaded Successfully")
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Downloaded failed' }));

        setError(errorData.message || ` Download failed with status ${response.status}`);
        alert(errorData.message || ` Download failed with status ${response.status}`);
      }
    } catch (error) {
      alert(error || ` Download failed with status ${error}`);
      console.error('Download error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Deploy Iflow</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Deploy Details</DialogTitle>
            <DialogDescription>
              enter verification details to deploy the iflow
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="id-111">ID</Label>
              <Input id="id-11" name="id" value={versionId} onChange={(e) => setVersionId(e.target.value)} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="id-121">Version</Label>
              <Input id="id-12" name="version" value={versionId} onChange={(e) => setVersionId(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="outline" onClick={(e) => handleDelete(e)}>Deploy Iflow</Button>
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
          <DeleteRuntime />
          <CreateIflow />
          <DeleteIFLOW />
          <DownloadIFLOW />
          <DeployIFLOW />
        </div>
        </div>
        <div className="flex-2">
           <RuntimeTable/>
        </div>
      </div>
      </>
  );
}
