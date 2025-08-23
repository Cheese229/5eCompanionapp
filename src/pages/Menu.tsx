import { IonContent, IonHeader, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router';

// page imports
import CharacterList from './CharacterList';
import Home from './Home';
import Intro from '@/components/intro';


const Menu: React.FC = () => {

    // default false for intro seen
    const [introSeen, setIntroSeen] = useState(false);

    // sets seen intro to true after intro is finished
    const finishIntro = async() => {
        setIntroSeen(true);
    }

    // list of pages here
    const paths = [
        { name: "Home", url: "/app/home"},
        { name: "Characters", url: "/app/characters"}
    ]

    return (
    <>
        {!introSeen ? (
        <Intro onFinish={finishIntro} />
        ) : (
        <IonPage>
            {/* split pane to hide navbar on smaller screen and have always open on larger screen */}
            <IonSplitPane contentId='main'> 
                <IonMenu contentId='main'>
                    <IonHeader>
                        <IonToolbar color={'secondary'}>
                            <IonTitle className='pl-4'>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {paths.map((item, index) => (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem routerLink={item.url} >
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}
                    </IonContent>
                </IonMenu>

                {/* router to render all the pages with the nav menu */}
                <IonRouterOutlet id='main'>
                    <Route exact path="/app/home" component={Home} />
                    <Route path="/app/characters" component={CharacterList} />
                    <Route exact path="/app">
                        <Redirect to="/app/home" />
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
        )}
    </>
    );
};

export default Menu;