import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenV2 from './src/screens/SquareScreenV2';
import TextScreen from './src/screens/TextScreen';
import PasswordScreen from './src/screens/PasswordScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen, 
    Image: ImageScreen, 
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareV2: SquareScreenV2, 
    Text: TextScreen, 
    Password: PasswordScreen
  },
  {
    initialRouteName: 'Password',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
