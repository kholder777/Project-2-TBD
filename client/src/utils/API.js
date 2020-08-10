import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
	getAllItems: function () {
		return axios.get("https://bagit-and-tagit.herokuapp.com/api/items/all");
	},
	getAllCategories: function () {
		return axios.get(
			"https://bagit-and-tagit.herokuapp.com/api/categories/all"
		);
	},
	postNewUser: function (requestBody, config) {
		return axios.post(
			"https://bagit-and-tagit.herokuapp.com/api/users/create",
			requestBody,
			config
		);
	},
};
