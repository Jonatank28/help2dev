import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MdFeedback } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import FormFeedBack from './FormFeedBack'
import { useLocale } from 'next-intl'

const FeedBack = () => {
  const [showFeedback, setShowFeedback] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const pathName = usePathname()
  const locale = useLocale()

  useEffect(() => {
    setShowFeedback(true)

    const timer = setTimeout(() => {
      setShowFeedback(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [pathName])

  if (pathName == `/${locale}`) return null

  return (
    <>
      <FormFeedBack open={openModal} onClose={() => setOpenModal(false)} />
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild onClick={() => setOpenModal(true)}>
            <motion.div
              className="bg-secondary opacity-40 hover:opacity-100 transition-colors text-sm cursor-pointer p-2 fixed bottom-0 right-2 z-50 flex items-center gap-2"
              initial={{ x: 120 }}
              animate={{ x: showFeedback ? 120 : 0 }}
              transition={{ duration: 1.5 }}
            >
              <MdFeedback />
              <h1>feedback</h1>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent className="bg-secondary text-white/80">
            <p>Suggestions, compliments, complaints</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}

export default FeedBack
