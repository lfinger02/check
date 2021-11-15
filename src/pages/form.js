import { useState, useEffect } from "react";
import { userUpdateProfile, useUserProfile } from "./user-contextProfile";
import { AvatarGenerator } from "random-avatar-generator";

const Form = () => {
  const [userId, setUserId] = useState("");
  const [nickname, setNickname] = useState("");
  const [biography, setBiography] = useState("");
  const [load, setLoad] = useState(false);
  const [state, dispatch] = useUserProfile();
  const generator = new AvatarGenerator();

  useEffect(() => {
    var randId = Math.floor(Math.random() * 99999);
    setUserId("user#" + randId);
  }, []);

  function handleReset(e) {
    e.preventDefault();
    userUpdateProfile(dispatch, state, {
      nickname: "Sabrina",
      picture: generator.generateRandomAvatar("No User"),
      biography: "I love dsw",
      userId: "user#123",
      error: false,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    var lst = [true, false];
    let error = lst[Math.floor(Math.random() * 2)];
    const formInfo = {
      userId: userId,
      nickname: nickname,
      biography: biography,
      error: error,
      picture: generator.generateRandomAvatar(nickname),
    };
    userUpdateProfile(dispatch, state, formInfo);
    setLoad(error);
  }

  return (
    <>
      <div>
        <h2>(USER UPDATE FORM)</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              <label>User ID</label>
              <input className="ID" input="text" value={userId} />
            </span>
            <span>
              <label htmlFor="name">NickName*</label>
              <input
                required
                name="name"
                input="text"
                value={nickname}
                onInput={(e) => setNickname(e.target.value)}
              />
            </span>
          </div>
          <br />
          <label htmlFor="Bio">Biography</label><br/>
          <input
            required
            name="Bio"
            className="bio"
            input="text"
            onInput={(e) => setBiography(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <button
            disabled = {load}
              onClick={(e) => {
                handleReset(e);
              }}
            >
              Reset
            </button>
            <button type="submit">{!load ? "submit" : "Try again"}</button>
          </div>
        </form>
      </div>
      <h2>{state.notify}</h2>
    </>
  );
};

export default Form;
