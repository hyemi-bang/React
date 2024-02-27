
//자바스크립트 영역이기 때문에 font-size가 아니라 fontSize로 사용해야한다.
// px안써도 기본적으로 들어가있다
const styles = {
    profileWrapper: {
        display: 'flex',
        flexDirection:'row',
        margin: 10,
        padding: 10,
        border: 'solid 1px black'
    },
    image: {
        width: 50,
        heigth: 50,
        borderRadius : 20
    },
    introContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    nameText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'green'
    },
    genderText:{
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 13
    },
    commentText:{
        color: 'black',
        fontSize: 13
    }

};

function Profile(props){
    return(
        <div style={styles.profileWrapper}>
            <div>
                <img src="https://lh3.googleusercontent.com/proxy/zFB09RvAfBHX3rWTUHCWjZfrBembtRJXmizmOhS0LoAXCK1f-MjhBeLOjR-kA1dsv1DpRxyE7ullv0JqXhd4v4rlc1olrFyOsn3W23zdqtDS-Q"
                 alt="" style={styles.image}/>
            </div>
            <div style={styles.introContainer}>
                <span style={styles.nameText}>{props.name}({props.age})</span>
                <span style={styles.genderText}>{props.gender}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Profile;
