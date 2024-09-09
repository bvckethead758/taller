import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

//   Este es un simple componente de contador que muestra un valor y permite incrementarlo y decrementarlo.
//   ese valor props basicamente es un objeto que tiene una propiedad valor
//   puede llegar a tener mas cosas. pero si llamamos el metodo contador y le pasamos valor1, valor2
//   para acceder a valor1 y valor2 seria props.valor1 y props.valor2
 


function Contador(props)  {
    //   useState es un metodo que retorna un arreglo con dos elementos
    //   el primer elemento es el valor actual de la variable
    //   el segundo elemento es una funcion que permite modificar el valor de la variable
    //   el parametro que recibe es el valor inicial de la variable
     
  const [valor, setValor] = useState(props.valorInicial);


   

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {valor}</Text>

      <Button title="Incrementar" onPress={() => setValor(valor + 1)} />
      <Button title="Decrementar" onPress={() => setValor(valor - 1)} />
      

    </View>
  );
};

//   onPress es un evento que se ejecuta cuando se presiona el boton
//   ese evento dispara una funcion flecha 
//   onPress solo seria                         onPress={codigo aqui}
//   en este caso se le pasa una funcion flecha que ejecuta setValor(valor + 1)
 


const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Contador;
