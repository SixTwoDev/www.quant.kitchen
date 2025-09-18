'use client'

import * as React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { EarlyAccessModal } from '../components/EarlyAccessModal'

export default function Home() {
  const [modalOpen, setModalOpen] = React.useState(false)

  return (
    <>
      <Head>
        <title>quant.kitchen - Precision-engineered Alpha</title>
        <meta name="description" content="Precision-engineered Alpha. Served Hot." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-dark flex flex-col justify-between p-8 md:p-12 lg:p-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent pointer-events-none" />

        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              quant
            </span>
            <span className="text-foreground">.</span>
            <span className="text-foreground">kitchen</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-gray-400 font-mono text-sm md:text-base tracking-wide"
          >
            ⚗️ Precision-engineered Alpha. Served Hot.
          </motion.p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto w-full text-center"
        >
          <div className="space-y-8">
            <div className="relative">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 blur-xl"
              />

              <div className="relative bg-charcoal/80 backdrop-blur-sm border border-charcoal-light rounded-lg p-8 md:p-12">
                <p className="font-mono text-2xl md:text-3xl font-semibold text-foreground">
                  👨‍🍳 We're still cooking
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block ml-1 w-0.5 h-7 md:h-8 bg-green-500 align-middle"
                  />
                </p>

                <p className="mt-4 text-gray-500 font-mono text-sm">
                  The kitchen's closed — for now.
                </p>
              </div>
            </div>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="pt-8"
            >
              <p className="font-mono text-xs text-gray-600">
                Something powerful is brewing in the depths of quantitative finance.
              </p>
              <p className="mt-2 font-mono text-xs text-gray-700">
                Are you ready to taste the future?
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <p className="font-mono text-xs text-gray-600">
            © 2025 QuantKitchen. All rights reserved.
          </p>

          <div className="mt-4 flex justify-center space-x-1">
            {['⚡', '🔥', '💎'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.9, 1.1, 0.9]
                }}
                transition={{
                  duration: 6,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="text-sm"
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.footer>

        <div className="fixed bottom-4 right-4 font-mono text-[8px] text-gray-800 tracking-widest opacity-50 select-none pointer-events-none">
          quant.kitchen
        </div>

        <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
      </main>
    </>
  )
}