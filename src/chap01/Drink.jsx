function Drink(props){
    // props : final이 붙어있는 멤버변수 같은 느낌이다
    return(
        <div>
            <h3>{/* javascript scope */ `이 음료의 이름은 ${props.name}입니다.`}</h3>
            <p>{`이 음료의 가격은 ${props.price}입니다.`}</p>
        </div>
    );
}

export default Drink;