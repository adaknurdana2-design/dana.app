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

import Reset from './Reset';

type Props = {
  onBack: () => void;
};

export default function Sms({ onBack }: Props) {
  const [code, setCode] = useState('');
  const [resetPassword, setResetPassword] = useState(false);

  if (resetPassword) {
    return (
      <Reset
        onBack={() => setResetPassword(false)}
      />
    );
  }

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
          Введите код
        </Text>

        <Text style={styles.subtitle}>
          Введите код из SMS, который мы отправили
          на ваш номер телефона.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputIconText}>
            1️⃣
          </Text>

          <TextInput
            style={styles.input}
            value={code}
            onChangeText={setCode}
            placeholder="Введите код"
            placeholderTextColor="#AAA9B2"
            keyboardType="number-pad"
            maxLength={6}
          />
        </View>

        <Pressable
          style={styles.continueButton}
          onPress={() => setResetPassword(true)}
        >
          <Text style={styles.resetText}>
            Продолжить
          </Text>
        </Pressable>

        <Pressable
          style={styles.resendButton}
          onPress={() => {
            console.log('Код отправлен повторно');
          }}
        >
          <Text style={styles.resendText}>
            Отправить код повторно
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    marginTop: 5,
    marginBottom: 29,
    lineHeight: 25,
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

  resetText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  resendButton: {
    alignSelf: 'center',
    marginTop: 18,
  },

  resendText: {
    color: '#AAA9B2',
    fontSize: 16,
  },
});
