import React from "react";
import { View, Image, StyleSheet, FlatList, Text } from 'react-native';

function ImageList({ images }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Imágenes</Text>
      <FlatList 
        data={images}
        keyExtractor={(item, index) => index.toString()}  // Genera una clave única para cada elemento
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Image 
              source={{ uri: item.url }} 
              style={styles.image}  // Aplicar los estilos definidos para la imagen
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default ImageList;
