import React, { createContext, useContext, useState } from "react";
import { AvatarGenerator } from "random-avatar-generator";

export const UserContext = createContext();

const UserProviderProfile = (props) => {
  const generator = new AvatarGenerator();
  const [userInfo, setUserInfo] = useState({
    nickname: "No User",
    picture: generator.generateRandomAvatar("No User"),
    biography: "No Bio",
    userId: "user#123",
  });
  const value = [userInfo, setUserInfo];

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

const useUserProfile = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUserProfile must be used within a UserProviderProfile`);
  }
  return context;
};

const userUpdateProfile = (dispatch, state, formInfo) => {
  if (formInfo.error === true) {
    dispatch({
      userId: formInfo.userId,
      picture: formInfo.picture,
      biography: formInfo.biography,
      nickname: formInfo.nickname,
      notify: "Random backend error occured",
    });
    state["notify"] = "";
    setTimeout(() => {
      dispatch(state);
    }, 2000);
  } else if (formInfo.error === false) {
    console.log("previous user", state);
    dispatch({
      userId: formInfo.userId,
      picture: formInfo.picture,
      biography: formInfo.biography,
      nickname: formInfo.nickname,
      notify: "successfully updated user",
    });
    formInfo["notify"] = "";
    setTimeout(() => {
      dispatch(formInfo);
    }, 2000);
  } else {
    dispatch(state);
    state["notify"] = "";
    setTimeout(() => {
      dispatch(state);
    }, 2000);
  }
};

export { useUserProfile, userUpdateProfile };
export default UserProviderProfile;
