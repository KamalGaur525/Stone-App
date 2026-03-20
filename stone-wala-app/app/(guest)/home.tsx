import { useAuthStore } from "@/store/authStore";
import { useGuestStore } from "@/store/guestStore";
import { router } from "expo-router";
import { useEffect } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function Home() {
  const { firms, setFirms, setSelectedFirm } = useGuestStore();

  // ✅ TEMP DATA (later API se aayega)
  useEffect(() => {
    setFirms([
      {
        id: "1",
        name: "RK Marble Pvt Ltd",
        city: "Kishangarh",
        category: "Marble",
        rating: 4.5,
        image: "https://via.placeholder.com/150",
        phone: "9876543210",
        email: "firm@email.com",
        location: "Kishangarh, Rajasthan",
        website: "https://example.com",
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
      },
      {
        id: "2",
        name: "Shree Granite",
        city: "Udaipur",
        category: "Granite",
        rating: 4.2,
        image: "https://via.placeholder.com/150",
        phone: "9876543211",
        email: "granite@email.com",
        location: "Udaipur, Rajasthan",
        website: "https://example.com",
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
      },
    ]);
  }, []);

  return (
    <ScrollView className="flex-1 bg-stone-50">

      {/* ── HEADER ── */}
<View className="px-5 pt-14 pb-6">
  {/* Logout row */}
  <View className="flex-row justify-between items-center mb-3">
    <Text className="text-sm text-stone-400">Welcome User</Text>
    <Pressable
      onPress={async () => {
        await useAuthStore.getState().logout();
        router.replace("/(auth)");
      }}
      className="bg-stone-200 px-3 py-1.5 rounded-xl active:opacity-70"
    >
      <Text className="text-stone-600 text-xs font-semibold">Logout</Text>
    </Pressable>
  </View>

  <Text className="text-3xl font-bold text-stone-900 tracking-tight mt-1">
    Explore Stones
  </Text>
  <Text className="text-stone-400 text-sm mt-1">
    Find the best suppliers near you
  </Text>
</View>

      {/* ── SEARCH BAR ── */}
      <View className="px-5 mb-6">
        <View className="bg-white border border-stone-200 rounded-2xl px-4 py-1 shadow-sm">
          <TextInput
            placeholder="Search marble, granite, firms..."
            placeholderTextColor="#a8a29e"
            className="text-base text-stone-900"
          />
        </View>
      </View>

      {/* ── CATEGORIES ── */}
      <View className="px-5 mb-8">

        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold text-stone-900">
            Categories
          </Text>

          <Pressable onPress={() => router.push("/(guest)/categories")}>
            <Text className="text-amber-600 text-xs font-semibold">
              See All
            </Text>
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {["Granite", "Marble", "Tiles", "Sandstone", "Quartz"].map((item, index) => (
            <Pressable
              key={`cat-${index}`}
              onPress={() =>
                router.push({
                  pathname: "/(guest)/category-detail",
                  params: { name: item },
                })
              }
              className="bg-white border border-stone-200 px-5 py-3 rounded-2xl shadow-sm mr-3 active:opacity-80"
            >
              <Text className="text-stone-700 font-semibold text-sm">
                {item}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

      </View>

      {/* ── FEATURED FIRMS ── */}
      <View className="px-5 mb-8">

        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold text-stone-900">
            Featured Firms
          </Text>

          <Pressable onPress={() => router.push("/(guest)/all-firms")}>
            <Text className="text-amber-600 text-xs font-semibold">
              View All
            </Text>
          </Pressable>
        </View>

        {firms.map((firm) => (
          <Pressable
            key={firm.id}
            onPress={() => {
              setSelectedFirm(firm);
              router.push("/(guest)/firm-detail");
            }}
            className="bg-white border border-stone-100 rounded-3xl p-5 mb-4 shadow-sm active:opacity-80"
          >
            <Text className="text-stone-900 font-semibold text-base">
              {firm.name}
            </Text>

            <Text className="text-stone-400 text-sm mt-1">
              {firm.city} • {firm.category}
            </Text>

            <View className="flex-row gap-2 mt-3">
              <Text className="text-xs bg-stone-100 px-2 py-1 rounded-lg">
                Premium
              </Text>
              <Text className="text-xs bg-stone-100 px-2 py-1 rounded-lg">
                Trusted
              </Text>
            </View>

            <View className="mt-4 h-px bg-stone-100" />

            <Text className="text-amber-600 text-xs font-semibold mt-3">
              View Products →
            </Text>
          </Pressable>
        ))}

      </View>

      {/* ── TRENDING PRODUCTS ── */}
      <View className="px-5 pb-10">

        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold text-stone-900">
            Trending Products
          </Text>

          <Text className="text-amber-600 text-xs font-semibold">
            View All
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3].map((item, index) => (
            <Pressable
              key={`product-${index}`}
              className="w-44 bg-white border border-stone-100 rounded-3xl p-3 mr-4 shadow-sm active:opacity-80"
            >
              <View className="h-28 bg-stone-100 rounded-2xl mb-3" />

              <Text className="text-stone-800 font-semibold text-sm">
                Italian Marble
              </Text>

              <Text className="text-stone-400 text-xs mt-1">
                ₹ 250 / sq.ft
              </Text>

              <Text className="text-amber-600 text-xs mt-2 font-semibold">
                View Details →
              </Text>
            </Pressable>
          ))}
        </ScrollView>

      </View>

    </ScrollView>
  );
}