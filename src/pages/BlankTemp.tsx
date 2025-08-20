import Intro from '@/components/intro';
import { IonButton, IonContent, IonPage, useIonRouter } from '@ionic/react';
import React, { useState } from 'react';

const BlankTemp: React.FC = () => {

    const router = useIonRouter();
    // default false for intro seen
    const [introSeen, setIntroSeen] = useState(false);

    // sets seen intro to true after intro is finished
    const finishIntro = async() => {
        setIntroSeen(true);
    }

    const doLogin = async () => {
        // pushes to main app
        router.push('/app', 'root');
    }

    return (
    <>
        {!introSeen ? (
            <Intro onFinish={finishIntro} />
        ) : (
        <IonPage>
            {/* simple button at app start. moves to main app */}
            <IonContent className="ion-padding items-center justify-center text-center">
                <IonButton onClick={doLogin}>Start</IonButton>
            </IonContent>
        </IonPage>
        )}
    </>
    );
};

export default BlankTemp;