import Image from "next/image";
import about1Img from '../../public/about-1.png'
import about2Img from '../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#FDF6EC] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                      

                <div className="relative w-full h-[400] rounded-3xl overflow-hidden">
                    <Image
                      src={about1Img}
                      alt="Foto do Cachorro/Gato"
                      fill
                      quality={100}
                      className="object-cover hover:scale-110 duration-300"
                      priority
                    />
                </div>

                <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                    <Image
                      src={about2Img}
                      alt="Foto do Cachorro/Gato"
                      fill
                      quality={100}
                      priority
                    />
                </div>

                </div>

                <div className="space-y-6 mt-10" >
                    <h2 className="text-4xl font-bold" data-aos="fade-up-left" data-aos-delay="300">Sobre</h2>

                    <p className="text font-bold"data-aos="fade-up-right reload" data-aos-delay="300">
                      Acreditamos que pets não são apenas animais de estimação, são membros da família.
                      Por isso, nosso petshop nasceu com a missão de oferecer carinho, qualidade e dedicação em cada atendimento. Trabalhamos todos os dias para garantir que seu melhor amigo tenha uma vida mais saudável, feliz e cheia de amor.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500"/>
                            Aberto desde 2003
                        </li>
                    <li className="flex items-center gap-2">
                            <Check className="text-red-500"/>
                            Equipe com mais de 20 veterinários
                        </li>
                    <li className="flex items-center gap-2">
                            <Check className="text-red-500"/>
                            Qualidade é nossa prioridade.
                        </li>
                    </ul>

                <div className="flex gap-2">
                        <a 
                        data-aos="fade-left"
                        data-aos-delay="200"
                       target='_blank'
                       href={`https://wa.me/12547890?text=Olá vim pelo site e gostaria de mais informações`}
                    className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                    >
                        <WhatsappLogoIcon className="w-5 h-5 text-white"/>
                        Contato via WhatsApp
                    </a>

                    <a 
                    data-aos="fade-left"
                    data-aos-delay="200"
                    href="#"
                    className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                    >
                        <MapPin className="w-5 h-5 text-black"/>
                        Endereço da loja
                    </a>
                </div>

                </div>

                </div>  

            </div>
        </section>
    )
}