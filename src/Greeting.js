import './all.css'

const Greeting = ({...data}) => {
    return (
        <>
            <div className="example-text-wrapper">
                <div className="example-text1"> 안녕하세요 {data.name}님</div>
                <div className="example-text2"> 오늘은 {data.date}입니다.</div>
                {/*<div className="example-text3"> 좋은 {time}입니다.</div>*/}
            </div>
        </>
    )
}

export default Greeting

// 항목추가