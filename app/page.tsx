import { DashboardStats } from "@/components/dashboard-stats"
import { QuickLinks } from "@/components/quick-links"
import { MainBoardIpo } from "@/components/main-board-ipo"
import { LatestIPOListings } from "@/components/latest-ipo-listings"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Activity, Calendar } from "lucide-react"
import { RecentIPOs } from "@/components/recent-ipos"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Select Date Range
          </Button>
          <Button size="sm">Download Report</Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Active IPOs</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">30</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Listing Gain</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+42.5%</div>
            <p className="text-xs text-muted-foreground">+15.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscription Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85.3x</div>
            <p className="text-xs text-muted-foreground">+12.3x from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Loss</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-8.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* IPO Dashboard Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>IPO Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-2 mb-4">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  20
                </span>
                <span className="text-gray-600">IPO in Gain</span>
              </div>
              <DashboardStats />
            </CardContent>
          </Card>
        </div>

        {/* Quick Links Section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Access important market resources</p>
              <QuickLinks />
            </CardContent>
          </Card>
        </div>

        {/* Recent IPOs Table */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent IPOs</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <RecentIPOs />
            </CardContent>
          </Card>
        </div>

        {/* Main Board IPO Section */}
        <div>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Main Board IPO</CardTitle>
                <p className="text-sm text-muted-foreground">From 01 Jan 2024</p>
              </div>
              <Button variant="ghost" size="sm">
                View Report
              </Button>
            </CardHeader>
            <CardContent>
              <MainBoardIpo />
            </CardContent>
          </Card>
        </div>
      </div>
      <LatestIPOListings />
    </div>
  )
}

