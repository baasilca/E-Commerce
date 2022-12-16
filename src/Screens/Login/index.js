import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Snackbar } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from '../../store';

const index = (props) => {
  const { navigation } = props;
  const [state, dispatch] = useContext(Context);
  const [email, setEmail] = useState('test@credot.com');
  const [password, SetPassword] = useState("12345");
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("Incorrect login details");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 0 : 0;


  const login = () => {
    if (email === '' || password === '') {
      setErrorMessage('Enter username and password');
      setSnackbarVisible(true);
    } else {
      const loginData = {
        "username": email,
        "password": password,
      }
      if (email === "test@credot.com" && password === "12345") {
        dispatch({ type: 'SET_SESSION', payload: loginData });
        try {
          AsyncStorage.setItem('sessionData', JSON.stringify(loginData)
          );
        } catch (error) {
          console.error('AsyncStorage error: ' + error.message);
        }
      } else {

        setSnackbarVisible(true);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <LinearGradient colors={["#08C25D", "#fff", "#fff"]} style={{ flex: 1 }}>
        <StatusBar backgroundColor={"#08C25D"} barStyle="light-content" />
        <View style={styles.header}>

          <Text style={styles.text_header}>E-Commerce</Text>
        </View>

        <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
          <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../../assets/icon.png")}
                style={{
                  width: 80,
                  height: 80,
                  resizeMode: "contain",
                }}
              ></Image>
            </View>
            <Text
              style={[
                styles.text_footer,
                {
                  color: "#08C25D"
                },
              ]}
            >
              Username
            </Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color={"#08C25D"} size={20} />
              <TextInput
                placeholder="Enter your username"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: "#08C25D"
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
              />
            </View>

            <Text
              style={[
                styles.text_footer,
                {
                  color: "#08C25D",
                  marginTop: 25,
                },
              ]}
            >
              Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color={"#08C25D"} size={20} />
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: "#08C25D"
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(text) => SetPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                secureTextEntry={secureTextEntry}
              />

              <TouchableOpacity
                hitSlop={styles.hitSlop}
                onPress={() => {
                  setsecureTextEntry(!secureTextEntry);
                }}
              >
                {secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color={"#08C25D"} size={20} />
                )}
              </TouchableOpacity>
            </View>
            
            <LinearGradient
              colors={["#b2edc0", "#08C25D"]}
              style={[styles.button, { flex: 1, borderRadius: 10, bottom: 10 }]}
            >
              <TouchableOpacity
                onPress={() => {
                  login();
                }}
                style={[styles.signIn]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Login
                </Text>

              </TouchableOpacity>

            </LinearGradient>
          </ScrollView>
        </Animatable.View>

        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          action={{
            label: 'Okay',
            onPress: () => {
            },
          }}>
          {errorMessage}
        </Snackbar>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08C25D"
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    alignSelf: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: -10,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    marginTop: 0,
    color: "#05375a",
  },

  button: {
    alignItems: "center",
    marginTop: 35,
  },
  signIn: {
    width: "100%",
    height: 50,
    alignItems: "center",
    borderRadius: 10,
  },
  errorContainer: {
    width: "100%",
    marginTop: 30,
  },
  error: {
    alignSelf: "center",
    textAlign: "left",
    marginLeft: 20,
    paddingLeft: 50,
    paddingRight: 50,
    color: "red",
  },
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 50,
    right: 50,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
  },
  tost: {
    color: "red"
  }
});
