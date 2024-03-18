import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-virtualized-view'


export default function Home({ navigation }) {




  const [dados, setDados] = useState([]);



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerBadge}>
            {new Date('2024-03-10').toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'short',
              weekday: 'long',
            })}
          </Text>
          <FlatList
            data={dados}
            renderItem={({ item }) => (
              <Text style={styles.headerTitle}>Olá, {item.nome}</Text>
              // Substitua 'item.nome' pelo nome do campo que você deseja exibir
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Perfil')
          }>
          <View style={styles.avatar}>
            <Image
              alt=""
              source={require('../../assets/user.png')}
              style={styles.avatarImg} />

            <View style={styles.avatarNotification} />
          </View>
        </TouchableOpacity>

      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#9695b0"
          style={styles.searchInput}
        />
        <View style={styles.searchFloating}>
          <TouchableOpacity>
            <View style={styles.searchButton}>
              <FeatherIcon name="search" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>

        

          
    
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 19,
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
    marginTop: -10
  },
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  cardStats: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardStatsItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  cardStatsItemText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#636a73',
    marginLeft: 2,
  },
  cardAction: {
    marginLeft: 'auto',
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 19
  },
  headerBadge: {
    fontSize: 15,
    fontWeight: '400',
    color: '#a3a3a3',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#121212',
  },
  /** Avatar */
  avatar: {
    position: 'relative',
  },
  avatarImg: {
    width: 48,
    height: 48,
    borderRadius: 15,
  },
  avatarNotification: {
    position: 'absolute',
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#fff',
    top: 0,
    right: -2,
    width: 14,
    height: 14,
    backgroundColor: '#d1d5db',
  },
  search: {
    position: 'relative',
    margin: 19
  },
  searchInput: {
    height: 56,
    backgroundColor: '#f3f3f6',
    paddingHorizontal: 16,
    color: '#1a2525',
    fontSize: 18,
    borderRadius: 10,
  },
  searchFloating: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  searchButton: {
    alignSelf: 'center',
    width: 44,
    height: 44,
    borderRadius: 9999,
    backgroundColor: '#5bd2bc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 24,
    padding: 0,
    backgroundColor: 'transparent',
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});