import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Intro from '@/components/intro';

const Home: React.FC = () => {

  const [introSeen, setIntroSeen] = useState(false);

  const finishIntro = async() => {
    setIntroSeen(true);
  }

  return (
    <>
    {!introSeen ? (
      <Intro onFinish={finishIntro} />
    ) : (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className='pl-5'>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <section className='p-10'>
            <div>
              <h1 className='hover:underline max-w-min'>
                Characters
              </h1>
            </div>
            <div>
              <Carousel className="w-full max-w-full">
                <CarouselContent>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </section>
          <section className='p-10'>
            <div>
              <h1 className='hover:underline max-w-min'>
                Campaigns
              </h1>
            </div>
            <div>
              <Carousel className="w-full max-w-full">
                <CarouselContent>
                  {Array.from({ length: 2 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </section>
        </IonContent>
        {/* gonna have to figure out how to do a bottom tab navbar for mobile while having a sidebar on desktop */}
        <IonFooter>
          <IonToolbar className='pl-5'>
            temp
          </IonToolbar>
        </IonFooter>
      </IonPage>
    )}
    </>
  );
};

export default Home;