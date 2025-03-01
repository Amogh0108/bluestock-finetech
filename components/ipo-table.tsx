import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Edit, Trash2 } from "lucide-react"

const ipos = [
  {
    name: "Tech Innovations Ltd",
    issueSize: "₹1,200 Cr",
    price: "₹450-500",
    openDate: "2024-01-15",
    closeDate: "2024-01-18",
    status: "Open",
  },
  {
    name: "Green Energy Solutions",
    issueSize: "₹800 Cr",
    price: "₹210-225",
    openDate: "2024-01-20",
    closeDate: "2024-01-23",
    status: "Upcoming",
  },
  {
    name: "Digital Payments Co",
    issueSize: "₹2,500 Cr",
    price: "₹750-800",
    openDate: "2024-01-10",
    closeDate: "2024-01-13",
    status: "Closed",
  },
]

export function IPOTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company Name</TableHead>
          <TableHead>Issue Size</TableHead>
          <TableHead>Price Band</TableHead>
          <TableHead>Open Date</TableHead>
          <TableHead>Close Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ipos.map((ipo) => (
          <TableRow key={ipo.name}>
            <TableCell className="font-medium">{ipo.name}</TableCell>
            <TableCell>{ipo.issueSize}</TableCell>
            <TableCell>{ipo.price}</TableCell>
            <TableCell>{ipo.openDate}</TableCell>
            <TableCell>{ipo.closeDate}</TableCell>
            <TableCell>
              <Badge variant={ipo.status === "Open" ? "success" : ipo.status === "Upcoming" ? "secondary" : "default"}>
                {ipo.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <FileText className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

