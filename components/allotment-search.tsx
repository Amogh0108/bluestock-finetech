import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AllotmentSearch() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select IPO" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tech">Tech Innovations Ltd</SelectItem>
            <SelectItem value="green">Green Energy Solutions</SelectItem>
            <SelectItem value="digital">Digital Payments Co</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="PAN Number" />
        <Input placeholder="Application Number" />
      </div>
      <Button className="w-full md:w-auto">Check Status</Button>
    </div>
  )
}

