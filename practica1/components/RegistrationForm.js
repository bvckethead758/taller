import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

// Recibe la función onRegister desde App.js como prop
function RegistrationForm({ onRegistro }) {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    // Esta función invocará a onRegistro, que fue pasada desde App.js
    const manejarRegistro = () => {
        // Llama a la función onRegistro con los datos actuales
        onRegistro({ correo, contrasena });
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                keyboardType="email-address"
                onChangeText={(texto) => setCorreo(texto)}
                value={correo}
                placeholder="correo@ejemplo.com"
                style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 10,
                }}
            />

            <TextInput
                keyboardType="default"
                secureTextEntry={true} // Para ocultar el texto de la contraseña
                onChangeText={(texto) => setContrasena(texto)}
                value={contrasena}
                placeholder="Contraseña"
                style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 10,
                }}
            />

            <Button title="Registrar" onPress={manejarRegistro} />
        </View>
    );
}

export default RegistrationForm;
