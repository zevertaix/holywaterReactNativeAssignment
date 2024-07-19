import React, { useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../../theme";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import CrossSVG from "../../assets/icons/CrossSVG";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParams } from "../../navigation/RootNavigator";
import GearSVG from "../../assets/icons/GearSVG";
import ArrowLeftSVG from "../../assets/icons/ArrowLeftSVG";
import ArrowRightSVG from "../../assets/icons/ArrowRightSVG";
import BurgerSVG from "../../assets/icons/BurgerSVG";
import { CHAPTERS_MOCK } from "../../mock/chapters";
import PrimaryButton from "../../components/PrimaryButton";

export default () => {
  const { goBack } = useNavigation<NavigationProp<StackParams>>();
  const { bottom: bottomSafeArea } = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [toolbarHeight, setToolbarHeight] = useState(0);

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => goBack()}>
          <CrossSVG />
        </Pressable>
        <Text style={{ fontSize: 22, fontWeight: "800" }}>
          Chapter {currentChapter}
        </Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: toolbarHeight,
          paddingTop: 10,
        }}
      >
        <Text style={{ fontSize: 16, color: colors.primaryText }}>
          {CHAPTERS_MOCK[currentChapter - 1]}
        </Text>
        {currentChapter !== CHAPTERS_MOCK.length && (
          <PrimaryButton
            title="Next Chapter"
            onPress={() => {
              setCurrentChapter(currentChapter + 1);
              onPressTouch();
            }}
          />
        )}
      </ScrollView>

      <View
        style={[styles.footer, { paddingBottom: bottomSafeArea + 20 }]}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setToolbarHeight(height);
        }}
      >
        <BurgerSVG />
        <GearSVG />
        <Pressable
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() => setCurrentChapter(currentChapter - 1)}
          disabled={currentChapter === 1}
        >
          <ArrowLeftSVG
            color={currentChapter === 1 ? colors.lightGrey : colors.primaryText}
          />
        </Pressable>
        <Pressable
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() => setCurrentChapter(currentChapter + 1)}
          disabled={currentChapter === CHAPTERS_MOCK.length}
        >
          <ArrowRightSVG
            color={
              currentChapter === CHAPTERS_MOCK.length
                ? colors.lightGrey
                : colors.primaryText
            }
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {},
  header: {
    borderBottomWidth: 2,
    borderColor: colors.divider,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 10,
    justifyContent: "space-between",
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 2,
    borderColor: colors.divider,
    backgroundColor: colors.white,
  },
});
