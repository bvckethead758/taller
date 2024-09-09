import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

function DynamicForm() {
  // Estado para manejar el valor del campo de entrada
  const [valor, setValor] = useState("");
  // Estado para almacenar el valor enviado
  const [valorEnviado, setValorEnviado] = useState("");

  // Función que se ejecuta al enviar el formulario
  const manejarEnvio = () => {
    setValorEnviado(valor);
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Campo de entrada para introducir datos */}
      <TextInput
        keyboardType="default"
        onChangeText={(texto) => setValor(texto)}
        value={valor}
        placeholder="Introduce un valor"
        style={{
          borderColor: "gray",
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
      />
      {/* Botón para enviar el valor */}
      <Button title="Enviar" onPress={manejarEnvio} />
      
      {/* Mostrar el valor enviado si existe */}
      {valorEnviado ? (
        <Text style={{ marginTop: 20 }}>Has introducido: {valorEnviado}</Text>
      ) : null}
    </View>
  );
}

export default DynamicForm;
