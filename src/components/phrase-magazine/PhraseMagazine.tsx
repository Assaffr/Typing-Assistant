import styles from '@/styles/components/PhreaseMagazine.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css';

// swiper core styles
import 'swiper/swiper.min.css';

const PhraseMagazine = () => {
    return (
        <div className={styles.MagazineBox}>
            <Swiper slidesPerView={`auto`}>
                <SwiperSlide>123</SwiperSlide>
                <SwiperSlide>456</SwiperSlide>
                <SwiperSlide>789</SwiperSlide>
                <SwiperSlide>12346</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PhraseMagazine;
