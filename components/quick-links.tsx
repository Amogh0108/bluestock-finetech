import Image from "next/image"
import Link from "next/link"

const links = [
  {
    title: "NSE India",
    href: "https://www.nseindia.com",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "BSE India",
    href: "https://www.bseindia.com",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "SEBI",
    href: "https://www.sebi.gov.in",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "Money Control",
    href: "https://www.moneycontrol.com",
    icon: "/placeholder.svg?height=40&width=40",
  },
]

export function QuickLinks() {
  return (
    <div className="space-y-4">
      {links.map((link) => (
        <Link key={link.title} href={link.href} className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50">
          <Image
            src={link.icon || "/placeholder.svg"}
            alt={link.title}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-medium">{link.title}</h3>
          </div>
          <span className="text-blue-600">Visit Now</span>
        </Link>
      ))}
    </div>
  )
}

