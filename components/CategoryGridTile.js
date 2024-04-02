import { View, Pressable, Text, StyleSheet, Platform } from "react-native";


function CategoryGridTile({title, color}) {
    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{ color: '#ccc'}} style={[styles.button]}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        // 그림자를 위해 추가
        backgroundColor: 'white',
        // IOS는 이런식으로 그림자가 추가가능하지만,
        // 반드시 backgroundColor가 있어야한다.
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        // rippleEffect가 넘어가는 것을 방지
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})