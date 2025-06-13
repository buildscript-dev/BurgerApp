import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./(Tabs)/homePage";
import ProfilePage from "./(Tabs)/profilePage";
import Notificaiton from "./(Tabs)/notificaiton";
import CartPage from "./(Tabs)/cartPage";


const MyTabs = createBottomTabNavigator({
    screens:{
        Home: HomePage,
        Profile: ProfilePage,
        Notification: Notificaiton,
        Cart: CartPage
        
    }
});
