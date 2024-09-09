import React,{useState} from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import ImageList from './ImageList';

function ImageGallery({ images }) {
    const [imageUrls, setImageUrls] = useState([
        {
            title:"Gato",
            url:'https://upload.wikimedia.org/wikipedia/commons/9/94/Gato_%282%29_REFON.jpg'
        },
        {
            title:"Perro",
            url:'https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794_640.jpg',
        },
        {
            title:"Comida rápida",
            url:'https://elikaeskola.com/wp-content/uploads/dieta-parchis-11-1024x683.jpg',
        }
        
      ]);


      return (
        <View style={styles.container}>
          <ImageList images={imageUrls} />
        </View>
      );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ImageGallery;
