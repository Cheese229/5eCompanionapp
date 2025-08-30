import { IonContent, IonHeader, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Route, Redirect } from 'react-router';

// page imports
import Home from '@/pages/Home';
import Sheet from './CharSheet';
import Information from './CharInformation';
import Skills from './CharSkills';
import Equipment from './CharEquipment';
import Spells from './CharSpells';

const CharMenu: React.FC = () => {

    // list of pages here
    const paths = [
        { name: "Home", url: "/app/home"},
        { name: "Character Sheet", url: "/character/main"},
        { name: "Information", url: "/character/information"},
        { name: "Skills", url: "/character/skills"},
        { name: "Equipment", url: "/character/equipment"},
        { name: "Spells", url: "/character/spells"}

    ]

    return (
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
                    <Route exact path="/character/main" component={Sheet} />
                    <Route exact path="/app/home" component={Home} />
                    <Route path="/character/information" component={Information} />
                    <Route path="/character/skills" component={Skills} />
                    <Route path="/character/equipment" component={Equipment} />
                    <Route path="/character/spells" component={Spells} />
                    <Route exact path="/character">
                        <Redirect to="/character/main" />
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    );
};

export default CharMenu;