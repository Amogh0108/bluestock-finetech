import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const subscriptions = {
  active: [
    {
      name: "Tech Innovations Ltd",
      category: "QIB",
      subscription: "2.5x",
      progress: 65,
      endDate: "2024-01-18",
    },
    {
      name: "Tech Innovations Ltd",
      category: "NII",
      subscription: "3.2x",
      progress: 75,
      endDate: "2024-01-18",
    },
    {
      name: "Tech Innovations Ltd",
      category: "Retail",
      subscription: "1.8x",
      progress: 45,
      endDate: "2024-01-18",
    },
  ],
  upcoming: [
    {
      name: "Green Energy Solutions",
      category: "QIB",
      subscription: "-",
      progress: 0,
      endDate: "2024-01-23",
    },
  ],
  closed: [
    {
      name: "Digital Payments Co",
      category: "QIB",
      subscription: "12.5x",
      progress: 100,
      endDate: "2024-01-13",
    },
  ],
}

export function SubscriptionTable({ status }: { status: keyof typeof subscriptions }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Subscription</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subscriptions[status].map((sub, idx) => (
          <TableRow key={`${sub.name}-${sub.category}`}>
            <TableCell className="font-medium">{sub.name}</TableCell>
            <TableCell>{sub.category}</TableCell>
            <TableCell>{sub.subscription}</TableCell>
            <TableCell className="w-[200px]">
              <Progress value={sub.progress} className="w-[80%]" />
            </TableCell>
            <TableCell>{sub.endDate}</TableCell>
            <TableCell>
              <Badge variant={status === "active" ? "success" : status === "upcoming" ? "secondary" : "default"}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

