import { useState } from "react";
import { Text, View, Button} from "react-native";

export const Counter = () => {
    const [counter, setCounter] = useState(10);
    return(
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            width: 250,
            height: 200,
            borderRadius: 30,
            backgroundColor: "pink"
        }}>
            <Text style={{ fontWeight: "bold", fontSize:  25}}>{counter}</Text>
            <Button title="Increase" onPress={() => setCounter(counter + 1)}/>
        </View>
    )
}