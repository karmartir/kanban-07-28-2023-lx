import {useState} from "react";

function useFetching(callBack) {
    const [isLoader, setIsLoader] = useState(true)
    const [error, setError] = useState(null)

    const fetching =async () => {
        try {
           await callBack()
        } catch (err) {
            setError("Something went wrong, try again later")
        } finally {
            setIsLoader(false)
        }
    }

    return [fetching, isLoader, error]
}

export default useFetching