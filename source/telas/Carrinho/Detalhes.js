import React from 'react';
import { Image, Text, StyleSheet, Dimensions } from 'react-native-web';
//import topo from '../../../assets/topo.png';
import logoVendedor from './assets/logo.png';
import Detalhes from './source/telas/Carrinho/Detalhes';


const width = Dimensions.get("screen").width;

export default function Detalhes() {
    return <>
        <Text style={styles.detalhes}>Detalhes do Carrinho</Text>
        <Text style={styles.titulo}>Kit IoT</Text>
        <View style={styles.vendedor}>
            <Image style={styles.logoVendedor} source={logoVendedor} />
            <Text style={styles.nomeVendedor}>Nuvem Cloud Shopping</Text>
        </View>
        <Text style={styles.desc}>Kit IoT que revoluciona a vida dos estudantes</Text>
        <Text style={styles.preco}>R$ 99,00</Text>
    </>
}

const styles = StyleSheet.create({
    detalhes: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign: "center",
    },
    titulo: {
        color: "#ffa500",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign: "center",
    },
    nomeVendedor: {
        color: "#a3a3a3",
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 10,
    },
    desc: {
        color: "#000000",
        fontSize: 16,
        paddingVertical: 10,
        marginLeft: 15,
    },
    preco: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "right",
        paddingHorizontal: 10,
    },
    logoVendedor: {
        width: 32,
        height: 32,
        marginLeft: 5
    },
    vendedor: {
        flexDirection: "row",
        padding: 10,
    }

})