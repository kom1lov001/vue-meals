export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword.value}`).then(({ data }) => {
    debugger;
    commit("searchedMeals", data);
  });
}
