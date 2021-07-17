import React, { useEffect, useState } from 'react'
import 'react-rater/lib/react-rater.css'
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import axios from 'axios'

import ProductCard from '../productCard'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid'

function Vitrine() {
  const [vitrine, setVitrine] = useState([])

  async function initializeAsync() {
    try {
      const res = await axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
      console.log(res.data)
      setVitrine(res.data)
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    initializeAsync().then(r => console.log('rederizado'))
  }, [vitrine])

  return (
    <>
      <div className='max-w-7xl mx-auto mt-10'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={2}
          isIntrinsicHeight={true}
          infinite={true}
          className="relative"
        >
          <Slider className="">
            {vitrine.map((product, index) =>
              <Slide index={index}>
                <ProductCard className="w-full" product={product} />
              </Slide>
            )}
          </Slider>
          <ButtonBack className="px-5 h-12 grid place-items-center outline-none text-white absolute -left-6 top-1/2">
            <ArrowLeftIcon className="h-8 w-8 text-black"/>
          </ButtonBack>
          <ButtonNext className="px-5 h-12 grid place-items-center outline-none text-white absolute -right-6 top-1/2">
            <ArrowRightIcon className="h-8 w-8 text-black"/>
          </ButtonNext>
        </CarouselProvider>
      </div>
    </>
  )
}

export default Vitrine
