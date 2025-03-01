"use client"

import { useEffect, useRef } from "react"

export function MainBoardIpo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 300

    // Data for the donut chart
    const data = [
      { value: 15, color: "#4E73F8", label: "Upcomming" },
      { value: 25, color: "#6C87F9", label: "New Listed" },
      { value: 2, color: "#8E9FFA", label: "Ongoing" },
    ]

    const total = data.reduce((sum, item) => sum + item.value, 0)
    let startAngle = -0.5 * Math.PI

    // Draw the donut chart
    data.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.value) / total

      ctx.beginPath()
      ctx.arc(150, 150, 100, startAngle, startAngle + sliceAngle)
      ctx.lineTo(150, 150)
      ctx.fillStyle = item.color
      ctx.fill()

      startAngle += sliceAngle
    })

    // Create center hole for donut
    ctx.beginPath()
    ctx.arc(150, 150, 60, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()

    // Add center text
    ctx.fillStyle = "#1F2937"
    ctx.font = "bold 24px Inter"
    ctx.textAlign = "center"
    ctx.fillText("15", 150, 145)
    ctx.font = "12px Inter"
    ctx.fillText("IPO NSE & BSE", 150, 165)
  }, [])

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <canvas ref={canvasRef} className="max-w-[300px] h-auto" />
      <div className="flex gap-8">
        {[
          { label: "Upcomming", value: "15" },
          { label: "New Listed", value: "25" },
          { label: "Ongoing", value: "2" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-lg font-medium">{item.value}</div>
            <div className="text-sm text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

