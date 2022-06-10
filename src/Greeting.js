import './all.css'

const Greeting = ({...data}) => {
    return (
        <>
            <li key={data.i}>
                <div className="example-text1"> 안녕하세요 {data.age}세 {data.name}님</div>
            </li>
        </>
    )
}

export default Greeting

// 항목추가