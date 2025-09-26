import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.safeContainer}>
      <Text style={styles.title}>Counter</Text>

      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#28a745" }]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#dc3545" }]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>Decrease</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: 300,
    padding: 20,
    backgroundColor: "#f8f9fd",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    marginBottom: 20,
    color: "#342c80",
  },
  counter: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#222",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    padding: 16,
    borderRadius: 10,
    minWidth: 120,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
