import React from "react";
import { useParams } from "react-router-dom";

//프로필에서 사용할 데이터
const profileData = {
  velopert: {
    name: 'minjoon',
    description:
    'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자'
  },
  gildong: {
    name: 'gildong',
    description:
    '전래동화 주인공'
  }
};

const Profile = () => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조.
  const { username } = useParams();
  const profile = profileData[username];
  if(!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
  
};

export default Profile;