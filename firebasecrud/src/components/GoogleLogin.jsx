import { signInWithPopup } from "firebase/auth";
import { auth , provider } from "../firebase/firebase.config";

export const GoogleLogin = () => {
    const signInWithGoogle = async() => await signInWithPopup(auth , provider)
    alert("Google Login Successful!!!")

    return(
        <button onClick={signInWithGoogle}>Login with Google</button>
    )
}