"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// need to add  name and version fields
export type IntegrationPg = {
  id: string
  date: string// created on 
  mode : string
  modifiedby : string
  createdby : string
  name: string// name
  version: string// version

  shorttext?: string | ''
  resourceId: string | ''
}


export const columns: ColumnDef<IntegrationPg>[] = [
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
    accessorKey: "mode",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Mode
          <ArrowUpDown className=" " />
        </Button>
      )
    },
  

  },

  {
    accessorKey: "version",
    header: "Version",
  },
  {
    accessorKey: "createdby",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created BY
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
          Created On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button></div>,
    cell: ({ row }) => {
      const date:string = (row.getValue("date")as string);
      // date is in 1757311630754
      // convert it to normal date
      const formatted = new Date(parseInt(date)).toLocaleDateString().split('/').reverse().join('-');
      // date in yyyy-mm-dd
      // const formatted = new Date(parseInt(date)).toISOString().slice(0, 10);
      // const formatted = date.toString().slice(0, 10);

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
                        <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.resourceId)}
            >
              Copy Resource ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>created by: {payment.createdby}</DropdownMenuItem>
            <DropdownMenuItem>modified by: {payment.modifiedby}</DropdownMenuItem>
            <DropdownMenuItem>Short text: {payment.shorttext}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]