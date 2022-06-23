import React, {useState, useEffect, useRef, useCallback} from "react";
import "./all.css"
import movieData from "./movielist"
import { Link } from "react-router-dom";


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
    const [movie, setMovie] = useState("Title is....")
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

    const changeTitle = useCallback((entry) => {
        if(entry[0].isIntersecting){
            for ( let p = 0; p < movieList.length; p++) {
                if(entry[0].target.currentSrc === movieList[p].imgurl) {
                    return setMovie( movieList[p].title )
                }
            }
        }
        else {
        }
    },[movieList])


    useEffect(()=>{
        getMovie()
        movieImg.current = movieImg.current.slice(0, movieList.length)
    },[])

    useEffect(()=>{
        let observer
        observer = new IntersectionObserver(changeTitle,{
            threshold: 0.55
        })
        for (let i=0; i < movieList.length; i++) {
            observer.observe(movieImg.current[i])
        }
        return () => observer && observer.disconnect()
    },[changeTitle])


    return (
        <>
            <div className="observer-wrapper">
                <div ref={scrollRoot} data-animate="animTitle 2s " className="movie-scroll-title">{movie}</div>
                    <div className="movie-scroll">
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
                <Link className="goexample" to="/observer-hook">Hook 예제 →</Link>
            </div>
        </>
    )
}

export default Observer;