import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { userLoggedIn } from "../features/auth/authSlice"

const useAuthCheck = () => {

    const [isChecked, setIsChecked] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const localAuth = localStorage.getItem("auth")

        if (localAuth) {
            const info = JSON.parse(localAuth)
            if (info?.accessToken && info?.user) {
                dispatch(userLoggedIn({ accessToken: info.accessToken, user: info.user }))
            }
            setIsChecked(true)
        }

    }, [setIsChecked, dispatch])

    return isChecked
}


export default useAuthCheck