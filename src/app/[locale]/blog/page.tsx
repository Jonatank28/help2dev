'use client'

import { Button } from "@/components/ui/button"
import CustomCard from "./components/Card"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { highlights, general, mostRead } from "./data"
import { useState } from "react"


const PagePortfolio = () => {
  const [indexHighlight, setIndexHighlight] = useState(0)

  const nextHighlight = () => {
    if (indexHighlight < highlights.length - 1) {
      setIndexHighlight(indexHighlight + 1)
    } else {
      setIndexHighlight(0)
    }
  }

  const previousHighlight = () => {
    if (indexHighlight > 0) {
      setIndexHighlight(indexHighlight - 1)
    } else {
      setIndexHighlight(highlights.length - 1)
    }
  }


  return (
    <main>
      {/* <section className='widthDefault'> */}
      <section className='max-w-[1200px] mx-2 md:mx-auto '>
        <h1 className='text-3xl font-bold py-6'>Blog</h1>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-[5fr_2fr] gap-6 pb-8">
          <div className="space-y-4">
            <div className="relative">
              <CustomCard card={highlights[indexHighlight]} />
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <Button variant='outline' >
                  <BsArrowLeft onClick={previousHighlight} />
                </Button>
                <Button variant='outline'>
                  <BsArrowRight onClick={nextHighlight} />
                </Button>

              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {mostRead.map((card) => (
                <CustomCard key={card.id} card={card} />
              ))}
            </div>
          </div>
          <div className="hidden md:grid grid-cols-1 gap-4">
            {general.map((card) => (
              <CustomCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PagePortfolio


