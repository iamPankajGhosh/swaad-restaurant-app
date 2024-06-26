import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { wp, hp } from "../../helpers/common.js";
import { theme } from "../../constants/theme.js";
import { useRef, useState } from "react";
import Catagories from "../../components/Catagories.jsx";
import MenuItems from "../../components/MenuItems.jsx";
import { router } from "expo-router";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;

  const [search, setSearch] = useState("");
  const [activeCatagory, setActiveCatagory] = useState(null);
  const searchInputRef = useRef(null);

  const handleChangeCatagory = (catagory) => {
    setActiveCatagory(catagory);
  };

  return (
    <View style={[styles.container, { paddingTop }]}>
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.title}>Swaad</Text>
        </Pressable>

        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <TouchableOpacity onPress={() => router.push("cart")}>
            <Ionicons name="cart" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.profileBanner}>
              <Text style={styles.profileText}>P</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ gap: 15, marginBottom: wp(10) }}>
        <View style={styles.searchbar}>
          <View style={styles.searchIcon}>
            <Feather
              name="search"
              size={24}
              color={theme.colors.neutral(0.4)}
            />
          </View>

          <TextInput
            placeholder="Search for foods..."
            value={search}
            onChange={(value) => setSearch(value)}
            ref={searchInputRef}
            cursorColor={theme.colors.primary}
            style={styles.searchInput}
          />

          {search && (
            <Pressable style={styles.closeIcon}>
              <Ionicons name="close" size={24} color={theme.colors.white} />
            </Pressable>
          )}
        </View>

        <View style={styles.catagories}>
          <Catagories
            activeCatagory={activeCatagory}
            handleChangeCatagory={handleChangeCatagory}
          />
        </View>
      </ScrollView>

      <MenuItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  header: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.9),
  },
  profileBanner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    width: wp(8),
    height: wp(8),
    borderRadius: 50,
  },
  profileText: {
    fontSize: hp(3),
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.primary,
  },
  searchbar: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.grayBg,
    backgroundColor: theme.colors.white,
    padding: 6,
    paddingLeft: 10,
    borderRadius: theme.redius.lg,
  },
  searchIcon: {
    padding: 8,
  },
  searchInput: {
    flex: 1,
    borderRadius: theme.redius.sm,
    paddingVertical: 10,
    fontSize: hp(1.8),
  },
  closeIcon: {
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: theme.redius.sm,
  },
});

export default HomeScreen;
