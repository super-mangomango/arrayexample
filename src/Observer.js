import React, {useState, useEffect, useRef, useCallback} from "react";
import "./all.css"
import movieData from "./movielist"



// function MovieList ({ title, year, imgurl }) {
//     const movieTitle = useRef()
//
//     return (
//         <li className="movie-list-hooks">
//             <img src={imgurl} alt="large-poster" />
//             <div ref={movieTitle} className="movie-list-title">{title} / {year}</div>
//         </li>
//     )
// }



const Observer = () => {

    const [movieList, setMovieList] = useState([]);
    const [movie, setMovie] = useState("Loading...")
    const movieImg = useRef([])
    const scrollRoot = useRef()

    const getMovie = () => {

        const initData = movieData.map((it)=>{
            return {
                title:it.title,
                year:it.year,
                imgurl:it.large_cover_image
            }
        })
        setMovieList(initData)
    }

    const changeTitle = (entry) => {
        console.log(entry[0].target.currentSrc)
            for (let i=0; i<movieList.length; i++ ) {
                if(entry[0].target.currentSrc===movieList[i].imgurl){
                    setMovie(movieList[i].title)
                }
            }
        }



    useEffect(()=>{
        getMovie()
        movieImg.current = movieImg.current.slice(0, movieList.length)
    },[])

    useEffect(()=>{

            for (let i=0; i<movieList.length; i++ ){
                    let observer
                    observer = new IntersectionObserver(changeTitle, {

                        threshold:0.55
                    })
                    observer.observe(movieImg.current[i])
                return console.log("end")

            }
    })


    return (
        <>
            <div className="observer-wrapper">
                <div className="movie-scroll-title">{movie}</div>
                <div ref={scrollRoot} className="movie-scroll">
                    <ul className="movie-list">
                        {movieList.map ((it, i) => {
                            return (
                                <li className="movie-list-hooks">
                                    <img ref={ el => movieImg.current[i] = el } src={it.imgurl} alt="large-poster" />
                                    <div className="movie-list-title">{it.title} / {it.year}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Observer;