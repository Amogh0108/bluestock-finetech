"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Settings, HelpCircle, Users, FileText, ClipboardCheck, KeyRound } from "lucide-react"

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/",
      },
      {
        title: "Manage IPO",
        icon: FileText,
        href: "/manage-ipo",
      },
      {
        title: "IPO Subscription",
        icon: ClipboardCheck,
        href: "/subscription",
      },
      {
        title: "IPO Allotment",
        icon: Users,
        href: "/allotment",
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        title: "Settings",
        icon: Settings,
        href: "/settings",
      },
      {
        title: "API Manager",
        icon: KeyRound,
        href: "/api",
      },
      {
        title: "Accounts",
        icon: Users,
        href: "/accounts",
      },
      {
        title: "Help",
        icon: HelpCircle,
        href: "/help",
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-gray-50/40 p-4">
      <div className="flex items-center gap-2 px-2 py-4">
        <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          BF
        </div>
        <span className="font-semibold">Bluestock Fintech</span>
      </div>
      <nav className="space-y-6 pt-4">
        {menuItems.map((section) => (
          <div key={section.title}>
            <h4 className="px-2 text-xs font-semibold text-gray-500 mb-2">{section.title}</h4>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-2 py-2 text-gray-500 transition-colors hover:text-gray-900 ${
                    pathname === item.href ? "bg-gray-100 text-gray-900" : ""
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}

