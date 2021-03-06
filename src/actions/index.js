import jsonPlacholder from "../apis/JSONPlacholder";

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlacholder.get("/posts");
	dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonPlacholder.get(`/users/${id}`);

	dispatch({ type: "FETCH_USER", payload: response.data });
};
