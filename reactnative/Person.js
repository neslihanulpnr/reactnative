import { View, Text } from "react-native"

export const Person = ({name, surname, color="grey"}) => {
    return(
        <View style={{
            backgroundColor: color,
            width: 250,
            height: 100, 
            margin: 5,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{fontWeight: "bold", fontSize: 18}}>
                Name: {name}</Text>
            <Text style={{fontWeight: "bold", fontSize: 18}}>
                Surname: {surname}</Text>
        </View>
    )
}