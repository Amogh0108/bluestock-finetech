import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const allotments = [
  {
    name: "Tech Innovations Ltd",
    applicant: "John Doe",
    shares: 50,
    status: "Allotted",
    date: "2024-01-15",
  },
  {
    name: "Green Energy Solutions",
    applicant: "Jane Smith",
    shares: 75,
    status: "Processing",
    date: "2024-01-14",
  },
  {
    name: "Digital Payments Co",
    applicant: "Mike Johnson",
    shares: 100,
    status: "Not Allotted",
    date: "2024-01-13",
  },
]

export function AllotmentTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company Name</TableHead>
          <TableHead>Applicant Name</TableHead>
          <TableHead>Shares Applied</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allotments.map((allotment) => (
          <TableRow key={`${allotment.name}-${allotment.applicant}`}>
            <TableCell className="font-medium">{allotment.name}</TableCell>
            <TableCell>{allotment.applicant}</TableCell>
            <TableCell>{allotment.shares}</TableCell>
            <TableCell>
              <Badge
                variant={
                  allotment.status === "Allotted"
                    ? "success"
                    : allotment.status === "Processing"
                      ? "secondary"
                      : "destructive"
                }
              >
                {allotment.status}
              </Badge>
            </TableCell>
            <TableCell>{allotment.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

