import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTask = () => {
    if (inputTask.trim().length === 0) return;

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const currentTime = `${day}-${month}-${year}`;

    setTasks([
      ...tasks,
      { text: inputTask, date: currentTime, completed: false },
    ]);
    setInputTask("");
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.safeContainer}>
      <View style={styles.field}>
        <Text style={styles.title}> Todo List </Text>
        <Text style={styles.label}>Enter task</Text>
        <TextInput
          style={styles.input}
          value={inputTask}
          placeholder="Do laundry, Wash clothes, etc..."
          onChangeText={setInputTask}
        />
      </View>

      <TouchableOpacity onPress={handleTask}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+ Add Task</Text>
        </View>
      </TouchableOpacity>

      <View style={[styles.field, { flex: 1, borderRadius: 10, padding: 10 }]}>
        {tasks.map((item, index) => (
          <View key={index} style={styles.taskCard}>
            <TouchableOpacity
              onPress={() => toggleComplete(index)}
              style={styles.checkButton}
            >
              <Text style={{ fontSize: 18 }}>
                {item.completed ? "✔️" : "⭕"}
              </Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.itemText,
                item.completed && styles.completedText,
              ]}
            >
              {item.text} <Text style={styles.dateText}>({item.date})</Text>
            </Text>
            <TouchableOpacity onPress={() => removeTask(index)}>
              <Text style={styles.deleteText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: 80,
    padding: 20,
    backgroundColor: "#f8f9fd",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    marginBottom: 35,
    color: "#342c80",
  },
  field: {
    marginBottom: 20,
  },
  label: {
    padding: 5,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
    color: "#444",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#342c80",
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  checkButton: {
    marginRight: 12,
  },
  itemText: {
    fontSize: 18,
    flexShrink: 1,
    color: "#222",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "gray",
    opacity: 0.6,
  },
  dateText: {
    fontSize: 12,
    color: "gray",
  },
  deleteText: {
    fontSize: 20,
    marginLeft: 10,
    color: "red",
  },
});
