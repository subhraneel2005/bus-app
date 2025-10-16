import { router } from "expo-router";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput as RNTextInput,
  ActivityIndicator,
  Vibration,
} from "react-native";

interface OTPScreenProps {
  route?: {
    params?: {
      phoneNumber?: string;
    };
  };
}

export default function OTPScreen({ route }: OTPScreenProps) {
  const phoneNumber = route?.params?.phoneNumber || "";
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<Array<RNTextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d*$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleVerify = () => {
    if (loading) return;
    setLoading(true);

    Vibration.vibrate(50);
    try {
      const enteredOtp = otp.join("");
      console.log("OTP entered:", enteredOtp);
      router.push("/(tabs)/bus");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const isValidOtp = otp.every((digit) => digit !== "");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Enter OTP</Text>
            <Text style={styles.subtitle}>
              We sent a code to {phoneNumber || "+91 6295590363"}
            </Text>
          </View>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  if (ref) inputRefs.current[index] = ref;
                }}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              (styles.button, !isValidOtp || loading) && styles.buttonDisabled,
            ]}
            onPress={handleVerify}
            disabled={!isValidOtp || loading}
            activeOpacity={0.7}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Verify</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.resendButton} activeOpacity={0.7}>
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  keyboardView: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 60 }, // Reduced padding
  header: { marginBottom: 40 },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: { fontSize: 16, color: "#666", lineHeight: 22 },
  otpContainer: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-around", // better spacing
    marginBottom: 32,
  },
  otpInput: {
    width: 60,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000", // black border
    textAlign: "center",
    fontSize: 20,
    color: "#000", // white text
    ...Platform.select({
      ios: { paddingVertical: 12 },
      android: { paddingVertical: 8 },
    }),
  },
  button: {
    backgroundColor: "#007AFF",
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  buttonDisabled: { backgroundColor: "#ccc", shadowOpacity: 0, elevation: 0 },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  resendButton: { alignSelf: "center", marginTop: 12 },
  resendText: { color: "#007AFF", fontSize: 15, fontWeight: "500" },
});
