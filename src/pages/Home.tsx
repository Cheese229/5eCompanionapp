import { IonButtons, IonContent, IonFooter, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

// temp database to test character list
import db from "@/tempdb/characters.json";
import { character } from "@/tempmodel/character";
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle className='pl-5'>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {/* Character list */}
          <section className='p-2'>
            <div>
              <Link to='/app/characters' style={{ textDecoration: 'none', color: 'white'  }}>
                <h1 className='hover:underline max-w-min'>
                  Characters
                </h1>
              </Link>
            </div>
            <div>
              {/* shadcn carousel. temp items just array of numbers. will hook up to a json file with characters */}
              <Carousel className="w-full max-w-full">
                <CarouselContent>
                  {/* {Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))} */}
                  {db.character.map((ch: character, i: number) => {
                    return (
                    <CarouselItem key={i} className="basis-1/2 md:basis-1/3">
                      <div className="p-1">
                        <Card className='hover:bg-neutral-200 max-h-50 lg:max-h-80'>
                          <CardContent className="flex aspect-square items-center justify-left p-4 grid grid-rows-3"> 
                            <div className='grid grid-rows-4 p-5'>
                              <p className="text-xl row-span-2">{ch.name}</p>
                              <p className='text-sm'>{ch.race} / {ch.class}</p>
                              <p className='text-sm'>{ch.level} / {ch.alignment}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )})}
                </CarouselContent>
              </Carousel>
            </div>
          </section>
          {/* Campaign list */}
          <section className='p-2'>
            <div>
              <h1 className='hover:underline max-w-min'>
                Campaigns
              </h1>
            </div>
            <div>
              {/* also hook up to a json file for campaigns */}
              <Carousel className="w-full max-w-full">
                <CarouselContent>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                      <div className="p-1">
                        <Card className='hover:bg-neutral-200 max-h-50 lg:max-h-80'>
                          <CardContent className="flex aspect-square items-center justify-center">
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
          {/* need to add homebrew and other content etc. */}
          {/* Homebrew content */}
          <section className='p-2'>
            <div>
              <h1 className='hover:underline max-w-min'>
                Homebrew
              </h1>
            </div>
            <div>
              {/* also hook up to a json file */}
              <Carousel className="w-full max-w-full">
                <CarouselContent>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                      <div className="p-1">
                        <Card className='hover:bg-neutral-200 max-h-50 lg:max-h-80'>
                          <CardContent className="flex aspect-square items-center justify-center">
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
        {/* gonna have to figure out how to do a bottom tab navbar for mobile while having a sidebar on desktop. if not, current sidebar is not bad*/}
        <IonFooter>
          <IonToolbar className='pl-5'>
            temp footer
          </IonToolbar>
        </IonFooter>
      </IonPage>
  );
};

export default Home;