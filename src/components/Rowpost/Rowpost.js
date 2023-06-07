import React , { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY,  imageUrl} from '../../constants/constants'
import Youtube from 'react-youtube';


function Rowpost(props){
         const [movies, setMovies] = useState([]);
         const [urlId, setUrlId] = useState([]);
      

                    useEffect(()=>{
                      axios.get(props.url).then(response=>{ 

                            console.log(response.data)
                            setMovies(response.data.results)

                      }).catch(err=>{
                        //alert('Network error')
                      });
                    },[]);

                    const opts = {
                      height: '390',
                      width: '50%',
                      playerVars: {
                        // https://developers.google.com/youtube/player_parameters
                        autoplay: 1,
                      },
                    };

                    const handleMovie=(id)=>{

                                console.log(id)
                                axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-U`).then(response=>{
                                       if(response.data.results.length!=0){

                                        setUrlId(response.data.results[0])
                                       }else{

                                        console.log('Array empty')
                                       }
                                })
                  }
                 

           
            return(
              <div className='Row'>
                  <h2>{props.title}</h2>
                        <div className='posters'>

                        {movies.map((obj) => (
                                <div key={obj.id}>
                                  <img
                                    onClick={() => handleMovie(obj.id)}
                                    className={props.isSmall ? 'small-poster' : 'poster'}
                                    alt='poster'
                                    src={`${imageUrl}${obj.backdrop_path}`}
                                                                                 />
                                  <p>{obj.title}</p>
                                </div>
                                              ))}
                  


                  
                </div>

              { urlId && <Youtube videoId={urlId.key} opts={opts} />}
              </div>
            )
                              }


export default Rowpost
