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

import Sms from './sms';


type Props = {
  onBack: () => void;
};

export default function ForgotPassword({ onBack }: Props) {
  const [phone, setPhone] = useState('');
  const [smsList, setSmsList] = useState(false);

if (smsList) {
  return (
    <Sms
      onBack={() => setSmsList(false)}
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
          Забыл пароль?
        </Text>

        <Text style={styles.subtitle}>
          Введите номер телефона для восстановления пароля.
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


        <Pressable
          style={styles.smsButton}
          onPress={() => setSmsList(true)}
        >
          <Text style={styles.ssmsList}>
            Продолжить
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
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  smsButton: {
  width: '100%',
  height: 60,
  backgroundColor: '#1B1923',
  borderRadius: 18,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
},

ssmsList: {
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: '600',
},

});