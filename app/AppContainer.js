import { StackNavigator } from 'react-navigation';

import MainScene from './scenes/MainScene';
import NewContactScene from './scenes/NewContactScene';

// export default class AppContainer extends Component {
//     render() {
//         return StackNavigator({
//             Main: {screen: MainScene},
//             NewContact: {screen: NewContactScene},
//         });
//     }
// }

export default AppContainer = StackNavigator({
    Main: {screen: MainScene},
    NewContact: {screen: NewContactScene},
});
