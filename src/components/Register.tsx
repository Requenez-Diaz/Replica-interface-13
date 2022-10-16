import { View, TextInput, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Register = () => {
  return (
    <View>
        <Text style={styles.text}>Educationl Attainment</Text>
        <View style= {styles.father}>
        <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Completed Master's Degree" />
        <AntDesign
          style={styles.icon}
          name="caretdown"
          size={20}
          color="black"
        />
      </View>
        </View>
      <Text style={styles.text}>Course</Text>
      <View style={styles.container}>
        <TextInput style={styles.inputs} placeholder="Computer Science " />
      </View>
      <Text style={styles.text}>School</Text>
      <View style={styles.container}>
        <TextInput style={styles.inputs} placeholder="Harvard University" />
      </View>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  inputs: {
    width: "80%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  container: {
    alignItems: "center",
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    marginLeft: 50,
    paddingTop: 5,
    alignItems: "center",
    color: "gray",
  },
  father: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center'
  },
  form: {
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    borderRadius: 5,
    height: 60,
    width: "80%",
    alignItems: "center"
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
});
