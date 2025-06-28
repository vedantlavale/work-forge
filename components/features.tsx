'use client'
import React from 'react'
import { motion } from 'motion/react'

const features = [
  {
    icon: 'brain',
    title: 'AI-Powered Writing',
    description: 'Advanced AI models trained on millions of high-quality content pieces to generate human-like text.'
  },
  {
    icon: 'lightning',
    title: 'Lightning Fast',
    description: 'Generate complete articles, social posts, and marketing copy in seconds, not hours.'
  },
  {
    icon: 'users',
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time editing, comments, and shared brand guidelines.'
  },
  {
    icon: 'globe',
    title: 'Multi-Language',
    description: 'Create content in 50+ languages with native-level fluency and cultural understanding.'
  },
  {
    icon: 'sparkle',
    title: 'Brand Voice Training',
    description: 'Train the AI to match your unique brand voice and maintain consistency across all content.'
  },
  {
    icon: 'chart',
    title: 'Performance Analytics',
    description: 'Track engagement, conversions, and ROI with built-in analytics and optimization suggestions.'
  }
]

const IconComponent = ({ type }: { type: string }) => {
  const iconProps = {
    className: "w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }

  switch (type) {
    case 'brain':
      return (
        <svg {...iconProps}>
          <path d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 3 1.5 4C6 13.5 5 15.5 5 18c0 2.5 2.5 4 5.5 4s5.5-1.5 5.5-4c0-2.5-1-4.5-2.5-6 1-.5 1.5-2 1.5-4 0-3.5-2.5-6-6-6z"/>
        </svg>
      )
    case 'lightning':
      return (
        <svg {...iconProps}>
          <path d="M13 2L8.5 9H13l-2 11 8.5-9H15l2-9z"/>
        </svg>
      )
    case 'users':
      return (
        <svg {...iconProps}>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    case 'globe':
      return (
        <svg {...iconProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    case 'sparkle':
      return (
        <svg {...iconProps}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    case 'chart':
      return (
        <svg {...iconProps}>
          <path d="M3 3v18h18V3H3zm8 14H7v-6h4v6zm6 0h-4V9h4v8z"/>
        </svg>
      )
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      )
  }
}

export default function FeaturesSection() {
  return (
    <section className="relative z-10 py-20 px-6 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Powerful Features for Content Creators
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Everything you need to create, optimize, and scale your content strategy with AI
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-yellow-400">
                  <IconComponent type={feature.icon} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
