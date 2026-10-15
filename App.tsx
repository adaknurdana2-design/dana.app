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

import ForgotPassword from './src/components/ForgotPassword';
import Home from './src/components/Home';

export default function App() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showHome, setShowHome] = useState(false);

  if (showForgotPassword) {
    return (
      <ForgotPassword
        onBack={() => setShowForgotPassword(false)}
      />
    );
  }

  if (showHome) {
    return (
      <Home
        onBack={() => setShowHome(false)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable
          style={styles.backButton}
          onPress={() => {
            console.log('Артқа батырмасы басылды');
          }}
        >
          <Text style={styles.backButtonText}>
            ←
          </Text>
        </Pressable>

        <Text style={styles.title}>
          Привет, с возвращением в KINOTAP!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputIconText}>
            📞
          </Text>

          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Номер телефона"
            placeholderTextColor="#AAA9B2"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputSpace} />

        <View style={styles.inputContainer}>
          <Text style={styles.inputIconText}>
            🔒
          </Text>

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Введите пароль"
            placeholderTextColor="#AAA9B2"
            secureTextEntry={true}
          />
        </View>

        <Pressable
          style={styles.continueButton}
          onPress={() => setShowHome(true)}
        >
          <Text style={styles.continueButtonText}>
            Продолжить
          </Text>
        </Pressable>

        <Pressable
          style={styles.forgotButton}
          onPress={() => setShowForgotPassword(true)}
        >
          <Text style={styles.forgotPassword}>
            Забыл пароль
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#080b12',
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 24,
  },

  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
    fontWeight: '300',
  },

  title: {
    color: '#1B1923',
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 34,
  },

  subtitle: {
    color: '#AAA9B2',
    fontSize: 18,
    marginTop: 3,
    marginBottom: 29,
  },

  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
  },

  inputSpace: {
    height: 10,
  },

  inputIconText: {
    fontSize: 20,
    marginRight: 14,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 18,
  },

  continueButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#1B1923',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  continueButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },

  forgotButton: {
    alignSelf: 'flex-start',
    marginTop: 12,
  },

  forgotPassword: {
    color: '#2864ff',
    fontSize: 16,
  },
});