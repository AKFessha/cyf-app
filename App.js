import React from "react";
import { StyleSheet, Text, View, Alert, Image, Button } from "react-native";

export default class App extends React.Component {
  alert = () => {
    Alert.alert(alert, "You pressed the click Button");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>I</Text>
        <Image source={require("./assets/heart.jpg")} style={styles.image} />
        <Text>CodeYourFuture</Text>
        <Button
          onPress={this.alert}
          title="Click"
          color="#841584"
          accessibilityLabel="Click"
        />
        <View style={styles.container2}>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.text}> 1</Text>
          </View>
          <View style={[styles.box, styles.box2]}>
            <Text style={styles.text}> 2</Text>
          </View>
          <View style={[styles.box, styles.box3]}>
            <Text style={styles.text}> 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 150,
    height: 150
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  box: {
    height: 100,
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  text: {
    alignItems: "center"
  },
  box1: {
    backgroundColor: "red"
  },
  box2: {
    backgroundColor: "green"
  },
  box3: {
    backgroundColor: "blue"
  }
});
