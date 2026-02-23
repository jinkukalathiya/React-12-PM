import { auth } from "../firebase/firebase.config";

const profile = () => {
  const user = auth.currentUser;

  if (!user) {
    return <h2>Please login first</h2>;
  }

  return (
    <>
        <h2>Profile</h2>
        <p>{user.uid}</p>
        <p>{user.email}</p>
    </>
  );
};

export default profile;
