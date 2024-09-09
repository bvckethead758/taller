import React from "react";
import { Button } from "react-native";

function ThemeSwitcher({ onCambiarTema }) {
  return (
    // Botón que llama a la función 'onCambiarTema' cuando se presiona
    <Button title="Cambiar Tema" onPress={onCambiarTema} />
  );
}

export default ThemeSwitcher;
