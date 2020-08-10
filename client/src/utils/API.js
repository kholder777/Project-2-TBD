import axios from "axios";
require("dotenv").config();
const environment = process.env.NODE_ENV || "development";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
	getAllItems: function () {
		if (environment === "development") {
			return axios.get("http://localhost:3000/api/items/all");
		}
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
