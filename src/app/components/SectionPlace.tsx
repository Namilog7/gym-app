"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import { BsShop } from "react-icons/bs";
import { anton } from "../page";
import Image from "next/image";

export const SectionPlace = () => {

    return (
        <div className="divfather">
            <h2 className={`${anton.className} titles`} >NOSOTROS</h2>
            <div className="cardswiper">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                >
                    <SwiperSlide>
                        <Image
                            alt="gym2"
                            src={"/photogym2.jpg"}
                            width={500}
                            height={230}
                            priority={true}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/photogym1.jpg" alt="gym1" className="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/photogym3.jpg" alt="gym3" className="img" />
                    </SwiperSlide>
                </Swiper>
                <div className="data">
                    <div>
                        <h3>Nuestro local</h3>
                        <BsShop style={{ fontSize: "40px", color: "white" }} />
                    </div>
                    <div className="datatext">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet qui repellat vitae hic eum sunt quos natus magni voluptatem harum repudiandae, totam ad aperiam unde eligendi architecto animi. Amet!</p>
                    </div>
                </div>
            </div>
        </div >
    );
}