import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchUserProfile,
  selectQueryStatuses,
  selectUser,
} from "../../redux/reducers/userSlice";
import ReloadSVG from "../../assets/icons/ReloadSVG";
import { SafeAreaView } from "react-native-safe-area-context";
import { FullScreenLoader } from "../../components";
import colors from "../../theme";
import BookSVG from "../../assets/icons/BookSVG";

export default () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const statuses = useAppSelector(selectQueryStatuses);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserProfile());
    }
  }, [user]);

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <Pressable
          onPress={() => dispatch(fetchUserProfile())}
          style={styles.reloadButton}
        >
          {statuses.fetchProfile ? (
            <ActivityIndicator size={"small"} color={colors.accent} />
          ) : (
            <ReloadSVG width={30} height={30} />
          )}
        </Pressable>
      </View>
      {user ? (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>
            Hey,{" "}
            <Text style={{ fontWeight: "700" }}>
              {user?.firstName} {user?.lastName}
            </Text>
            ! 🎉
          </Text>
          <Text style={[styles.label, { color: colors.secondaryText }]}>
            {user?.email}
          </Text>
        </View>
      ) : (
        <FullScreenLoader />
      )}
      <View style={styles.floatContainer}>
        <BookSVG width={750} height={730} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 18,
    gap: 8,
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
  },
  reloadButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  floatContainer: {
    position: "absolute",
    bottom: 0,
  },
});
