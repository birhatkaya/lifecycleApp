import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";

export default function App() {
  const [helloFlag, setHelloFlag] = useState(true);
  function updateFlag() {
    setHelloFlag(!helloFlag);
  }
  /*  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("arttirildi" + " : " + number);
  }, [number])  */

  return (
    <View style={styles.container}>
      <Text>Hello Lifecycle</Text>
      <Button title="Bas" onPress={updateFlag} />
      {helloFlag && <Hello />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

function Hello() {
  useEffect(() => {
    console.log("Merhaba dünya");
    return () => {
      console.log("Kod gitti");
    };
  }, []);

  return (
    <View style={{ backgroundColor: "lightgrey", padding: 10 }}>
      <Text>Hello Componento</Text>
    </View>
  );
}
