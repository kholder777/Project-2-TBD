import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
	getUserNames: function () {
		return axios.get(
			"https://bagit-and-tagit.herokuapp.com/api/user/usernames"
		);
	},
};

// In case my team doesn't trust me
// const axios = require("axios");

// // Make a request for a user with a given ID
// axios
// 	.get("https://bagit-and-tagit.herokuapp.com/api/user/usernames")
// 	.then(function (response) {
// 		// handle success
// 		console.log(response.data.user);
// 	})
// 	.catch(function (error) {
// 		// handle error
// 		console.log(error);
// 	})
// 	.finally(function () {
// 		// always executed
// 	});
