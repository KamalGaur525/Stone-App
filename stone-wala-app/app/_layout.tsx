import { Slot, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import { useAuthStore } from "@/store/authStore";

import "../global.css";

export default function RootLayout() {
  const { hydrate, isHydrated, isLoggedIn, user } = useAuthStore();

  useEffect(() => {
    hydrate();
  }, [hydrate]); // ✅ dependency added

  useEffect(() => {
    if (!isHydrated) return;

    if (!isLoggedIn) {
      router.replace("/(auth)");
      return;
    }

    if (user?.role === "vendor") {
      router.replace("/(vendor)/dashboard");
    } else if (user?.role === "guest") {
      router.replace("/(guest)/home");
    } else {
      // admin ya koi unknown role — auth pe bhejo
      router.replace("/(auth)");
    }
  }, [isHydrated, isLoggedIn, user]); // ✅ user added

  if (!isHydrated) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#D97706" />
      </View>
    );
  }

  return (
    <>
      <Slot />
      <StatusBar style="dark" />
    </>
  );
}