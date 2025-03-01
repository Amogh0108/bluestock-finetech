import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { APIKeyTable } from "@/components/api-key-table"

export default function APIManagerPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">API Manager</h1>

      <Card>
        <CardHeader>
          <CardTitle>Generate API Key</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="key-name">API Key Name</Label>
            <Input type="text" id="key-name" placeholder="My API Key" />
          </div>
          <Button>Generate New API Key</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your API Keys</CardTitle>
        </CardHeader>
        <CardContent>
          <APIKeyTable />
        </CardContent>
      </Card>
    </div>
  )
}

