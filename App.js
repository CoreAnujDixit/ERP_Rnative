import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import logo from "./assets/DSEU.png";
import logo2 from "./assets/icons8-google-60.png";
const App = () => {
  const handleLogin = () => {
    console.log("Login button pressed");
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={logo} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>DSEU ERP LOGIN</Text>
        <Text style={styles.divider}>
          ────────── <FontAwesome name="user-circle" size={24} color="black" />{" "}
          ──────────
        </Text>
        <TextInput
          placeholder=" Username"
          style={styles.input}
          placeholderTextColor="#666"
        />
        <TextInput
          placeholder=" Password"
          style={styles.input}
          placeholderTextColor="#666"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20, fontWeight: "bold" }}>OR</Text>

        <TouchableOpacity
          style={[
            styles.loginButton,
            {
              backgroundColor: "#4285f4",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
          onPress={handleLogin}
        >
          <Image source={logo2} style={{ width: 35, height: 35 }} />
          <Text
            style={[styles.loginButtonText, { backgroundColor: "#4285f4" }]}
          >
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  image: {
    marginTop: 20,
    height: 80,
    width: 80,
  },
  title: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 18,
  },
  divider: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 10,
    backgroundColor: "#dadada",
    width: "100%",
    height: 40,
  },
  loginButton: {
    marginTop: 35,
    backgroundColor: "#d9627e",
    paddingVertical: 10,
    width: "100%",
    borderRadius: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
