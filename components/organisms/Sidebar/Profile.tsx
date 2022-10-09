import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

function Profile() {
  const [user, setUser] = useState({
    avatar: "",
    email: "",
    id: "",
    phoneNumber: "",
    username: "",
    name: "",
  });
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token!);
      const payload: JWTPayloadTypes = jwt_decode(jwtToken);
      const userPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMAGE;
      userPayload.avatar = `${IMG}/${userPayload.avatar}`;
      setUser(userPayload);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src={user.avatar}
        onError={(e) => {
          e.currentTarget.src = "/img/avatar.png";
        }}
        width="90"
        height="90"
        className="mb-20"
        style={{ borderRadius: "100%" }}
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}

export default Profile;
