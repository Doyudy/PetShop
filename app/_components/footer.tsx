import royal from '../../public/royal.png'
import golden from '../../public/golden.png'
import primier from '../../public/primier.png'
import natural from '../../public/natural.png'
import whiskas from '../../public/whiskas.png'
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@phosphor-icons/react/dist/ssr'


const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier},
    { name: "Formula Natural", logo: natural},
    { name: "Whiskas", logo: whiskas},
]

export function Footer() {
    return(
        <section className='bg-[#E84C3D] py-16 text-white'>
            <div className='container mx-auto px-4'>

                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center' data-aos="fade-down" data-aos-delay="200">Nossos parceiros</h4>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8" data-aos="fade-right" data-aos-delay="500">
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                   src={item.logo}
                                   alt={item.name}
                                   width={100}
                                   height={50}
                                   quality={100}
                                   style={{
                                    width: "auto",
                                    height: "auto",
                                   }}
                                   className="object-contain"
                                />
                            </div>
                        ))}

                    </div>

                </div>

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2' data-aos="fade-right" data-aos-delay="200">PetShop</h3>
                        <p className='mb-4' data-aos="fade-right" data-aos-delay="200">Cuidando do seu melhor amigo com amor e dedicação.</p>
                        <a 
                        data-aos="fade-up" data-aos-delay="500"
                        target='_blank'
                        href={`https://wa.me/12547890?text=Olá vim pelo site e gostaria de mais informações`}
                        className='bg-green-500 px-4 py-2 rounded-md '
                        >
                            Contato via WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2' data-aos="fade-right" data-aos-delay="500">Contatos</h3>
                        <p data-aos="fade-up" data-aos-delay="200">Email: PetShop@banhos&tosas.com</p>
                        <p data-aos="fade-up" data-aos-delay="200">Telefone: (XX)1254-7890</p>
                        <p data-aos="fade-up" data-aos-delay="200">Rua X, centro, Atibaia | SP</p>  
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2' data-aos="fade-right" data-aos-delay="500">Redes sociais</h3>
                        <div className='flex gap-4'>
                            <a 
                            data-aos="fade-up" data-aos-delay="200"
                            href="#"
                            target='_blank'
                            >
                              <FacebookLogoIcon className='w-8 h-8'/>
                            </a>
                            <a 
                            data-aos="fade-up" data-aos-delay="300"
                            href="#"
                            target='_blank'
                            >
                              <InstagramLogoIcon className='w-8 h-8'/>
                            </a>
                            <a
                            data-aos="fade-up" data-aos-delay="400"
                            href="#"
                            target='_blank'
                            >
                              <TwitterLogoIcon className='w-8 h-8'/>
                            </a>
                        </div>
                    </div>

                </footer>

            </div>   
        </section>
    )
}