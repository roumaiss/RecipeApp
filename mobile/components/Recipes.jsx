import { FlatList, TouchableOpacity } from "react-native";
import MyLoadingScreen from "./Loading";
import NoContent from "./NoContent";
import Card from "./Card";
import { homeStyles } from "../assets/styles/home.styles";
import { useRouter } from "expo-router";
import { useDebounce } from "@uidotdev/usehooks";
import ErrorMessage from "./ErrorMessage";
import { useAuth } from "@clerk/clerk-expo";
import { getRecipes } from "../services/recipes";
import { useQuery } from "@tanstack/react-query";

export const Recipes = ({ searchText, shouldUseUserId, limit }) => {
  const debouncedSearchTerm = useDebounce(searchText, 300);
  const { userId } = useAuth();
  console.log(" this is the userId ", userId);
  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey: [
      "recipes",
      debouncedSearchTerm,
      shouldUseUserId ? userId : null,
      limit ? limit : null,
    ],
    queryFn: () =>
      getRecipes({
        debouncedSearchTerm,
        userId: shouldUseUserId ? userId : undefined,
        limit: limit ? limit : null,
      }),
    staleTime: 1000 * 60, // 1 min
  });

  const router = useRouter();

  return isFetching ? (
    <MyLoadingScreen />
  ) : isError ? (
    <ErrorMessage error={error.message} refetch={refetch} />
  ) : !data || data?.recipes?.length === 0 ? (
    <NoContent refetch={refetch} />
  ) : (
    <FlatList
      data={data.recipes}
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
