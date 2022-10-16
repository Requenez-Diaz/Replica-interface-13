import { View, Text, ScrollView } from "react-native";
import Register from "./Register";
import Data from "./Data";
import Toggle from "./Toggle";
import Description from "./Description";
import Gpa from "./Gpa";

const Body = () => {
  return (
    <ScrollView>
      <View>
        <Register />
        <Data />
        <Toggle />
        <Gpa/>
        <Description />
      </View>
    </ScrollView>
  );
};
export default Body;