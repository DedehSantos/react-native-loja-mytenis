import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native';

import Shoes from '../../component/Shoes';

export default function Home() {

  
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}> - </Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>

          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: "center" }}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"

            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}> LANÇAMENTOS </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/1.png')} cost="S$140,90" onClick={()=> navigation.navigate('Detail')}>
            Nike Air Max Dia
          </Shoes>
          <Shoes img={require('../../assets/2.png')} cost="S$280,90" onClick={()=>navigation.navigate('Detail')} >
            Nike Downshiftfer 10
          </Shoes>

        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} cost="S$560,90" onClick={()=> alert('clica não carai')}>
            Nike Squidward
          </Shoes>
          <Shoes img={require('../../assets/5.png')} cost="S$220,90" onClick={()=> alert('clica não carai')}>
            Nike React Flyknit 2
          </Shoes>

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost="S$160,90" onClick={()=> alert('clica não carai')} >
            Nike Joyride Ron
          </Shoes>
          <Shoes img={require('../../assets/6.png')} cost="S$920,90" onClick={()=> alert('clica não carai')} >
            Nike Air Dia Sujeito Programador
          </Shoes>

        </View>

      </ScrollView>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 8

  },

  image: {
    width: '100%'
  },

  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },

  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2,
  }

})