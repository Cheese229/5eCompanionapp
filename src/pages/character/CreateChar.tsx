import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';

const CreateChar: React.FC = () => {

    const router = useIonRouter();

    interface FormData {
        name: string;
        race: string;
        class: string;
        alignment: string;
        level: string;
    }

    const createChara = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const formData: FormData = {
            name: (document.getElementById('name') as HTMLInputElement).value,
            race: (document.getElementById('race') as HTMLInputElement).value,
            class: (document.getElementById('class') as HTMLInputElement).value,
            alignment: (document.getElementById('alignment') as HTMLInputElement).value,
            level: (document.getElementById('level') as HTMLInputElement).value,
        };
        console.log(formData);
        console.log('created character');
        router.push('/app/characters', 'forward');
    }

    const cancelChara = () => {
        console.log('cancelled character');
        router.push('/app/characters', 'back');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='px-5'>Create New Character</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form onSubmit={createChara} id='chara'>
                    <IonInput id='name' labelPlacement='floating' label='Name:' ></IonInput>
                    <IonInput id='race' labelPlacement='floating' label='Race:' ></IonInput>
                    <IonInput id='class' labelPlacement='floating' label='Class:' ></IonInput>
                    <IonSelect id='alignment' label="Alignment:" placeholder="Alignment" interface='popover'>
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
                    <IonSelect id='level' label="Level:" placeholder="--" interface='popover'>
                        {Array.from({ length: 20 }).map((_, index) => (
                                <IonSelectOption value={index + 1}>{index + 1}</IonSelectOption> ))}
                    </IonSelect>
                    <IonButton type='submit'>Create Character</IonButton>
                    <IonButton className='pl-2' onClick={cancelChara}>Cancel</IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default CreateChar;