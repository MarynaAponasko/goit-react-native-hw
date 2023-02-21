import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
