import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from "@/style/globalStyle";

export default function Bus() {
  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={globalStyle.content}>
        <Text style={globalStyle.title}>Bus Screen</Text>
      </View>
    </SafeAreaView>
  );
}
