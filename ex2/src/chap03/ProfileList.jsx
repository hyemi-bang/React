import Profile from "./Profile";

const profiles =[
    {
        name: '강호동',
        age: 55,
        gender: '남자',
        comment: '환영합니다~ 1박~2일!!',
    },
    {
        name: '유재석',
        age: 53,
        gender: '남자',
        comment: '무한도전!',
    },
];

// 받아온 데이터를 활용하여 반복문으로 컴포넌트 구성해보기
function ProfileList(props){
 return(
    <div>
        {profiles.map((profile)=>{
            return(
                <Profile
                    name={profile.name}
                    age={profile.age}
                    gender={profile.gender}
                    comment={profile.comment}
                />
            );
        })}
        {/* <Profile name="강호동" age={55} gender="남자" comment="1박2일~!"/>
        <Profile name="유재석" age={53} gender="남자" comment="무한도전!" /> */}
    </div>
 );
}

export default ProfileList;