import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubscriptionTable } from "@/components/subscription-table"
import { SubscriptionStats } from "@/components/subscription-stats"

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">IPO Subscription</h1>

      <div className="grid gap-6">
        <SubscriptionStats />

        <Card>
          <CardHeader>
            <CardTitle>Subscription Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active" className="space-y-4">
              <TabsList>
                <TabsTrigger value="active">Active IPOs</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="closed">Closed</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
                <SubscriptionTable status="active" />
              </TabsContent>
              <TabsContent value="upcoming">
                <SubscriptionTable status="upcoming" />
              </TabsContent>
              <TabsContent value="closed">
                <SubscriptionTable status="closed" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

