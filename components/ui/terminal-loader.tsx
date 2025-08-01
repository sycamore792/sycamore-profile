"use client"

import { cn } from "@/lib/utils"

interface TerminalLoaderProps {
  text?: string
  className?: string
  width?: string | number
  height?: string | number
}

export function TerminalLoader({ 
  text = "Loading...", 
  className,
  width = 400,
  height = 200
}: TerminalLoaderProps) {
  const widthStyle = typeof width === 'number' ? `${width}px` : width
  const heightStyle = typeof height === 'number' ? `${height}px` : height

  return (
    <>
      <style jsx>{`
        @keyframes blinkCursor {
          50% {
            border-right-color: transparent;
          }
        }

        @keyframes typeAndDelete {
          0%, 10% {
            width: 0;
          }
          45%, 55% {
            width: ${text.length + 1}ch;
          }
          90%, 100% {
            width: 0;
          }
        }

        .terminal-typing {
          animation: typeAndDelete 4s steps(${text.length + 1}) infinite,
                     blinkCursor 0.5s step-end infinite alternate;
        }
      `}</style>

      <div 
        className={cn(
          "w-full overflow-hidden rounded-lg shadow-2xl",
          "bg-gray-900 border border-white/25",
          className
        )}
        style={{ 
          maxWidth: widthStyle, 
          height: heightStyle 
        }}
      >
        {/* Terminal Header */}
        <div className="relative flex items-center justify-center bg-gray-700 px-2 py-1.5">
          {/* Window Controls */}
          <div className="absolute left-2.5 flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          {/* Title */}
          <div className="text-sm text-gray-300 font-medium">Status</div>
        </div>

        {/* Terminal Content */}
        <div className="p-3">
          <div 
            className={cn(
              "inline-block whitespace-nowrap overflow-hidden",
              "border-r-2 border-green-400",
              "text-green-400 font-semibold font-mono",
              "terminal-typing"
            )}
          >
            {text}
          </div>
        </div>
      </div>
    </>
  )
}