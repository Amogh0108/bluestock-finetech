import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="border-b px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              2
            </span>
          </button>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KtOeiudPT3nvty9CilykVYoaRihfm7.png" />
              <AvatarFallback>VS</AvatarFallback>
            </Avatar>
            <div>
              <span>Hi Tom Cruise</span>
              <span className="text-muted-foreground">▼</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

