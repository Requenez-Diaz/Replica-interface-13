import React from "react";

import { Text, View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Gpa = () => {
  return (
    <View>
      <View style={styles.txt}>
        <Text style={styles.txt1}>GPA (Optional)</Text>
        <Text style={styles.txt1}>Scale</Text>
      </View>
      <View style={styles.padre}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="3.85"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="4.0"
            keyboardType="numeric"
          />
          <AntDesign
            style={styles.icon}
            name="caretdown"
            size={20}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};
export default Gpa;
const styles = StyleSheet.create({
  padre: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 15,
  },
  form: {
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    borderRadius: 8,
    height: 50,
    width: "35%",
    alignItems: "center",
  },
  input: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 8,
    fontSize: 20,
    color: "black",
  },
  icon: {
    paddingTop: 6,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  txt: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
  txt1: {
    flex: 1,
    marginHorizontal: 60,
    fontSize: 20,
  },
});
