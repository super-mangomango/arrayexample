import React, {useEffect, useRef, useState} from "react";

const ListEditor = ({ onCreate }) => {
    useEffect(()=>{
        console.log("create new list data")
    })


    const titleInput = useRef();
    const yearInput = useRef();

    const [state, setState] = useState({
        title: "",
        year: "",
        imgurl: ""
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        onCreate(state.title, state.year, state.imgurl);
        alert("저장 성공");
        setState({
            title: "",
            year: "",
            imgurl: ""
        });
    };

    return (
        <div className="list-editor">
            <h2>리스트 추가</h2>
            <div>
                <input
                    ref={titleInput}
                    value={state.title}
                    onChange={handleChangeState}
                    name="title"
                    placeholder="제목"
                    type="text"
                />
            </div>
            <div>
                <input
                    ref={yearInput}
                    value={state.year}
                    onChange={handleChangeState}
                    name="year"
                    placeholder="개봉년도"
                    type="number"
                />
            </div>
            <div>
                <input
                    value={state.imgurl}
                    onChange={handleChangeState}
                    name="imgurl"
                    placeholder="포스터이미지"
                    type="text"
                />
            </div>
            <div>
                <button onClick={handleSubmit}>추가하기</button>
            </div>
        </div>
    );
};
export default React.memo (ListEditor);
