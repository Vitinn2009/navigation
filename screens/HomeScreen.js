import {View, Text, Button, StyleSheet, Image} from 'react-native';

export default function HomeScreen({ navigation }){
    return(
        <View styles={styles.container}>
            <Text styles={styles.texts}>Bem vindo ao App </Text>
            <Image source={require('../src/Chess.jpeg')}/>
            <Button title='ir para details' onPress={ () => navigation.navigate('Details')}/>
            <Button title='ir para info' onPress={ () => navigation.navigate('Info')}/>
                
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