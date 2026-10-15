import React, { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Home from './Home';

type Props = {
  onBack: () => void;
};

export default function Reset({ onBack }: Props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [goHome, setGoHome] = useState(false);

  if (goHome) {
    return <Home />;
  }

  const handleReset = () => {
    if (!password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    setGoHome(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable
          style={styles.backButton}
          onPress={onBack}
        >
          <Text style={styles.backButtonText}>
            ←
          </Text>
        </Pressable>

        <Text style={styles.title}>
          Введите пароль
        </Text>

        <Text style={styles.subtitle}>
          Придумайте новый пароль
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Новый пароль"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Повторите пароль"
          placeholderTextColor="#999"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <Pressable
          style={[
            styles.button,
            (!password || !confirmPassword) &&
              styles.buttonDisabled,
          ]}
          onPress={handleReset}
          disabled={!password || !confirmPassword}
        >
          <Text style={styles.buttonText}>
            Изменить пароль
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  backButtonText: {
    fontSize: 32,
    color: '#111',
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
  },

  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111',
    marginBottom: 14,
    backgroundColor: '#fafafa',
  },

  button: {
    height: 56,
    borderRadius: 14,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonDisabled: {
    backgroundColor: '#ccc',
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

