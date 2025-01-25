import "./App.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
function App() {
  const auth = getAuth(app);
  const handleCreateUser = async () => {
    const response = await createUserWithEmailAndPassword(
      auth,
      "teste@gmail.com",
      "test123"
    );
    console.log(response);
  };
  return (
    <>
      <div className="">
        {/* <Signup /> */}
        <Login />
      </div>
    </>
  );
}

export default App;
