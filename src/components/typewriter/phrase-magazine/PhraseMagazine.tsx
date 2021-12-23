import React, { useState } from 'react';

// Style
import styles from '@/styles/components/phrase-magazine/PhreaseMagazine.module.scss';
// https://web.archive.org/web/20210825021924/https://swiperjs.com/swiper-api

// Types
import SwiperClass from 'swiper/types/swiper-class';

// Components
import { Swiper, SwiperSlide } from 'swiper/react';
import ClayPhrase from './ClayPhrase';

type Props = {
    phrases: (number | string)[];
    activeBullet: number;
};

type PhraseMagazineType = React.FC<Props>;

const PhraseMagazine: PhraseMagazineType = ({ phrases, activeBullet }) => {
    const [controlledSwiper, setControlledSwiper] =
        useState<SwiperClass | null>(null);
    React.useEffect(() => {
        controlledSwiper?.slideTo(activeBullet);
    }, [activeBullet, controlledSwiper]);

    return (
        <div className={styles.magazineBox}>
            <Swiper
                slidesPerView={`auto`}
                centeredSlides={true}
                onSwiper={(swiper) => setControlledSwiper(swiper)}
            >
                {phrases.map((phrase, index) => (
                    <SwiperSlide
                        virtualIndex={index}
                        key={phrase}
                        className={styles.swiperSlide}
                    >
                        {({ isActive }) => (
                            <ClayPhrase isActive={isActive}>
                                {phrase}
                            </ClayPhrase>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PhraseMagazine;
