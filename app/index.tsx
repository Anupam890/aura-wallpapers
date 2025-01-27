import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import React from "react";
import { hp, wp } from "@/constants/resolution";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { theme } from "@/constants/theme";

const index = () => {
  return (
    <View className="flex-1 ">
      <StatusBar barStyle="dark-content" />
      <Image
        source={require("../assets/images/welcome.png")}
        style={style.bgImage}
        resizeMode="cover"
      />
      <Animated.View entering={FadeInDown.duration(600)} className="flex-1">
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={style.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
      </Animated.View>
      <View style={style.contentContainer}>
        <Text>hello</Text>
        <Text>hello</Text>
      </View>
      <View>
        <Pressable>
          <Text>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  title:{
    fontSize:hp(7),
    color:theme.colors.neutral(0.9),
    

  }
});

export default index;
