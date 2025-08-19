import Intro from '@/components/intro';
import { IonButton, IonContent, IonPage, useIonRouter } from '@ionic/react';
import React, { useState } from 'react';

const BlankTemp: React.FC = () => {

    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(false);

    const finishIntro = async() => {
        setIntroSeen(true);
    }

    const doLogin = async () => {
        router.push('/app', 'root');
    }

    return (
    <>
        {!introSeen ? (
            <Intro onFinish={finishIntro} />
        ) : (
        <IonPage>
            <IonContent className="ion-padding items-center justify-center text-center">
                <IonButton onClick={doLogin}>Start</IonButton>
            </IonContent>
        </IonPage>
        )}
    </>
    );
};

export default BlankTemp;