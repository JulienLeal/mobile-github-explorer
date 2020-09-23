import React from "react";
import { AppLoading, registerRootComponent } from "expo";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";

import Home from "./screens/Home/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito: Nunito_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Home />;
}

registerRootComponent(App);
