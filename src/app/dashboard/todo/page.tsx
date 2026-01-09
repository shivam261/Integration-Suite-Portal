
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Iuser{
    name:string 
    timestamp: string;
}
export default function DashboardmmComponent() {

  const router = useRouter();
function addTodo(prop:Iuser[]){
    setTodolist([...todolist,...prop]);
}
function removeTodo(index:number){
    const newTodoList = todolist.filter((_, i) => i !== index);
    setTodolist(newTodoList);
}
function removeTodoByName(name:string){
    const newTodoList = todolist.filter((item) => item.name !== name);
    setTodolist(newTodoList);
}
const [todolist, setTodolist] = useState<Iuser[]>([]);

const [newTodo,setTodo]= useState<string>("");

  return (
    <div className="relative w-full min-h-screen">

      
      {/* Main content container with top padding for navbar */}
      
      <div className="pt-20 px-4 mt-11 ">
        {/* Flex row container */}
        hi
        {
          todolist.map((item, index) => (
            <div  className="space-x-2" key={index}>{item.name}{item.timestamp}
            <button className="bg-amber-300"onClick={() => removeTodoByName(item.name)}>Remove</button>
            </div>
          ))
        }

      </div>
      
        
        <div>
            <input type="text" value={newTodo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={() => addTodo([{name:newTodo, timestamp: new Date().toLocaleString()}])}>Add Todo</button>


        </div>
        /* we will pass name and you need to remove that from todo list */
        <input type="text" value={newTodo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={() => removeTodo(0)}>Remove First Todo</button>    
        
        
    </div>
  );
}
