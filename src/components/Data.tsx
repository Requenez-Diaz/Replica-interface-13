import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Data = () => {
  return (
    <View>
      <View style={styles.txt}>
        <Text style={styles.txt1}>From</Text>
        <Text style={styles.txt1}>To</Text>
      </View>
      <View style={styles.padre}>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="July 2021" />
          <AntDesign
            style={styles.icon}
            name="caretdown"
            size={20}
            color="black"
          />
        </View>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Augoust 2022" />
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
export default Data;

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
