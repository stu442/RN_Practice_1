import { FlatList } from "react-native";

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from "../components/CategoryGridTile";

// 이 함수는 컴포넌트 안에서 만들 필요가 없다. (리렌더될때마다 만들어질 필요 없음)
function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
}

function CategoriesScreen() {
    return (
        <FlatList data={CATEGORIES} key={item => item.id} renderItem={renderCategoryItem} numColumns={2} />
    );
}

export default CategoriesScreen