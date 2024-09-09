import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import GuessForm from './GuessForm';

function Game() {
  // Generar la respuesta correcta aleatoriamente entre 1 y 100
  const generateRandomAnswer = () => Math.floor(Math.random() * 100) + 1;
  // Estado que almacena la respuesta correcta
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomAnswer());
  console.log(correctAnswer)

  // Estado para manejar si el juego ha terminado
  const [gameOver, setGameOver] = useState(false);

  // Función para reiniciar el juego
  const resetGame = () => {
    setCorrectAnswer(generateRandomAnswer());
    setGameOver(false); // Reiniciar el estado de fin de juego
  };

  // Función que se llama cuando el jugador adivina correctamente
  const handleCorrectGuess = () => {
    setGameOver(true);
  };

  return (
    <View style={styles.container}>
      {!gameOver ? (
        // Mostrar el formulario de adivinanza solo si el juego no ha terminado
        <GuessForm correctAnswer={correctAnswer.toString()} onCorrect={handleCorrectGuess} />
      ) : (
        <View>
          <Text style={styles.congratsText}>¡Felicidades! Has adivinado el número.</Text>
          <Button title="Reiniciar juego" onPress={resetGame} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Game;
