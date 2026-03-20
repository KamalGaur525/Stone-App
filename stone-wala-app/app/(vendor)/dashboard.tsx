import { useAuthStore } from "@/store/authStore";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useVendorStore } from "../../store/vendorStore";
export default function VendorDashboard() {
  const { profile, products, subscription } = useVendorStore();
   
  
  // ── DERIVED DATA ──
  const totalProducts = products.length;

  const totalRevenue = products.reduce((sum, p) => sum + (p.price || 0), 0);

  const thisMonthRevenue = Math.floor(totalRevenue * 0.4);
  const lastMonthRevenue = Math.floor(totalRevenue * 0.3);
  const pendingRevenue = Math.floor(totalRevenue * 0.1);

  const totalViews = totalProducts * 50;
  const totalLeads = totalProducts * 2;
  const totalOrders = Math.floor(totalProducts * 0.8);

  const initials =
    profile?.firmName
      ?.split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "SV";

  const vendorName = profile?.firmName || "Stone Vendor";

  return (
    <ScrollView
      className="flex-1 bg-stone-100"
      showsVerticalScrollIndicator={false}
    >

      {/* ── HEADER ── */}
      <View className="bg-stone-900 px-6 pt-16 pb-24">

        <View className="flex-row justify-between items-center mb-5">
          <View className="flex-row items-center gap-x-2">
            <View className="h-2 w-2 rounded-full bg-amber-400" />
            <Text className="text-stone-400 text-xs font-semibold uppercase tracking-[3px]">
              Dashboard
            </Text>
          </View>

         
<View className="flex-row items-center gap-x-3">
  <Pressable
    onPress={async () => {
      await useAuthStore.getState().logout();
      router.replace("/(auth)");
    }}
    className="bg-stone-800 px-3 py-2 rounded-xl active:opacity-70"
  >
    <Text className="text-stone-400 text-xs font-semibold">Logout</Text>
  </Pressable>

  <View className="h-10 w-10 rounded-full bg-amber-500 items-center justify-center">
    <Text className="text-white font-extrabold text-sm">
      {initials}
    </Text>
  </View>
</View>
        </View>

        <Text className="text-stone-400 text-sm mb-1">
          Good morning,
        </Text>

        <Text className="text-white text-[28px] font-extrabold">
          {vendorName} 👋
        </Text>

        <View className="flex-row items-center mt-4 gap-x-2">
          <View
           className={`h-2 w-2 rounded-full ${subscription.isActive ? "bg-emerald-400" : "bg-red-400"}`}
          />
          <Text className="text-stone-400 text-xs">
            {subscription.isActive ? "Store Active · Subscription Valid" : "Subscription Inactive"}
          </Text>
        </View>
      </View>

      {/* ── REVENUE CARD ── */}
      <View className="px-5 -mt-14 mb-6">
        <View className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-100">

          <View className="h-1 w-full bg-amber-400" />

          <View className="p-6">
            <View className="flex-row justify-between items-start">
              <View className="flex-1">
                <Text className="text-stone-400 text-xs uppercase mb-1">
                  Total Revenue
                </Text>
                <Text className="text-4xl font-extrabold text-stone-900">
                  ₹{totalRevenue}
                </Text>
              </View>

              <View className="bg-emerald-50 px-3 py-1.5 rounded-xl">
                <Text className="text-emerald-600 font-bold text-xs">
                  ↑ 12%
                </Text>
              </View>
            </View>

            <View className="h-px bg-stone-100 my-4" />

            <View className="flex-row justify-between">
              <View>
                <Text className="text-stone-400 text-xs">This Month</Text>
                <Text className="text-stone-800 text-sm font-bold">
                  ₹{thisMonthRevenue}
                </Text>
              </View>

              <View className="w-px bg-stone-100" />

              <View>
                <Text className="text-stone-400 text-xs">Last Month</Text>
                <Text className="text-stone-800 text-sm font-bold">
                  ₹{lastMonthRevenue}
                </Text>
              </View>

              <View className="w-px bg-stone-100" />

              <View>
                <Text className="text-stone-400 text-xs">Pending</Text>
                <Text className="text-amber-600 text-sm font-bold">
                  ₹{pendingRevenue}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* ── ANALYTICS ── */}
      <View className="mb-7">
        <View className="px-5 mb-3">
          <Text className="text-base font-bold text-stone-800">
            At a Glance
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="px-5">

          <View className="bg-white flex-row justify-between mr-3 p-5 rounded-3xl w-44 border border-stone-100">
            <View className="flex-col justify-between items-center">
              <Text className="text-2xl font-black text-stone-900">
                {totalProducts}
              </Text>
              <Text className="text-[10px] text-stone-400 uppercase">
                Products
              </Text>
            </View>
            {/* Right Side: Icon Badge */}
            <View className="h-12 w-12 bg-stone-50 rounded-2xl items-center justify-center border border-stone-100">
              <Ionicons name="cube" size={22} color="#57534e" />
            </View>
          </View>

          <View className="bg-white flex-row justify-between mr-3 p-5 rounded-3xl w-44 border border-stone-100">
            <View className="flex-col justify-between items-center">
              <Text className="text-2xl font-black text-stone-900">
                {totalViews}
              </Text>
              <Text className="text-[10px] text-stone-400 uppercase">
                Views
              </Text>
            </View>
            {/* Right Side: Icon Badge */}
            <View className="h-12 w-12 bg-stone-50 rounded-2xl items-center justify-center border border-stone-100">
              <Ionicons name="eye" size={20} color="#3b82f6" />

            </View>
          </View>

          <View className="bg-white flex-row justify-between mr-3 p-5 rounded-3xl w-44 border border-stone-100">
            <View className="flex-col justify-between items-center">
              <Text className="text-2xl font-black text-stone-900">
                {totalLeads}
              </Text>
              <Text className="text-[10px] text-stone-400 uppercase">
                Leads
              </Text>
            </View>
            {/* Right Side: Icon Badge */}
            <View className="h-12 w-12 bg-stone-50 rounded-2xl items-center justify-center border border-stone-100">
              <Ionicons name="chatbubble-ellipses" size={20} color="#d97706" />

            </View>
          </View>

          <View className="bg-white flex-row justify-between p-5 rounded-3xl w-44 border border-stone-100">
            <View className="flex-col justify-between items-center">
              <Text className="text-2xl font-black text-stone-900">
                {totalOrders}
              </Text>
              <Text className="text-[10px] text-stone-400 uppercase">
                Orders
              </Text>
            </View>
            {/* Right Side: Icon Badge */}
            <View className="h-12 w-12 bg-stone-50 rounded-2xl items-center justify-center border border-stone-100">
              <Feather name="shopping-bag" size={20} color="#059669" />

            </View>
          </View>

        </ScrollView>
      </View>

      {/* ── QUICK ACTIONS ── */}
      <View className="px-5 mb-7">
        <Text className="text-base font-bold text-stone-800 tracking-tight mb-4">
          Quick Actions
        </Text>

        <View className="flex-row flex-wrap justify-between gap-y-3">

          <Pressable
            onPress={() =>
              router.push("/(vendor)/upload-product")
            }
            className="bg-amber-500 w-[48%] p-5 rounded-3xl active:opacity-75 shadow-md shadow-amber-400/30"
          >
            <View className="h-10 w-10 bg-amber-400/40 rounded-2xl items-center justify-center mb-4">
              <Ionicons name="add" size={22} color="#fff" />
            </View>
            <Text className="font-bold text-white text-base leading-tight">Add Product</Text>
            <Text className="text-xs font-medium text-amber-100 mt-1">Upload new item</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/(vendor)/firm-profile")}
            className="bg-white w-[48%] p-5 rounded-3xl shadow-sm border border-stone-100"
          >
            <View className="h-10 w-10 bg-stone-100 rounded-2xl items-center justify-center mb-4">
              <Ionicons name="person-outline" size={20} color="#44403c" />
            </View>
            <Text className="font-bold text-stone-900 text-base leading-tight">Profile</Text>
            <Text className="text-xs font-medium text-stone-400 mt-1">Edit details</Text>
          </Pressable>

          <Pressable className="bg-white w-[48%] p-5 rounded-3xl shadow-sm shadow-stone-300/30 border border-stone-100 active:opacity-75">
            <View className="h-10 w-10 bg-stone-100 rounded-2xl items-center justify-center mb-4">
              <Feather name="bar-chart-2" size={20} color="#44403c" />
            </View>
            <Text className="font-bold text-stone-900 text-base leading-tight">Analytics</Text>
            <Text className="text-xs font-medium text-stone-400 mt-1">Track performance</Text>
          </Pressable>

          <Pressable className="bg-white w-[48%] p-5 rounded-3xl shadow-sm shadow-stone-300/30 border border-stone-100 active:opacity-75">
            <View className="h-10 w-10 bg-stone-100 rounded-2xl items-center justify-center mb-4">
              <Feather name="settings" size={20} color="#44403c" />
            </View>
            <Text className="font-bold text-stone-900 text-base leading-tight">Settings</Text>
            <Text className="text-xs font-medium text-stone-400 mt-1">Manage account</Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/(vendor)/my-products")}
            className="bg-white w-[48%] p-5 rounded-3xl shadow-sm border border-stone-100"
          >
            <View className="h-10 w-10 bg-stone-100 rounded-2xl items-center justify-center mb-4">
              <Ionicons name="cube-outline" size={20} color="#444" />
            </View>
            <Text className="font-bold text-stone-900 text-base">
              My Products
            </Text>
            <Text className="text-xs text-stone-400 mt-1">
              Manage items
            </Text>
          </Pressable>

        </View>
      </View>

      {/* ── PERFORMANCE GRAPH PLACEHOLDER ── */}
      <View className="px-5 mb-7">
        <Text className="text-base font-bold text-stone-800 tracking-tight mb-4">
          Performance
        </Text>
        <View className="bg-white p-5 rounded-3xl shadow-sm shadow-stone-300/30 border border-stone-100">
          {/* Static bar graph skeleton for visual richness */}
          <View className="flex-row items-end justify-between px-3 mb-3 h-20">
            {["h-8", "h-12", "h-6", "h-16", "h-10", "h-14", "h-20"].map((h, i) => (
              <View key={i} className={`w-6 ${h} bg-stone-100 rounded-t-lg`} />
            ))}
          </View>
          <View className="flex-row items-end justify-between px-3">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <Text key={i} className="w-6 text-center text-stone-300 text-[10px] font-bold">{d}</Text>
            ))}
          </View>
          <View className="flex-row items-center justify-center mt-4 gap-x-2">
            <Feather name="pie-chart" size={14} color="#a8a29e" />
            <Text className="text-stone-400 font-semibold text-xs tracking-wide">
              Chart Coming Soon
            </Text>
          </View>
        </View>
      </View>

      {/* ── RECENT LEADS ── */}
      <View className="px-5 pb-14">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-base font-bold text-stone-800 tracking-tight">
            Recent Leads
          </Text>
          <Pressable className="active:opacity-60">
            <Text className="text-amber-500 text-sm font-bold">
              View All →
            </Text>
          </Pressable>
        </View>

        <View className="bg-white rounded-3xl overflow-hidden shadow-sm shadow-stone-300/30 border border-stone-100">

          {/* Row 1 */}
          <Pressable className="flex-row justify-between items-center px-5 py-4 active:bg-stone-50">
            <View className="h-11 w-11 bg-amber-50 rounded-2xl items-center justify-center mr-4">
              <Text className="text-amber-600 font-extrabold text-sm">MB</Text>
            </View>
            <View className="flex-1">
              <Text className="font-bold text-stone-900 text-sm leading-tight">Marble Buyer</Text>
              <Text className="text-xs text-stone-400 font-medium mt-0.5">Asked for price</Text>
            </View>
            <View className="bg-stone-100 px-2.5 py-1 rounded-xl">
              <Text className="text-xs font-bold text-stone-500">2h</Text>
            </View>
          </Pressable>

          <View className="h-px bg-stone-100 mx-5" />

          {/* Row 2 */}
          <Pressable className="flex-row justify-between items-center px-5 py-4 active:bg-stone-50">
            <View className="h-11 w-11 bg-emerald-50 rounded-2xl items-center justify-center mr-4">
              <Text className="text-emerald-600 font-extrabold text-sm">GI</Text>
            </View>
            <View className="flex-1">
              <Text className="font-bold text-stone-900 text-sm leading-tight">Granite Inquiry</Text>
              <Text className="text-xs text-stone-400 font-medium mt-0.5">Bulk order</Text>
            </View>
            <View className="bg-stone-100 px-2.5 py-1 rounded-xl">
              <Text className="text-xs font-bold text-stone-500">5h</Text>
            </View>
          </Pressable>

          <View className="h-px bg-stone-100 mx-5" />

          {/* Row 3 */}
          <Pressable className="flex-row justify-between items-center px-5 py-4 active:bg-stone-50">
            <View className="h-11 w-11 bg-blue-50 rounded-2xl items-center justify-center mr-4">
              <Text className="text-blue-600 font-extrabold text-sm">TS</Text>
            </View>
            <View className="flex-1">
              <Text className="font-bold text-stone-900 text-sm leading-tight">Tile Supplier</Text>
              <Text className="text-xs text-stone-400 font-medium mt-0.5">Requested callback</Text>
            </View>
            <View className="bg-stone-100 px-2.5 py-1 rounded-xl">
              <Text className="text-xs font-bold text-stone-500">1d</Text>
            </View>
          </Pressable>

        </View>
      </View>

    </ScrollView>
  );
}