/// used inside redux

// import axios from "axios";
// const API_URL = "http://localhost:5000/api/users/";

// const editUser = (payLoad) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${payLoad.token}`,
//     },
//   };
//   try {
//     const editAction = async () => {
//       await axios
//         .put(API_URL + payLoad.id, payLoad, config)
//         .then((response) => {
//           if (response.data) {
//             localStorage.removeItem("user");
//             localStorage.setItem("user", JSON.stringify(response.data));
//           }
//         });
//     };
//     if (editAction()) {
//       return true;
//     }
//   } catch (error) {
//     throw new Error(error);
//   }
// };
// const changePassword = () => {};

// const userActions = {
//   editUser,
//   changePassword,
// };

// export default userActions;
