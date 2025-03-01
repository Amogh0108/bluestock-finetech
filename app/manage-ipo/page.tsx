import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IPOTable } from "@/components/ipo-table"
import { Plus, Download, Upload } from "lucide-react"

export default function ManageIPOPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Manage IPO</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add New IPO
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>IPO Listings</CardTitle>
        </CardHeader>
        <CardContent>
          <IPOTable />
        </CardContent>
      </Card>
    </div>
  )
}

