import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SPLASHSCREEN = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // Redirect to the main screen or any other screen after the splash screen duration
      navigation.navigate("REGISTERLOGIN"); // Ganti "MainScreen" dengan nama screen tujuan Anda
    }, 3000); // 10000 milidetik (10 detik) adalah durasi tampilan splash screen
  }, []);

  return (
    <View style={styles.splashScreen}>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/imagecore.jpeg")}
      />
      <Text style={styles.washwell}>WASHWELL</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image1Icon: {
    position: 'absolute',
    width: '100%', // Mengatur gambar menjadi penuh di kiri dan kanan serta ada di bagian atas tanpa batas
    height: 509,
    top: 0, // Mengatur gambar penuh ke bagian atas
  },
  washwell: {
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: FontFamily.futuraMdBT,
    color: Color.colorBlack,
    textAlign: "center",
    marginTop: 700, // Menambahkan nilai marginTop untuk menggeser teks ke bawah
  },
});

export default SPLASHSCREEN;
