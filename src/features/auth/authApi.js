import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";




export const authApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({


        userRegister: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled

                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }))

                    dispatch(userLoggedIn({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }))

                } catch (error) {

                }
            }

        }),

        userLogin: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled

                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }))

                    dispatch(userLoggedIn({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }))


                } catch (error) {

                }
            }
        })

    })
})


export const { useUserRegisterMutation, useUserLoginMutation } = authApi
