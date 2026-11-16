import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GestureHanflerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppNavigation } from "../navigation/AppNavigation.js";
//Compponente da raiz do pp, monte a parte de React Navigation e abstrai os provedores da área

export default function App() {
  return (
    <GestureHanflerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHanflerRootView>
  );
}
