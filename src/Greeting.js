import './all.css'

const Greeting = ({...data}) => {

    console.log(Object.keys(data).length)
    let greetingList =[];


        for ( let i=0; i<Object.keys(data).length; i++) {
            greetingList.push
                (<li key={data[i]}>
                    <div className="example-text1"> 안녕하세요 {data[i].age}세 {data[i].name}님</div>
                </li>)
        }

    return (
        <>
            {greetingList}
        </>
    )
}

export default Greeting

// 항목추가