import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

// Folders Import

import "../global.css";
import Search from "./page/Search";
import CategoryHighlights from "./page/Category";
import BestDeals from "./page/BestDeals";
import CategoryItems from "./page/CategoryList";
import Homebanner from "./page/banner";
import FruitProduct from "./page/Fruits";
import FeatureProduct from "./page/FeatureProduct";

export default function Index() {
  return (
    <SafeAreaView className="px-4 mb-[100px] bg-primary">
      <View>
        <Text className="text-center text-2xl font-bold pb-5  ">Ekisan..</Text>
      </View>
      <Search />

      <ScrollView
        className=" flex mt-[30px]   "
        showsVerticalScrollIndicator={false}
      >
        {/* Main Banner */}
        <Homebanner />
        {/* Navbar list */}
        <CategoryItems />
        {/* Highlights Productarea */}
        <CategoryHighlights />
        <BestDeals />
        <FruitProduct />
        <FeatureProduct />
      </ScrollView>
    </SafeAreaView>
  );
}
