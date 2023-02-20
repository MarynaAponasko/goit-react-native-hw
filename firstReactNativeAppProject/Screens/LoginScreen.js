import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  Dimensions,
} from "react-native";
// import * as Font from "expo-font";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useTogglePasswordVisibility } from "../assets/hooks/useTogglePasswordVisibility";

SplashScreen.preventAutoHideAsync();

const initialState = {
  email: "",
  password: "",
};
// const windowDimensions = Dimensions.get("window");
// const screenDimensions = Dimensions.get("screen");

const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const { passwordVisibility, rightText, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };
  const submitFormInfo = () => {
    console.log(state);
    setState(initialState);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={() => keyboardHide()}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require("../assets/Photo-BG.jpg")}
          style={styles.backgroung}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View
              style={{
                ...styles.box,
                marginBottom: isShowKeyboard ? -168 : 0,
              }}
            >
              <View style={styles.form}>
                <Text style={styles.formTitle}>Sign in</Text>

                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={styles.input}
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                    placeholder="Email address"
                    placeholderTextColor="#BDBDBD"
                    textAlign="left"
                    textContentType="emailAddress"
                    onFocus={() => setIsShowKeyboard(true)}
                    onSubmitEditing={() => keyboardHide()}
                  />
                </View>
                <View style={styles.passwordBox}>
                  <TextInput
                    style={styles.passwordInput}
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    placeholder="Password"
                    placeholderTextColor="#BDBDBD"
                    textAlign="left"
                    textContentType="password"
                    onFocus={() => setIsShowKeyboard(true)}
                    onSubmitEditing={() => keyboardHide()}
                    keyboardType="default"
                    secureTextEntry={passwordVisibility}
                  />
                  <Pressable onPress={handlePasswordVisibility}>
                    <Text style={styles.passwordBtn}>{rightText}</Text>
                  </Pressable>
                </View>

                <TouchableOpacity
                  style={styles.submitBtn}
                  activeOpacity={0.8}
                  onPress={() => submitFormInfo()}
                >
                  <Text style={styles.titleBtn}>Sign in</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.optionalText}>Need an acount? Sign up</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroung: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  box: {
    backgroundColor: "#ffffff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 78,
  },
  form: {
    marginHorizontal: 16,
  },
  formTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 32,
    marginTop: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    borderRadius: 8,
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
  passwordBox: {
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    borderRadius: 8,
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
  passwordInput: {
    width: "90%",
  },
  passwordBtn: {
    width: 40,
    color: "#1B4371",
  },
  submitBtn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
    marginBottom: 16,
  },
  titleBtn: {
    color: "#ffffff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    marginRight: "auto",
    marginLeft: "auto",
  },
  optionalText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
});
