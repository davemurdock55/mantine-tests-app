import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';


export const RealmCard = ({ title, imageUrl }) => (
   <TouchableHighlight style={ styles.card } underlayColor="#F5F5F5">
      <View>
         <Image source={ { uri: imageUrl } } style={ styles.cardImage } />
         <View style={ styles.cardHeader }>
            <Text style={ styles.cardHeaderText }>Realm</Text>
            <Text style={ styles.cardTitle }>{ title }</Text>
         </View>
      </View>
   </TouchableHighlight>
);

const styles = StyleSheet.create({
   card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      shadowColor: '#000000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 4,
      overflow: 'hidden',
   },
   cardImage: {
      width: '100%',
      height: 200,
   },
   cardHeader: {
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 1,
   },
   cardHeaderText: {
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#ffffffAA',
      marginBottom: 5,
   },
   cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ffffff',
   },
});

// In this example, TouchableHighlight is used as a wrapper for the card,
// and the underlayColor property is set to give visual feedback when the card
// is pressed.The Image component is used to display the image, and View component
// is used for the card header.Finally, StyleSheet is used to define the styles for
// the card and its components.;