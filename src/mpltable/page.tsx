"use client"
import { useEffect } from "react"
import { columns, IntegrationPg } from "./columns"
import { DataTable } from "./data-table"
import React from "react"
import { log } from "console"



export default  function RuntimeTable() {

  const [artifacts, setArtifacts] = React.useState<IntegrationPg[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {



        const xmlText = localStorage.getItem('messageProcessingLogs') || ''; 

        
        // Parse XML and extract runtime artifacts data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        const entries = xmlDoc.getElementsByTagName('m:properties');
        const artifactsData: IntegrationPg[] = [];
        var total=0;
        for (let i = 0; i < entries.length; i++) {
          const id = entries[i].getElementsByTagName('d:Id')[0]?.textContent || '';
          const name = entries[i].getElementsByTagName('d:Name')[0]?.textContent || '';
          const guid = entries[i].getElementsByTagName('d:MessageGuid')[0]?.textContent || '';

          const loglevel = entries[i].getElementsByTagName('d:LogLevel')[0]?.textContent || '';
          const status = entries[i].getElementsByTagName('d:Status')[0]?.textContent || '';
          const type = entries[i].getElementsByTagName('d:Type')[0]?.textContent || '';
          const PackageId = entries[i].getElementsByTagName('d:PackageId')[0]?.textContent || '';

          total=total+1;
          artifactsData.push({
            id: id,
            name: name,
            guid: guid,
            status: status,
            type: type,
            loglevel: loglevel,
            pakageId: PackageId

          });
        }
        // store started and error count in localstorage
        //localStorage.setItem('total', total.toString());

          


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