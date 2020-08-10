import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
	getAllItems: function () {
		return axios.get("https://bagit-and-tagit.herokuapp.com//api/items/all");
	},
};

export default {
	getAllCategories: function () {
		return axios.get(
			"https://bagit-and-tagit.herokuapp.com/api/categories/all"
		);
	},
};

export default {
	postNewUser: function (requestBody, config) {
		return axios.post(
			"https://bagit-and-tagit.herokuapp.com/api/users/create",
			requestBody,
			config
		);
	},
};
