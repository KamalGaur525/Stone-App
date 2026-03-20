import { useGuestStore } from "@/store/guestStore";
import {
    Image,
    Linking,
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";

export default function FirmDetail() {
  const { selectedFirm } = useGuestStore();

  if (!selectedFirm) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>No Firm Data Found</Text>
      </View>
    );
  }

  const data = selectedFirm;

  // ✅ fallback image
  const imageUrl =
    data.image && data.image.length > 0
      ? data.image
      : "https://via.placeholder.com/150";

  return (
    <ScrollView className="flex-1 bg-stone-50">

      {/* ── HEADER ── */}
      <View className="px-5 pt-14 pb-6">

        <View className="flex-row items-center gap-4">

          {/* LOGO */}
          <Image
            source={{ uri: imageUrl }}
            className="w-16 h-16 rounded-2xl bg-stone-200"
            resizeMode="cover"
          />

          {/* NAME + INFO */}
          <View className="flex-1">

            <Text className="text-xl font-bold text-stone-900">
              {data.name}
            </Text>

            <Text className="text-stone-400 text-sm mt-1">
              {data.category} Supplier • {data.city}
            </Text>

            {/* ⭐ RATING */}
            <View className="flex-row items-center mt-2">
              <Text className="text-amber-500 font-semibold">
                ⭐ {data.rating}
              </Text>
              <Text className="text-stone-400 text-xs ml-2">
                Trusted Supplier
              </Text>
            </View>

          </View>

        </View>

        {/* SOCIAL BUTTONS */}
        <View className="flex-row mt-6 gap-3">

          {[
            { label: "Facebook", link: data.facebook },
            { label: "Instagram", link: data.instagram },
            { label: "Website", link: data.website },
          ].map((item, index) => (
            <Pressable
              key={index}
              onPress={() => item.link && Linking.openURL(item.link)}
              className="flex-1 bg-white border border-stone-200 rounded-2xl py-3 items-center shadow-sm active:opacity-80"
            >
              <Text className="text-xs font-semibold text-stone-700">
                {item.label}
              </Text>
            </Pressable>
          ))}

        </View>

      </View>

      {/* ── CONTACT CARD ── */}
      <View className="px-5 mb-6">

        <View className="bg-white border border-stone-100 rounded-3xl p-5 shadow-sm">

          <Text className="text-stone-900 font-semibold mb-4">
            Contact & Location
          </Text>

          {/* ACTION BUTTONS */}
          <View className="flex-row gap-3 mb-4">

            <Pressable
              onPress={() => Linking.openURL(`tel:${data.phone}`)}
              className="flex-1 bg-stone-900 rounded-2xl py-3 items-center active:opacity-80"
            >
              <Text className="text-white text-sm font-semibold">
                Call
              </Text>
            </Pressable>

            <Pressable
              onPress={() =>
                Linking.openURL(`https://wa.me/91${data.phone}`)
              }
              className="flex-1 bg-green-500 rounded-2xl py-3 items-center active:opacity-80"
            >
              <Text className="text-white text-sm font-semibold">
                WhatsApp
              </Text>
            </Pressable>

          </View>

          {/* EMAIL + LOCATION */}
          <View className="flex-row gap-3">

            <Pressable
              onPress={() =>
                data.email && Linking.openURL(`mailto:${data.email}`)
              }
              className="flex-1 items-center justify-center bg-stone-50 border border-stone-200 rounded-2xl p-3"
            >
              <Text
                numberOfLines={1}
                className="text-stone-700 text-xs font-medium"
              >
                📧 {data.email}
              </Text>
            </Pressable>

            <Pressable
              onPress={() =>
                Linking.openURL(
                  `https://www.google.com/maps/search/?api=1&query=${data.location}`
                )
              }
              className="flex-1 items-center justify-center bg-stone-50 border border-stone-200 rounded-2xl p-3"
            >
              <Text
                numberOfLines={1}
                className="text-stone-700 text-xs font-medium"
              >
                📍 {data.location}
              </Text>
            </Pressable>

          </View>

        </View>

      </View>

      {/* ── ABOUT CARD ── */}
      <View className="px-5 mb-6">

        <View className="bg-white border border-stone-100 rounded-3xl p-5 shadow-sm">

          <Text className="text-stone-900 font-semibold mb-3">
            About Firm
          </Text>

          <View className="h-px bg-stone-100 mb-3" />

          <Text className="text-stone-500 text-sm leading-6">
            We specialize in premium quality {data.category}. We provide durable,
            elegant, and cost-effective stone solutions for residential and
            commercial projects.
          </Text>

        </View>

      </View>

      {/* ── PRODUCTS ── */}
      <View className="px-5 pb-10">

        <Text className="text-lg font-semibold text-stone-900 mb-4 ps-5">
          Products
        </Text>

        {[1, 2, 3].map((item, index) => (
          <Pressable
            key={index}
            className="bg-white border border-stone-100 rounded-3xl p-4 mb-4 shadow-sm active:opacity-80"
          >
            <View className="h-24 bg-stone-100 rounded-2xl mb-3" />

            <Text className="text-stone-900 font-medium">
              {data.category} Product
            </Text>

            <Text className="text-stone-400 text-sm mt-1">
              ₹ 250 / sq.ft
            </Text>
          </Pressable>
        ))}

      </View>

    </ScrollView>
  );
}