import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const login = async (email, passowrd) => {
    error.value = null
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, passowrd)
        error.value = null
        console.log(res)
        return res
    } catch (err) {
        console.log(err.value)
        error.value = 'Incorrect login credentials'

    }

}

const useLogin = () => {
    return { error, login }
}

export default useLogin