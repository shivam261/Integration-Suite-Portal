"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";



const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export default function DashboardComponent() {

  const router = useRouter();
// we will fecth data from backend and store them in local storage 

// get request for getting all integration packages in xml 
  useEffect(() => {
    const fetchPackages = async () => {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:8000/integration_content/integration_packages_odata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          username: username,
          token: token,
        }),
        });

        if (response.ok) {
          const data = await response.text();
          localStorage.setItem('integrationpackages', data);


          // Store the fetched packages in local storage

        } else {
          console.error('Failed to fetch packages');
        }
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };
    if(localStorage.getItem('token')){
      fetchPackages();
    }
  },[])
  // get all the deployed runtime artifacts in xml 
  useEffect(() => {
    const getAllRuntimeArtifacts = async () => {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:8000/integration_content/get_runtime_artifacts_odata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          username: username,
          token: token,
        }),
        });

        if (response.ok) {
          const data = await response.text();
          localStorage.setItem('runtimeArtifacts', data);
          // Store the fetched packages in local storage

        } else {
          console.error('Failed to fetch runtime artifacts');
        }
      } catch (error) {
        console.error('Error fetching runtime artifacts:', error);
      }
    };
    if(localStorage.getItem('token')){
      getAllRuntimeArtifacts();
    }
  },[])

  // get all value mapping 
  useEffect(() => {
    const getAllValueMapping = async () => {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:8000/integration_content/get_all_value_mapping', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          username: username,
          token: token,
        }),
        });

        if (response.ok) {
          const data = await response.text();
          localStorage.setItem('valueMappings', data);


          // Store the fetched packages in local storage

        } else {
          console.error('Failed to fetch value mapping packages');
        }
      } catch (error) {
        console.error('Error fetching value mapping packages:', error);
      }
    };
    if(localStorage.getItem('token')){
      getAllValueMapping();
    }
  },[])
  // get all message mapping 
  useEffect(() => {
        const getAllMessageMapping = async () => {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:8000/integration_content/get_all_message_mapping', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          username: username,
          token: token,
        }),
        });

        if (response.ok) {
          const data = await response.text();
          localStorage.setItem('messageMappings', data);


          // Store the fetched packages in local storage

        } else {
          console.error('Failed to fetch packages');
        }
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };
    if(localStorage.getItem('token')){
      getAllMessageMapping();
    }
  },[])
  
  // get all message processing logs 
  useEffect(() => {
    const getAllMessageProcessingLogs = async () => {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:8000/message_processing_logs/get_logs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            token: token,
          }),
        });

        if (response.ok) {
          const data = await response.text();
          localStorage.setItem('messageProcessingLogs', data);
        } else {
          console.error('Failed to fetch message processing logs');
        }
      } catch (error) {
        console.error('Error fetching message processing logs:', error);
      }
    };
    if (localStorage.getItem('token')) {
      getAllMessageProcessingLogs();
    }
  }, []);
  // get count of message processing logs
  useEffect(() => {
    const getMessageProcessingLogCount = async () => {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:8000/message_processing_logs/get_log_count', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            token: token,
          }),
        });

        if (response.ok) {
          // body is type text/plain
          const data = await response.text();
          localStorage.setItem('messageProcessingLogCount', data);
        } else {
          console.error('Failed to fetch message processing log count');
        }
      } catch (error) {
        console.error('Error fetching message processing log count:', error);
      }
    };
    if (localStorage.getItem('token')) {
      getMessageProcessingLogCount();
    }
  },[]);  
  //get all user credentials 
  useEffect(() => {
    const getAllUserCredentials = async () => {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:8000/auth/security_content/get_all_user_credentials', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            token: token,
          }),
        });

        if (response.ok) {
          const data = await response.text();
          localStorage.setItem('userCredentials', data);
        } else {
          console.error('Failed to fetch user credentials');
        }
      } catch (error) {
        console.error('Error fetching user credentials:', error);
      }
    };
    if (localStorage.getItem('token')) {
      getAllUserCredentials();
    }
  }, []);
  return (

<>

      {/* prepare flex box with 2 rows . in forst row write welcome to integration dashboard . in 2 row keep skeleton for 4 cards */}
<div className="flex flex-col items-center justify-center space-y-4 mt-[20%]  ">
  <h1 className="text-5xl font-bold text-center  whitespace-nowrap">Welcome to Integration Dashboard</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl px-4">
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
</div>
</>

  );
}
