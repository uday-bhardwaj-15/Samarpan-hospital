"use client"

import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, Users, Heart, ChevronLeft, ChevronRight } from "lucide-react"

const actions = [
  { icon: Phone, label: "24/7 Support", desc: "Round-the-clock assistance" },
  { icon: Calendar, label: "Book Appointment", desc: "Schedule in minutes" },
  { icon: Users, label: "Expert Doctors", desc: "Verified specialists" },
  { icon: Heart, label: "Health Records", desc: "All in one place" },
]

export default function QuickActions() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 0)
      setShowRightArrow(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10,
      )
    }
  }

  useEffect(() => {
    const ref = scrollRef.current
    ref?.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => ref?.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Left Arrow - Mobile/Tablet only */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 md:hidden"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible scrollbar-hide"
          >
            {actions.map((action, idx) => (
              <Card
                key={idx}
                className="flex-shrink-0 w-40 sm:w-48 md:w-auto hover:shadow-lg transition cursor-pointer"
              >
                <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                  <action.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mx-auto mb-2 sm:mb-3 text-blue-600" />
                  <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">{action.label}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{action.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Arrow - Mobile/Tablet only */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 md:hidden"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
