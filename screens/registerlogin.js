import * as React from "react";
import { ImageBackground, StyleSheet, Pressable, Text, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const REGISTERLOGIN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerlogin}>
      <View style={styles.centeredContent}>
        <ImageBackground
          style={styles.image1Icon}
          resizeMode="cover"
          source={require("../assets/image1.png")}
        />
        <Pressable
          style={[styles.createAccountWrapper, styles.wrapperLayout, styles.loginButton]}
          onPress={() => navigation.navigate("REGISTER")}
        >
          <Text style={[styles.createAccount, styles.loginTypo]}>Create Account</Text>
        </Pressable>
        <TouchableHighlight
          style={[styles.loginWrapper, styles.wrapperLayout, styles.loginButton]} // Tambahkan properti styles.loginButton
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("LOGIN")}
        >
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "flex-end",
    height: 45,
    borderRadius: Border.br_xl,
    width: 189,
  },
  loginTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: FontSize.size_base,
  },
  image1Icon: {
    borderRadius: Border.br_5xs,
    width: 193,
    height: 272,
    marginBottom: 25,
  },
  createAccount: {
    color: Color.colorWhite,
  },
  createAccountWrapper: {
    backgroundColor: Color.colorDeepskyblue,
    paddingHorizontal: 19,
    marginBottom: 2,
  },
  login: {
    color: Color.colorBlack,
  },
  loginWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    paddingHorizontal: 69,
    marginTop: 15,
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
    alignItems: "flex-end",
    height: 45,
    borderRadius: Border.br_xl,
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  registerlogin: {
    flex: 1,
    width: "100%",
    height: 640,
    backgroundColor: Color.colorWhite,
  },
  loginButton: {
    width: 195, // Tambahkan properti width untuk tombol "Login"
  },
  loginRegister: {
    width: 195, // Tambahkan properti width untuk tombol "Login"
  },
});

export default REGISTERLOGIN;
