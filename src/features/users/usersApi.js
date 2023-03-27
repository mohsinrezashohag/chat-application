import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getUsers: builder.query({

            query: (email) => {
                console.log("email are comming to request api", email);
                return ({

                    url: `/users?email=${email}`,

                })
            }
        })
    })

})


export const { useGetUsersQuery } = usersApi