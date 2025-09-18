'use client'

import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface EarlyAccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EarlyAccessModal({ open, onOpenChange }: EarlyAccessModalProps) {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    await new Promise(resolve => setTimeout(resolve, 1500))

    setStatus('success')
    setEmail('')
    setTimeout(() => {
      onOpenChange(false)
      setStatus('idle')
    }, 2000)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] bg-charcoal border border-charcoal-light rounded-lg p-6 shadow-xl"
              >
                <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Dialog.Close>

                <div className="space-y-6">
                  <div>
                    <Dialog.Title className="text-xl font-mono font-semibold text-foreground">
                      Request Access
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-gray-400">
                      The kitchen is invite-only. Drop your email and we'll notify you when a seat opens up.
                    </Dialog.Description>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      disabled={status === 'submitting' || status === 'success'}
                      className="w-full px-3 py-2 bg-charcoal-dark border border-charcoal-light rounded-md text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent disabled:opacity-50 font-mono"
                    />

                    <button
                      type="submit"
                      disabled={status === 'submitting' || status === 'success'}
                      className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-700 text-black font-mono font-semibold rounded-md transition-colors duration-200 disabled:cursor-not-allowed"
                    >
                      {status === 'idle' && 'Join Waitlist'}
                      {status === 'submitting' && 'Processing...'}
                      {status === 'success' && '✓ Added to List'}
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center">
                    No spam. No tracking. Just alpha.
                  </p>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}