import { StyleSheet, Text, View } from "react-native";
import Tracking from "./track";

export default function App() {
  return (
    <View style={styles.container}>
      <Tracking />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
