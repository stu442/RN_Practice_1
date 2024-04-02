import { FlatList } from "react-native";

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from "../components/CategoryGridTile";

// 이 함수는 컴포넌트 안에서 만들 필요가 없다. (리렌더될때마다 만들어질 필요 없음)

// 화면으로 사용되는 컴포넌트에만 navigation 프롭이 들어간다.
function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("MealsOverview");
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    }
    return (
        <FlatList data={CATEGORIES} key={item => item.id} renderItem={renderCategoryItem} numColumns={2} />
    );
}

export default CategoriesScreen