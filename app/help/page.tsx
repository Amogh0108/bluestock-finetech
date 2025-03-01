import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Help & Support</h1>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I check my IPO allotment status?</AccordionTrigger>
              <AccordionContent>
                You can check your IPO allotment status by going to the Allotment page, selecting the IPO, and entering
                your PAN number and application number.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is the subscription process for an IPO?</AccordionTrigger>
              <AccordionContent>
                To subscribe to an IPO, navigate to the IPO Subscription page, select the active IPO you wish to invest
                in, and follow the guided process to submit your application.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I get real-time IPO data?</AccordionTrigger>
              <AccordionContent>
                Real-time IPO data is available through our API. Visit the API Manager page to generate an API key and
                access our documentation for integration details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>If you need further assistance, please don't hesitate to contact our support team.</p>
          <Button>Contact Support</Button>
        </CardContent>
      </Card>
    </div>
  )
}

