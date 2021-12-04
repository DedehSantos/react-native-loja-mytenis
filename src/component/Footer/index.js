import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>Você também pode gostar</Text>
       <View style={{flexDirection: 'row'}}>
           <ScrollView horizontal showsHorizontalScrollIndicator ={false}>
               <View style={{marginHorizontal: 10}}>
                   <Shoes img={require('../../assets/1.png')} cost="110,90">
                     Nike Air Max Dia
                   </Shoes>
               </View>
               <View style={{marginHorizontal: 10}}>
                   <Shoes img={require('../../assets/2.png')}cost="150,90">
                   Nike Revolution 6 Next Nature
                   </Shoes>
               </View>
               <View style={{marginHorizontal: 10}}>
                   <Shoes img={require('../../assets/3.png')}cost="250,90" >
                   Nike Revolution 6 Next
                   </Shoes>
               </View>
               <View style={{marginHorizontal: 10}}>
                   <Shoes img={require('../../assets/4.png')} cost="540,90">
                   Nike Mc Trainer Masculino
                   </Shoes>
               </View>
               <View style={{marginHorizontal: 10}}>
                   <Shoes img={require('../../assets/5.png')} cost="190,90" >
                   Nike Superrep Go 2 Masculino
                   </Shoes>
               </View>
               <View style={{marginHorizontal: 10}}>
                   <Shoes img={require('../../assets/6.png')} cost="230,90">
                   Nike City Rep Tr Masculino
                   </Shoes>
               </View>

           </ScrollView>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        marginHorizontal: '2%'
    }

})