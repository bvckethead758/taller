import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import ChildCounter from "./ChildCounter";

function ParentCounter() {
    const [contadorPadre, setContadorPadre] = useState(0);

    // Función para incrementar el contador del padre
    const incrementarContador = () => {
        setContadorPadre(contadorPadre + 1);
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Componente desde el padre</Text>
            <Text>Contador del padre: {contadorPadre}</Text>

            {/* Pasar el estado y la función al componente hijo */}
            <ChildCounter contadorPadre={contadorPadre} incrementarContador={incrementarContador} />
        </View>
    );
}

export default ParentCounter;
