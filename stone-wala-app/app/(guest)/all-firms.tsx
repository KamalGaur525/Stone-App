import { useGuestStore } from "@/store/guestStore";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function AllFirms() {
  const { firms, setSelectedFirm } = useGuestStore();

  return (
    <ScrollView className="flex-1 bg-stone-50 px-5 pt-14">

      {/* ── HEADER ── */}
      <View className="mb-6">
        <Text className="text-3xl font-bold text-stone-900">
          All Firms
        </Text>

        <Text className="text-stone-400 mt-1">
          Browse all suppliers
        </Text>
      </View>

      {/* ── FIRMS LIST ── */}
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

    </ScrollView>
  );
}