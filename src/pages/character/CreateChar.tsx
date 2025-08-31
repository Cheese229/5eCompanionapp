import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';

const CreateChar: React.FC = () => {

    const router = useIonRouter();

    const createChara = (event: any) => {
        event.preventDefault();
        console.log('created character');
        router.push('/app/characters', 'forward');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='px-5'>Create New Character</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form onSubmit={createChara}>
                    <IonInput labelPlacement='floating' label='Name:' ></IonInput>
                    <IonInput labelPlacement='floating' label='Race:' ></IonInput>
                    <IonInput labelPlacement='floating' label='Class:' ></IonInput>
                    <IonSelect label="Alignment:" placeholder="True Neutral">
                        <IonSelectOption value="Lawful Good">Lawful Good</IonSelectOption>
                        <IonSelectOption value="Lawful Neutral">Lawful Neutral</IonSelectOption>
                        <IonSelectOption value="Lawful Evil">Lawful Evil</IonSelectOption>
                        <IonSelectOption value="Neutral Good">Neutral Good</IonSelectOption>
                        <IonSelectOption value="True Neutral">True Neutral</IonSelectOption>
                        <IonSelectOption value="Neutral Evil">Neutral Evil</IonSelectOption>
                        <IonSelectOption value="Chaotic Good">Chaotic Good</IonSelectOption>
                        <IonSelectOption value="Chaotic Neutral">Chaotic Neutral</IonSelectOption>
                        <IonSelectOption value="Chaotic Evil">Chaotic Evil</IonSelectOption>
                    </IonSelect>
                    <IonSelect label="Level:" placeholder="1">
                        {Array.from({ length: 20 }).map((_, index) => (
                                <IonSelectOption value={index + 1}>{index + 1}</IonSelectOption> ))}
                    </IonSelect>
                    <IonButton type='submit'>Create Character</IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default CreateChar;