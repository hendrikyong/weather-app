document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  const search = document.getElementById("search");
  search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      //logs what has been input into search box
      console.log(search.value);
      //resets the search box to make it empty
      search.value = "";
    }
  });
});
