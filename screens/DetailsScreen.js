import {View, Text, Button, StyleSheet, Image} from 'react-native';

export default function DetailsScreen({ navigation }){
    return(
        <View styles={styles.container}>
            <Text styles={styles.texts}>Este aplicativo não serve pra nada!</Text>
            <Image styles={styles.img} source={require('../src/masqueico.jpeg')}/>
            <Button title='voltar para home' onPress={ () => navigation.goBack()}/>
        </View>
    )
}
const styles = StyleSheet.create ({
    texts: {
      fontWeight: 'bold',
},
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
})