import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';

export default function Detail({ navigation }) {
    navigation.setOptions({
        headerTitle: 'Nike DoensShifer 10'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/detail.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]} >R$ 280,90</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 30 }]} >Nike DoensShifer 10</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color="#2379f4" />
                    <Dot color="#fb6e53" />
                    <Dot color="#ddd" />
                    <Dot color="#000" />
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal>
                        <SizeButton bgColor="#17181a" color='#ddd'>40</SizeButton>
                        <SizeButton > 37 </SizeButton>
                        <SizeButton > 39 </SizeButton>
                        <SizeButton > 42 </SizeButton>
                    </ScrollView>
                </View>

                <View style={styles.textContainer}>
                    <Text>
                        Nike DoensShifer 10
                    </Text>
                    <Text>
                        O tenis masculino Nike DoensShifer 10 traz amorotecimento e suporte atualizado para garantir um conformto
                    </Text>
                    <Text style={styles.textList}>
                        - Categorai : Amortecimento
                    </Text>
                    <Text style={styles.textList}>
                        - Materia
                    </Text>

                </View>
                <View>
                    
                     </View>

<Button/>


            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'

    },

    image: {
        width: '100%'
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    }
})