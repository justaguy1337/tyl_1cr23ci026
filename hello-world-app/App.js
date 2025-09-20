import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

// view component is similar to div component in html. non scrollable

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Text></Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/doge.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});