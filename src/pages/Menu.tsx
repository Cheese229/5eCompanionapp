import { IonContent, IonHeader, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Route, Redirect } from 'react-router';

// page imports
import CharacterList from './Characterlist';
import Home from './Home';


const Menu: React.FC = () => {

    const paths = [
        { name: "Home", url: "/app/home"},
        { name: "Characters", url: "/app/characters"}
    ]

    return (
        <IonPage>
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

                <IonRouterOutlet id='main'>
                    <Route exact path="/app/home" component={Home} />
                    <Route path="/app/characters" component={CharacterList} />
                    <Route exact path="/app">
                        <Redirect to="/app/home" />
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    );
};

export default Menu;