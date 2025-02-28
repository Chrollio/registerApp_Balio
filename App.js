import React, { useState } from "react";
import { Text, TextInput, View, Button, Alert } from "react-native";
import { regdesignstyle } from "./src/styles/Design";

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const clearFields = () => {
    setUsername('');
    setPassword('');
  };

  const handleRegister = () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert(
        "Form Incomplete",
        "Please fill in both Username and Password.",
        [{ text: "OK", onPress: clearFields }]  // Clear fields after the alert
      );
      return;
    }

    Alert.alert(
      "Registration Complete",
      `Username: ${username}\nPassword: ${password}`,
      [{ text: "OK", onPress: clearFields }]  // Clear fields after the alert
    );
  };

  return (
    <View style={regdesignstyle.container}>
      <View style={regdesignstyle.box}>
        <Text style={regdesignstyle.title}>Register App</Text>

        <TextInput
          value={username}
          style={regdesignstyle.input}
          placeholder="Username"
          onChangeText={setUsername}
        />

        <TextInput
          value={password}
          style={regdesignstyle.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />

        <Button title="Register" onPress={handleRegister} />
      </View>
    </View>
  );
};

export default App;
