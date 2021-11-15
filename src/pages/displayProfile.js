import { useUserProfile } from "./user-contextProfile";

const DisplayProfile = () => {
  const [state, dispatch] = useUserProfile();

  return (
    <div>
      <div className="container">
        <div className="avatar">
          <img src={state.picture} alt="avatar" />
        </div>
        <div className="userInfo">
          <h3>{state.nickname}</h3>
          <br />
          <span>{state.biography}</span>
          <br />
          <span>({state.userId})</span>
        </div>
      </div>
    </div>
  );
};

export default DisplayProfile;
