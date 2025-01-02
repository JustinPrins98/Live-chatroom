import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const signup = async (email, password, displayName) => {
    error.value = null;

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password);

        if (!res) {
            throw new Error('Could not complete signup');
        }

        // Update the user's display name after signup
        await res.user.updateProfile({ displayName })
        error.value = null

        return res; // Optionally return the result for further handling

    } catch (err) {
        error.value = err.message;
    }
};

const useSignup = () => {
    return { error, signup };
};

export default useSignup;
