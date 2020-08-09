import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
	getUserNames: function () {
		return axios.get(
			"https://bagit-and-tagit.herokuapp.com/api/user/usernames"
		);
	},
};
