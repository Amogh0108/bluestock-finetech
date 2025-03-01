import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AllotmentSearch } from "@/components/allotment-search"
import { AllotmentTable } from "@/components/allotment-table"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AllotmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">IPO Allotment</h1>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Check Allotment Status</CardTitle>
        </CardHeader>
        <CardContent>
          <AllotmentSearch />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Allotments</CardTitle>
        </CardHeader>
        <CardContent>
          <AllotmentTable />
        </CardContent>
      </Card>
    </div>
  )
}

