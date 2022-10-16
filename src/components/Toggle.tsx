import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";

const Toggle = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.Toggle}>
          <ToggleSwitch
            isOn={true}
            onColor="blue"
            offColor="red"
            label="Graduated"
            labelStyle={{ color: "gray", fontWeight: "900" }}
            size="large"
            onToggle={(isOn) => console.log("changed to : ", isOn)}
          />
        </View>
      </View>
    </View>
  );
};
export default Toggle;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    marginLeft: 60,
    color: "gray",
  },
  input: {
    fontSize: 25,
    marginLeft: 45,
  },
  Toggle: {
    marginLeft: 50
  }
});
