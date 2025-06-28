'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Brain, Users, Globe, Sparkles, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Writing',
    description: 'Advanced AI models trained on millions of high-quality content pieces to generate human-like text.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate complete articles, social posts, and marketing copy in seconds, not hours.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time editing, comments, and shared brand guidelines.'
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    description: 'Create content in 50+ languages with native-level fluency and cultural understanding.'
  },
  {
    icon: Sparkles,
    title: 'Brand Voice Training',
    description: 'Train the AI to match your unique brand voice and maintain consistency across all content.'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track engagement, conversions, and ROI with built-in analytics and optimization suggestions.'
  }
]

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
                <feature.icon className="w-6 h-6 text-yellow-400" />
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
