"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// need to add  name and version fields
export type RuntimeArtifacts = {
  id: string
  date: string// deployed on
  status: string
  type: string// type
  name: string// name
  version: string// version
  deployedby?: string
}


export const columns: ColumnDef<RuntimeArtifacts>[] = [
    {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className=" " />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = (row.getValue("status")as string);
      // if status id STARTED then green else red
      const color = status === "STARTED" ? "text-green-400" : "text-red-400";
      return <div className={`text-left font-medium ${color}`}>{status}</div>
    },

  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "version",
    header: "Version",
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Types
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    
  
  },
  {
    accessorKey: "date",
    header: ({ column }) => <div className="text-right"><Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Deployed On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button></div>,
    cell: ({ row }) => {
      const date:string = (row.getValue("date")as string);
      // only get  first 10 characters
      const formatted = date.toString().slice(0, 10);
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
    {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy Version ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Deployed By: {payment.deployedby}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]