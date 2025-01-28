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
  import { useRouter } from "expo-router";
  
  const Index = () => {
    const router = useRouter();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Image
          source={require("../assets/images/welcome.png")}
          style={styles.bgImage}
          resizeMode="cover"
        />
        <Animated.View
          entering={FadeInDown.duration(600)}
          style={StyleSheet.absoluteFill}
        >
          <LinearGradient
            colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.5)", "white"]}
            style={styles.gradient}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.8 }}
          />
        </Animated.View>
        <View style={styles.contentContainer}>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}
          >
            pixify
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(500).springify()}
            style={styles.punchLine}
          >
            lorem ipsum
          </Animated.Text>
        </View>
        <Animated.View
          entering={FadeInDown.delay(600).springify()}
          style={styles.buttonContainer}
        >
          <Pressable style={styles.startButton} onPress={() => router.push("home")}>
            <Text style={styles.startText}>Get Started</Text>
          </Pressable>
        </Animated.View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bgImage: {
      width: wp(100),
      height: hp(100),
      position: "absolute",
    },
    gradient: {
      width: wp(100),
      height: hp(65),
      position: "absolute",
      bottom: 0,
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: hp(15),
      gap: 10,
    },
    buttonContainer: {
      alignItems: "center",
      marginBottom: hp(8),
    },
    title: {
      fontSize: hp(7),
      color: theme.colors.neutral(0.9),
      fontWeight: "bold",
    },
    punchLine: {
      fontSize: hp(2),
      letterSpacing: 1,
      marginBottom: 10,
      fontWeight: "500",
    },
    startButton: {
      backgroundColor: theme.colors.neutral(0.9),
      padding: 15,
      paddingHorizontal: 90,
      borderRadius: theme.radius.xl,
    },
    startText: {
      color: theme.colors.white,
      fontSize: hp(3),
      fontWeight: "500",
      letterSpacing: 1,
    },
  });
  
  export default Index;
  