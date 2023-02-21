import React, { useState, useCallback, useEffect } from "react";
import {
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
import { useTogglePasswordVisibility } from "../../assets/hooks/useTogglePasswordVisibility";
import { styles } from "./styles-registrationScreen";

SplashScreen.preventAutoHideAsync();

const initialState = {
  login: "",
  email: "",
  password: "",
};
// const windowDimensions = Dimensions.get("window");
// const screenDimensions = Dimensions.get("screen");

const RegistrationScreen = () => {
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
    "Roboto-Regular": require("./../../assets/fonts/Roboto-Regular.ttf"),
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
          source={require("./../../assets/Photo-BG.jpg")}
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
                <Text style={styles.formTitle}>Sign up</Text>
                <TextInput
                  style={styles.input}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  placeholder="Login"
                  autoCapitalize="words"
                  placeholderTextColor="#BDBDBD"
                  textAlign="left"
                  textContentType="name"
                  onFocus={() => setIsShowKeyboard(true)}
                  onSubmitEditing={() => keyboardHide()}
                />
                <View style={{ marginBottom: 16, marginTop: 16 }}>
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
                  <Text style={styles.titleBtn}>Sign up</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.optionalText}>
                Already have an acount? Sign in
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
