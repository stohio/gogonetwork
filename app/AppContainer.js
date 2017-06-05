import { StackNavigator } from 'react-navigation';

import MainScene from './scenes/MainScene';
import NewContactScene from './scenes/NewContactScene';
import NewProfileScene from './scenes/NewProfileScene';


export default AppContainer = StackNavigator({
    Main: {screen: MainScene},
    NewContact: {screen: NewContactScene},
    NewProfile: {screen: NewProfileScene},
});
