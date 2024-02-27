import React from "react";

const BakedSalmon = () => {
    const recipe ={
        title: '맛있는 조리법',
        name:'Baked Salmon',
        ingredients:['연어','잣','버터 상추','옐로 스쿼시(Yellow Squash, 호박의 한 종류)','올리브 오일','마늘'],
        subname:'조리절차',
        steps:['오븐을 350도로 예열한다.','유리 베이킹 그릇에 올리브 오일을 두른다.',
            '연어, 마늘, 잣을 그릇에 담는다.', '오븐에서 15분간 익힌다.', '옐로 스쿼시를 추가하고 다시 30분간 오븐에서 익힌다.',
            '오븐에서 그릇을 꺼내서 15분간 식한다음에 상추를 곁들여서 내놓는다.'],
    };

    return(
        <div>
            <h1>{recipe.title}</h1>
            <h4>{recipe.name}</h4>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h4>{recipe.subname}</h4>
            <ol>
                {recipe.steps.map((step,index)=>(
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );

};

export default BakedSalmon;