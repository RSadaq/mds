import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BlogsScreen from "../screens/BlogsScreen";
import Tennis from "../blogs/Tennis";
import InterviewTennisStar from "../blogs/InterviewTennisStar";
import AthletesAndPoker from "../blogs/AthletesAndPoker";
import BreakingOutOfSlump from "../blogs/BreakingOutOfSlump";

const Stack = createStackNavigator();
const title = 'Back to Blogs';

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "firebrick",
  },
  headerTintColor: "white",
  headerBackTitle: "back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="BlogsStack" component={BlogsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Tennis" component={Tennis} options={{ title: title }} />
      <Stack.Screen name="BreakingOutOfSlump" component={BreakingOutOfSlump} options={{ title: title }}/>
      <Stack.Screen name="InterviewTennisStar" component={InterviewTennisStar} options={{ title: title }} />
      <Stack.Screen name="AthletesAndPoker" component={AthletesAndPoker} options={{ title: title }}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator };