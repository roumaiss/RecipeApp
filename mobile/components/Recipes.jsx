import { FlatList, TouchableOpacity } from "react-native";
import { useRecipes } from "../hooks/useRecipes";
import MyLoadingScreen from "./Loading";
import NoContent from "./NoContent";
import Card from "./Card";
import { homeStyles } from "../assets/styles/home.styles";
import { useRouter } from "expo-router";
import { useDebounce } from "@uidotdev/usehooks";
import ErrorMessage from "./ErrorMessage";

export const Recipes = ({ searchText, slice }) => {
  const debouncedSearchTerm = useDebounce(searchText, 300);

  const { data, isFetching, isError, error, refetch } =
    useRecipes(debouncedSearchTerm);
  const router = useRouter();
  return isFetching ? (
    <MyLoadingScreen />
  ) : isError ? (
    <ErrorMessage error={error} refetch={refetch} />
  ) : !data || data?.recipes?.length === 0 ? (
    <NoContent refetch={refetch} />
  ) : (
    <FlatList
      data={slice ? data.recipes.slice(0, slice) : data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/recipe/${item.id}`)}>
          <Card recipe={item} />
        </TouchableOpacity>
      )}
      numColumns={2}
      columnWrapperStyle={homeStyles.row}
      contentContainerStyle={homeStyles.recipesGrid}
      scrollEnabled={false}
    />
  );
};
