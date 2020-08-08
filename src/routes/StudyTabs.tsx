import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import TeacherList from "../pages/TeacherList";
import TeacherListFavorites from "../pages/TeacherListFavorites";

const { Navigator, Screen } = createBottomTabNavigator();

export default function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 74,
          borderColor: "#E6E6F0",
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: { flex: 0, width: 20, height: 20 },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#FAFAFC",
        activeBackgroundColor: "#EBEBF5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-easel"
              size={size}
              color={focused ? "#8257e5" : color}
            />
          ),
        }}
      />
      <Screen
        name="TeacherListFavorites"
        component={TeacherListFavorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name="ios-heart"
              size={size}
              color={focused ? "#8257e5" : color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
