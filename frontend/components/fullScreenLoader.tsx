import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function FullScreenLoader() {
  return (
    <View className="min-h-screen w-full justify-center items-center flex bg-[#fff95b]">
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.header}>
        <Text style={styles.title}>BUSIFY</Text>
        <Text style={styles.subtitle}>Your digital bus ticketing app</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
});
