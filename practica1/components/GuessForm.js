import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function GuessForm({ correctAnswer }) {
  // Estado para almacenar la conjetura del usuario
  const [guess, setGuess] = useState('');

  // Estado para almacenar el resultado de la verificación
  const [result, setResult] = useState('');

  // Función para verificar si la conjetura es correcta
  const verifyAnswer = () => {
    if (guess === correctAnswer) {
      setResult('¡Correcto!');
    } else {
      setResult('Incorrecto. Inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adivina el Número</Text>
      
      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={(text) => setGuess(text)}
        keyboardType="numeric"
        placeholder="Introduce tu respuesta"
      />

      <Button title="Enviar" onPress={verifyAnswer} />

      {result !== '' && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GuessForm;