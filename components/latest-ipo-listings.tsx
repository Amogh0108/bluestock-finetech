"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface IPO {
  id: string
  companyName: string
  openDate: string
  closeDate: string
  priceRange: string
  lotSize: number
}

const mockIPOData: IPO[] = [
  {
    id: "1",
    companyName: "Tech Innovators Inc.",
    openDate: "2024-03-01",
    closeDate: "2024-03-05",
    priceRange: "₹450-500",
    lotSize: 10,
  },
  {
    id: "2",
    companyName: "Green Energy Solutions",
    openDate: "2024-03-10",
    closeDate: "2024-03-14",
    priceRange: "₹300-340",
    lotSize: 15,
  },
  {
    id: "3",
    companyName: "HealthTech Dynamics",
    openDate: "2024-03-20",
    closeDate: "2024-03-24",
    priceRange: "₹600-650",
    lotSize: 8,
  },
]

async function fetchIPOs() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  // Uncomment the following line and replace with your actual API endpoint when ready
  // const response = await fetch('https://api.example.com/latest-ipos');
  // const data = await response.json();
  return mockIPOData
}

export function LatestIPOListings() {
  const [ipos, setIpos] = useState<IPO[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadIPOs() {
      try {
        setLoading(true)
        const data = await fetchIPOs()
        setIpos(data)
      } catch (err) {
        setError("Failed to load IPO data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadIPOs()
  }, [])

  if (loading) return <div>Loading latest IPO listings...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest IPO Listings</CardTitle>
        <p className="text-sm text-muted-foreground">(Mock data for demonstration purposes)</p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company Name</TableHead>
              <TableHead>Open Date</TableHead>
              <TableHead>Close Date</TableHead>
              <TableHead>Price Range</TableHead>
              <TableHead>Lot Size</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ipos.map((ipo) => (
              <TableRow key={ipo.id}>
                <TableCell>{ipo.companyName}</TableCell>
                <TableCell>{ipo.openDate}</TableCell>
                <TableCell>{ipo.closeDate}</TableCell>
                <TableCell>{ipo.priceRange}</TableCell>
                <TableCell>{ipo.lotSize}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

