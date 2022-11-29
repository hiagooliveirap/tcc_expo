import { StyleSheet } from "react-native";
import ImgNoResults from '../../assets/no-results-found.png';

export default function noResults(TextTitulo, TextFrase){
    return(
    <View style={styles.containerNoResults}>
        <Image source={ImgNoResults} style={{ height: 400, width: 400}} />
        <Text style={styles.titulo}>{TextTitulo}</Text>
        <Text style={styles.frase}>{TextFrase}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    containerNoResults:{
        alignItems: "center"
    },    
    titulo: {
        fontWeight: "bold",
        fontSize: 17,
    },
    frase: {
        fontSize: 15,
    },
});