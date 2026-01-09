"use client"
import { useEffect } from "react"
import { columns, RuntimeArtifacts } from "./columns"
import { DataTable } from "./data-table"
import React from "react"

function getData(): RuntimeArtifacts[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      date: "2025-09-15T14:48:00.000Z",
      status: "pending",
      type: "Integration flow",
      name: "Integration flow",
      version: "1.0.0",
      deployedby: "admin"
    },
    {
      id: "a4b1c2d3",
      date: "2023-08-10T09:30:00.000Z",
      status: "processing",
      type: "OData API",
      name: "OData API",
      version: "1.0.0",
      deployedby: "user1"
    },
    {
      id: "e5f6g7h8",
      date: "2024-01-20T16:15:00.000Z",
      status: "success",
      type: "Value mapping",
      name: "Value mapping",
      version: "1.0.0",
      deployedby: "user2"
    },
    {
      id: "i9j0k1l2",
      date: "2023-11-05T11:00:00.000Z",
      status: "failed",
      type: "Runtime Artifacts",
      name: "Runtime Artifacts",
      version: "1.0.0",
    },
    
    // ...
  ]
}

export default  function DemoPage() {

  const [artifacts, setArtifacts] = React.useState<RuntimeArtifacts[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        
        const response = await fetch('/api/integration-artifacts', {
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
        console.log('API Response (XML):', xmlText);
        
        // Parse XML and extract runtime artifacts data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        const entries = xmlDoc.getElementsByTagName('m:properties');
        const artifactsData: RuntimeArtifacts[] = [];
        var started=0;
        var error=0
        for (let i = 0; i < entries.length; i++) {
          const id = entries[i].getElementsByTagName('d:Id')[0]?.textContent || '';
          const name = entries[i].getElementsByTagName('d:Name')[0]?.textContent || '';
          const version = entries[i].getElementsByTagName('d:Version')[0]?.textContent || '';
          const Type = entries[i].getElementsByTagName('d:Type')[0]?.textContent || '';
          const DeployedBy = entries[i].getElementsByTagName('d:DeployedBy')[0]?.textContent || '';
          const DeployedOn = entries[i].getElementsByTagName('d:DeployedOn')[0]?.textContent || '';
          const Status = entries[i].getElementsByTagName('d:Status')[0]?.textContent || '';
          if(Status==="STARTED") started=started+1;
          if(Status==="ERROR") error=error+1;
          artifactsData.push({
            id: id,
            name: name,
            date: DeployedOn,
            status: Status,
            type: Type,
            version: version,
            deployedby: DeployedBy
          });
        }
        // store started and error count in localstorage
        localStorage.setItem('started', started.toString());
        localStorage.setItem('error', error.toString());
        // make the dummy data and set it in artifactsData
        for (let i = 1; i <= 50; i++) {
          artifactsData.push({
            id: `ID-${i}`,
            name: `Artifact-${i}`,      
            date: new Date().toISOString(),
            status: i % 2 === 0 ? 'success' : 'failed',
            type: i % 3 === 0 ? 'Integration flow' : 'OData API',
            version: '1.0.0',
            deployedby: `User-${i}`,
          });
        }

        setArtifacts(artifactsData);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchData();
  }, []);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={artifacts} />
    </div>
  )
}