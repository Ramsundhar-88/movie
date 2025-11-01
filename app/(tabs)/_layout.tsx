import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { ImageBackground, Image, Text, View } from "react-native";
import { icons } from "@/constants/icons";

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="w-20 h-14 mt-2 justify-center items-center rounded-full overflow-hidden"
      >
        <Image
          source={icon}
          className="size-5"
          style={{ tintColor: "#151312" }}
        />
        <Text className="text-[#151312] text-xs font-semibold mt-1">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="mt-2 justify-center items-center">
      <Image
        source={icon}
        className="size-5"
        style={{ tintColor: "#aaa" }}
      />
      <Text className="text-[#aaa] text-xs font-medium mt-1">
        {title}
      </Text>
    </View>
  );
};

export default function _Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderTopWidth: 0,
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          position: 'absolute',
          height: 52,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: '#0f0d23'
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
