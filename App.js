import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/home";
import History from "./screens/history";
import Profile from "./screens/profile";
import Membership from "./screens/membership";
import Splashscreen from "./screens/splashscreen";
import Registerlogin from "./screens/registerlogin";
import Loginscreen from "./screens/loginscreen";
import Registerscreen from "./screens/registerscreen";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "History":
              iconName = "document-text-outline";
              break;
            case "Membership":
              iconName = "gift-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "#2CA9E3" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "blue" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="History" component={History} options={noHead} />
      <Tab.Screen name="Membership" component={Membership} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splashscreen">
        <Stack.Screen name="SPLASHSCREEN" component={Splashscreen} options={{ headerShown: false }} />
        <Stack.Screen name="REGISTERLOGIN" component={Registerlogin} options={{ headerShown: false }} />
        <Stack.Screen name="LOGIN" component={Loginscreen} options={{ headerShown: false }} />
        <Stack.Screen name="REGISTER" component={Registerscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
