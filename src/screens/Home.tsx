import { Text, View } from "react-native";
import React, { Component } from "react";
import { VStack } from "native-base";
import { Button } from "../components/Button";

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>

        <VStack>
          <Button />
        </VStack>
      </View>
    );
  }
}
