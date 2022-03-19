import { StatusBar, StyleSheet, Text, SafeAreaView, ScrollView, FlatList, Dimensions, View } from 'react-native';
import Topo from './source/telas/Carrinho/Topo';
//import logoVendedor from './assets/logo.png';
import Detalhes from './source/telas/Carrinho/Detalhes';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Mocks from './source/mocks/carrinho'
import Item from './source/telas/Carrinho/Item';

import Texto from './source/components/Texto';


export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <View></View>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Topo {...Mocks.topo} />
      <Detalhes {...Mocks.detalhes} />

      <Texto style={styles.titulo}>
        {Mocks.itens.titulo}
      </Texto>
      <FlatList
        data={Mocks.itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
      />

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    color: "#ffa500",
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 15,
    fontSize: 25,
  },
});
