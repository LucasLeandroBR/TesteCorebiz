import React, { useEffect, useState } from 'react'
import 'react-rater/lib/react-rater.css'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import axios from 'axios'
import ReactStars from 'react-stars'

function Vitrine() {
  const [vitrine, setVitrine] = useState([])

  async function initializeAsync() {
    try {
      const res = await axios.get('https://corebiz-test.herokuapp.com/api/v1/products');
      console.log(res.data)
      setVitrine(res.data);
    } catch (err) {
      console.log('err', err);
    }
  }

  useEffect(() => {
    initializeAsync();
  }, [vitrine])

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Splide
          options={{ rewind: true, perPage: 4, perMove: 1 }}
          onMoved={(splide, newIndex) => {
            console.log('moved', newIndex)
          }}
          width="80%"
          fixedHeight="8rem"
        >


          {vitrine.map((data, key) => {
            return (
              <SplideSlide>
                <div className="bg-white " key={key}>
                  <div className="grid grid-cols-auto grid-rows-1 py-8 px-4">
                    <div className="">
                      <div className="flex items-center rounded-t-3xl justify-between bg-white p-6">
                        <CarouselProvider
                          naturalSlideWidth={50}
                          naturalSlideHeight={125}
                          totalSlides={3}
                          isIntrinsicHeight={true}
                          infinite={true}
                          className="flex  items-center justify-between w-full"
                        >
                          <img
                            alt={data.productName}
                            src={data.imageUrl}
                            className="w-30 h-46 "
                          />

                        </CarouselProvider>
                      </div>
                      <div className="flex flex-col items-center border-t p-6 bg-white hover:bg-gray-200 dark:bg-gray-800 rounded-b-3xl">
                        <h1 className="text-base font-medium leading-4 text-center text-gray-500 dark:text-gray-400">
                          {data.productName}
                        </h1>

                        <ReactStars count={5} value={data.stars} color2={'#ffd700'} edit={false} size={24} />

                        {data.listPrice && (
                          <h5 className="text-xl line-through font-semibold leading-6 text-center pt-3 text-gray-800 dark:text-gray-100">
                            de{' '}
                            {(data.listPrice / 100).toLocaleString('pt-br', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </h5>
                        )}

                        <h3 className="text-2xl font-semibold leading-6 text-center pt-3 text-gray-800 dark:text-gray-100">
                          {' '}
                          Por{' '}
                          {(data.price / 100).toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </h3>

                        {data.installments.map(({ quantity, value }) => (
                          <h6 className="text-xs font-semibold leading-6 text-center pt-3 text-gray-800 dark:text-gray-100">
                            ou em {quantity} x
                            {(value / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                          </h6>
                        ))}
                        <div className="flex flex-col items-center justify-center pt-3">
                          <button className=" text-white bg-black border-black dark:text-white dark:bg-black border px-4 py-2 text-sm font-medium leading-3 rounded focus:outline-none mt-5 hover:opacity-50">
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </>
  )
}

export default Vitrine
