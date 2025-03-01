"use client"

import { useEffect, useRef } from "react"

export function DashboardStats() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 400
    canvas.height = 400

    // Draw circles
    const drawCircle = (x: number, y: number, radius: number, color: string, text: string, subtext: string) => {
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, 2 * Math.PI)
      ctx.fillStyle = color
      ctx.fill()

      // Add text
      ctx.fillStyle = "white"
      ctx.font = "bold 24px Inter"
      ctx.textAlign = "center"
      ctx.fillText(text, x, y)

      ctx.font = "14px Inter"
      ctx.fillText(subtext, x, y + 20)
    }

    // Draw the circles
    drawCircle(200, 200, 80, "#FF9F43", "30", "Total IPO")
    drawCircle(120, 150, 60, "#4E73F8", "9", "IPO in Loss")
    drawCircle(120, 250, 60, "#20C997", "20", "IPO in Gain")
  }, [])

  return <canvas ref={canvasRef} className="max-w-full h-auto" />
}

