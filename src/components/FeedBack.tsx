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

const FeedBack = () => {
  const [showFeedback, setShowFeedback] = useState(false)
  const pathName = usePathname()

  useEffect(() => {
    setShowFeedback(true)

    const timer = setTimeout(() => {
      setShowFeedback(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [pathName])

  return (
    <TooltipProvider>
      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <motion.div
            className="bg-secondary cursor-pointer p-2 fixed bottom-0 right-2 z-50 flex items-center gap-2"
            initial={{ x: 20 }} // Posição inicial para a direita
            animate={{ x: showFeedback ? 0 : 90 }} // Animação para entrar e sair
            transition={{ duration: 1.5 }} // Duração da animação
          >
            <MdFeedback />
            <h1>feedback</h1>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Suggestions, compliments, complaints</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default FeedBack
