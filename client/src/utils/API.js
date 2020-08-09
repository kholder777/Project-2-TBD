import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
	getAllItems: function () {
		return axios.get("http://localhost:3000/api/items/all");
	},
};
