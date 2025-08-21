import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { IonButtons, IonContent, IonFooter, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';

import db from "@/tempdb/characters.json";
import { character } from "@/tempmodel/character";

const CharacterList: React.FC = () => {

    // const router = useIonRouter();

    // const toChara = async (charasheet: string) => {
    //     // pushes to main app
    //     router.push(charasheet, 'forward');
    // }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='pl-5'>Characters</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <section>
                    <h1>My Characters</h1>
                    <div>
                        {/* shadcn carousel. temp items just array of numbers. will hook up to a json file with characters */}
                        <Carousel className="w-full max-w-full" orientation="vertical">
                            <CarouselContent>
                                {db.character.map((ch: character, i: number) => {
                                    return (
                                        <CarouselItem key={i} className="pt-3">
                                            <div className="p-1">
                                                <Card className='hover:bg-neutral-200'>
                                                    <CardContent className="flex items-center justify-left px-6 max-h-40 grid grid-rows-4">
                                                        <p className="text-xl row-span-2">{ch.name}</p>
                                                        <p className='text-sm'>{ch.race} / {ch.class}</p>
                                                        <p className='text-sm'>{ch.level} / {ch.alignment}</p>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    )})}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </section>
            </IonContent>
            <IonFooter>
                <IonToolbar className='pl-5'>
                    temp footer
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default CharacterList;