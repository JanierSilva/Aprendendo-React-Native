import { StatusBar, StyleSheet, Text, SafeAreaView, Image, Dimensions, View } from 'react-native';
import Topo from './source/telas/Carrinho/Topo';
//import logoVendedor from './assets/logo.png';
import Detalhes from './source/telas/Carrinho/Detalhes';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Topo/>
      <Detalhes/> 
                 
      <StatusBar  />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },
 
  

});
