import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import images
import intro1 from '../assets/intro/intro1.png';
import intro2 from '../assets/intro/intro2.png';
import intro3 from '../assets/intro/intro3.png';
import { IonButton } from '@ionic/react';

import './intro.css';

interface ContainerProps {
    onFinish: () => void;
}

const Intro: React.FC<ContainerProps> = ( {onFinish} ) => {

    return (
        <div>
            {/* swiper element of images for intro. images are temp and will change to something better lol */}
            <Swiper>
                <SwiperSlide>
                    <img src={intro1} alt="Intro 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={intro2} alt="Intro 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={intro3} alt="Intro 3" />
                    <IonButton onClick={() => onFinish()}>Finish</IonButton>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Intro;