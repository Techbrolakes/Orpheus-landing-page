// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

export default function Nft() {
  return (
    <div className="container space-y-12">
      <article className="flex justify-end gap-8 items-center uppercase text-4xl font-bold">
        <h1 className="lin">Recent Nft</h1>
        <img src="/line.png" alt="line" className="inline" />
        <p className="text-xl font-light opacity-75">VIEW MORE</p>
      </article>

      <Swiper
        className="grid grid-cols-3 gap-12 cursor-pointer mySwiper"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div>
            <img src="/Frame4.png" alt="NFT" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src="/Frame5.png" alt="NFT" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src="/Frame6.png" alt="NFT" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src="/Frame4.png" alt="NFT" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src="/Frame6.png" alt="NFT" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
