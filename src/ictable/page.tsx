"use client"
import { useEffect } from "react"
import { columns, IntegrationPg } from "./columns"
import { DataTable } from "./data-table"
import React from "react"



export default  function DemoicPage() {

  const [artifacts, setArtifacts] = React.useState<IntegrationPg[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {

        
        
        const xmlText = localStorage.getItem('integrationpackages') || ''; 
        console.log('API Response (XML):of content', xmlText);
        
        // Parse XML and extract runtime artifacts data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        const entries = xmlDoc.getElementsByTagName('m:properties');
        const artifactsData: IntegrationPg[] = [];
        var total=0;
        for (let i = 0; i < entries.length; i++) {
          const id = entries[i].getElementsByTagName('d:Id')[0]?.textContent || '';
          const name = entries[i].getElementsByTagName('d:Name')[0]?.textContent || '';
          const version = entries[i].getElementsByTagName('d:Version')[0]?.textContent || '';
          const resourceId = entries[i].getElementsByTagName('d:ResourceId')[0]?.textContent || '';
          const createdby = entries[i].getElementsByTagName('d:CreatedBy')[0]?.textContent || '';
          const createdon = entries[i].getElementsByTagName('d:CreationDate')[0]?.textContent || '';
          const shorttext = entries[i].getElementsByTagName('d:ShortText')[0]?.textContent || '';
          const mode = entries[i].getElementsByTagName('d:Mode')[0]?.textContent || '';
          const modifiedby = entries[i].getElementsByTagName('d:ModifiedBy')[0]?.textContent || '';

          total=total+1;
          artifactsData.push({
            id: id,
            name: name,
            date: createdon,
            mode: mode,
            modifiedby: modifiedby,
            createdby: createdby,
            shorttext: shorttext,
            resourceId: resourceId,
            version: version,
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