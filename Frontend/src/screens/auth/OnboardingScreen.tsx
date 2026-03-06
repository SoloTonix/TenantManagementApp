import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import PagerView from "react-native-pager-view";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const slides = [
  {
    icon: "business-outline",
    title: "Manage Properties Easily",
    description:
      "Add and organize all your rental properties in one simple dashboard."
  },
  {
    icon: "cash-outline",
    title: "Track Rent Payments",
    description:
      "Monitor rent payments, overdue tenants, and payment history with ease."
  },
  {
    icon: "people-outline",
    title: "Stay Organized",
    description:
      "Keep tenant records, agreements, and contact details in one place."
  }
];

const OnboardingScreen = ({ navigation }: any) => {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);

  const handleNext = () => {
    if (page < slides.length - 1) {
      pagerRef.current?.setPage(page + 1);
    } else {
      navigation.replace("RoleSelect");
    }
  };

  return (
    <View style={styles.container}>
      <PagerView
        style={{ flex: 1 }}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(e) => setPage(e.nativeEvent.position)}
      >
        {slides.map((slide, index) => (
          <View style={styles.slide} key={index}>
            <Ionicons
              name={slide.icon as any}
              size={90}
              color="#2563EB"
              style={styles.icon}
            />

            <Text style={styles.title}>{slide.title}</Text>

            <Text style={styles.description}>
              {slide.description}
            </Text>
          </View>
        ))}
      </PagerView>

      {/* Pagination */}
      <View style={styles.pagination}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              page === i && styles.activeDot
            ]}
          />
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {page === slides.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 40
  },

  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40
  },

  icon: {
    marginBottom: 30
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10
  },

  description: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 22
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 5
  },

  activeDot: {
    backgroundColor: "#2563EB",
    width: 18
  },

  button: {
    marginHorizontal: 30,
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600"
  }
});