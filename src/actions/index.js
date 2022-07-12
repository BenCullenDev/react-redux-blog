import JSONPlacholder from "../apis/JSONPlacholder";

export const fetchPosts = () => async (dispatch) => {
	const response = await JSONPlacholder.get("/posts");
	dispatch({ type: "FETCH_POSTS", payload: response });
};
