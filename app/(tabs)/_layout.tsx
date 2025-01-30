import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./homeScreen";
import AddPurchaseScreen from "./addPurchaseScreen";
import ProfileScreen from "./profileScreen";
import { Tabs } from "expo-router";
import { TabBar } from "@/components/tabBar";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  const TabList = [
    { route: "HomeScreen", label: "Home", icon: "home", component: HomeScreen },
    {
      route: "AddPurchaseScreen",
      label: "Add Purchase",
      icon: "add-circle-outline",
      component: AddPurchaseScreen,
    },
    {
      route: "ProfileScreen",
      label: "Profile",
      icon: "person",
      component: ProfileScreen,
    },
  ];

  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      {TabList.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            initialParams={{ icon: item.icon }}
            options={{
              headerShown: false,
              title: item.label,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
