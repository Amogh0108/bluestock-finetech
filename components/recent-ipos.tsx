import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const recentIpos = [
  {
    name: "Tech Innovations Ltd",
    issueSize: "₹1,200 Cr",
    price: "₹450-500",
    date: "2024-01-15",
    status: "Open",
    gain: "+45.2%",
  },
  {
    name: "Green Energy Solutions",
    issueSize: "₹800 Cr",
    price: "₹210-225",
    date: "2024-01-12",
    status: "Closed",
    gain: "+12.8%",
  },
  {
    name: "Digital Payments Co",
    issueSize: "₹2,500 Cr",
    price: "₹750-800",
    date: "2024-01-10",
    status: "Listed",
    gain: "+28.5%",
  },
]

export function RecentIPOs() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company Name</TableHead>
          <TableHead>Issue Size</TableHead>
          <TableHead>Price Band</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Listing Gain</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentIpos.map((ipo) => (
          <TableRow key={ipo.name}>
            <TableCell className="font-medium">{ipo.name}</TableCell>
            <TableCell>{ipo.issueSize}</TableCell>
            <TableCell>{ipo.price}</TableCell>
            <TableCell>{ipo.date}</TableCell>
            <TableCell>
              <Badge variant={ipo.status === "Open" ? "success" : ipo.status === "Closed" ? "secondary" : "default"}>
                {ipo.status}
              </Badge>
            </TableCell>
            <TableCell className="text-green-600">{ipo.gain}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

