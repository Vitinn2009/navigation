import {View, Text, Button, StyleSheet, Image} from 'react-native';

export default function InfoScreen({ navigation }){
    return(
        <View styles={styles.container}>
            <Text styles={styles.texts}>Para mais detalhes consulte: Genório Silveira (11)95367-4766</Text>
            <Image styles={styles.img} source={require('../src/magnus.jpeg')}/>
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
    img: {
        width: 500,
        weight: 500,
    },
})