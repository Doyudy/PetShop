"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock} from 'lucide-react'
import { WhatsappLogoIcon} from '@phosphor-icons/react'
import tutor1 from '../../public/tutor1.png'
import tutor2 from '../../public/tutor2.png'
import tutor3 from '../../public/tutor3.jpg'


import Image from 'next/image'

const feedback = [
    {
        content:
           "Desde que comecei a levar a Safira para o banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos",
           author: "Juliana",
           role: "Tutora da Safira (Shih Tzu)",
           image: tutor3,
    },
    {
        content:
           "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Spike estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! sem dúvida, o melhor petshop da região.",
           author: "Diogo",
           role: "tutor do Spike (Pinscher)",
           image: tutor1,
    },
    {
        content: 
           "Meus Gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
           author: "Edinalva",
           role: "Tutora da Mel e da Moana",
           image: tutor2,
    }
]

export function Feedback() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">

                    <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down" data-aos-delay="500">Depoimentos</h2>

                    <div className="relative max-w-4xl mx-auto">

                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {feedback.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 px-3" data-aos="fade-left" data-aos-delay="500">
                                        <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex-col">

                                        <div className='flex flex-col items-center text-center space-y-4' data-aos="fade-left" data-aos-delay="500">
                                            <div className='relative w-24 h-24' data-aos="fade-left" data-aos-delay="500">
                                                <Image
                                                  src={item.image}
                                                  alt={item.content}
                                                  fill
                                                  sizes='96px'
                                                  className='object-cover rounded-full'
                                                />
                                            </div>

                                            <p className='text-gray-200 select-none' data-aos="fade-left" data-aos-delay="500">{item.content}</p>

                                            <div>
                                              <p className='font-bold select-none' data-aos="fade-left" data-aos-delay="500">{item.author}</p>
                                              <p className='text-sm font-gray-400 select-none' data-aos="fade-up-left" data-aos-delay="300">{item.role}</p>
                                            </div>                                            
                                                                                    
                                        </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                            onClick={scrollPrev}
                            data-aos="fade-left" data-aos-delay="300"
                            >
                            <ChevronLeft className='w-6 h-6 text-gray-700 cursor-pointer'/>
                        </button>

                        <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                            onClick={scrollNext}
                            data-aos="fade-right" data-aos-delay="300"
                            >
                            <ChevronRight className='w-6 h-6 text-gray-700 cursor-pointer'/>
                        </button>

                    </div>  

            </div>
        </section>
    )
}