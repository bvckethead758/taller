import React, { useState } from "react";
import { Button, Text, View } from "react-native";

function ClickCounter() {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Has presionado el botón {contador} veces</Text>
            <Button title="Incrementar" onPress={incrementarContador} />
        </View>
    );
}

export default ClickCounter;
