import React, { useState } from "react";
import { Text, TextInput, View, Alert, TouchableOpacity } from "react-native"; // Added TouchableOpacity
import { regdesignstyle } from "./src/styles/Design";

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const clearFields = () => {
    setUsername('');
    setPassword('');
    setFirstname('');
    setLastname('');
    setEmail('');
  };

  const handleRegister = () => {
    if (!username.trim() || !password.trim() || !firstname.trim() || !lastname.trim() || !email.trim()) {
      Alert.alert("Form Incomplete", "All fields are required.");
      return;
    }

    Alert.alert(
      "Registration Complete",
      `Username: ${username}\nFirst Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}`,
      [{ text: "OK", onPress: clearFields }]
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
          placeholderTextColor="black"
          onChangeText={setUsername}
        />

        <TextInput
          value={password}
          style={regdesignstyle.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry
          onChangeText={setPassword}
        />

        <TextInput
          value={firstname}
          style={regdesignstyle.input}
          placeholder="First Name"
          placeholderTextColor="black"
          onChangeText={setFirstname}
        />

        <TextInput
          value={lastname}
          style={regdesignstyle.input}
          placeholder="Last Name"
          placeholderTextColor="black"
          onChangeText={setLastname}
        />

        <TextInput
          value={email}
          style={regdesignstyle.input}
          placeholder="Email"
          placeholderTextColor="black"
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <TouchableOpacity style={regdesignstyle.button} onPress={handleRegister}>
          <Text style={regdesignstyle.buttonText}>Register</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default App;
