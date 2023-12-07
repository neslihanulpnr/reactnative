import { Text, View } from "react-native"

export const Foo = () => {
    return(
        <View style={{
            width: 100, 
            height: 100, 
            borderRadius: 20, 
            backgroundColor: "#aeaeae", 
            justifyContent: "center",
            alignItems: "center"
            }}>
            <Text style={{fontSize: 20}}>0</Text>
        </View>
    )
}