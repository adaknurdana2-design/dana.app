import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.container}>
        <Text style={styles.logo}>KINOTAP</Text>

        <Text style={styles.title}>
          Фильмы и сериалы
        </Text>

        <View style={styles.search}>
          <Text style={styles.searchText}>
            Поиск фильма...
          </Text>
        </View>

        <Text style={styles.section}>
          Популярное
        </Text>

        <View style={styles.movie}>
          <View style={styles.poster}>
            <Text style={styles.posterText}>FILM</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.movieTitle}>
              7 Qaraqshy
            </Text>

            <Text style={styles.movieText}>
              2026 • Экшен
            </Text>

            <Text style={styles.rating}>
              ★ ???
            </Text>
          </View>
        </View>

        <View style={styles.movie}>
          <View style={styles.poster}>
            <Text style={styles.posterText}>FILM</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.movieTitle}>
              Gashyqpyn sagan
            </Text>

            <Text style={styles.movieText}>
              2026 • Мелодрама
            </Text>

            <Text style={styles.rating}>
              ★ ???
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  container: {
    flex: 1,
    padding: 20,
  },

  logo: {
    color: '#2864ff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  search: {
    height: 50,
    backgroundColor: '#151b27',
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 15,
    marginBottom: 25,
  },

  searchText: {
    color: '#777777',
    fontSize: 15,
  },

  section: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  movie: {
    backgroundColor: '#121925',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    marginBottom: 15,
  },

  poster: {
    width: 90,
    height: 120,
    backgroundColor: '#1b3d91',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  posterText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  info: {
    marginLeft: 15,
    paddingTop: 5,
  },

  movieTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 7,
  },

  movieText: {
    color: '#8b95a7',
    fontSize: 13,
    marginBottom: 8,
  },

  rating: {
    color: '#ffd43b',
    fontSize: 14,
  },
});
