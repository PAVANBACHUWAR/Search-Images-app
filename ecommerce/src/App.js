import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [photo,setPhoto]=useState('');
  const [data,setdata]=useState([]);
  const [bookmark,setbookmark]=useState([])
  const changephoto=(e)=>{
     axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=cIvnylrDrDcpr7j2BoWvySJS7u31MaUsSesk-x1hLGs`)
    .then((response)=>{
      console.log(response.data);
      setdata(response.data.results);
    })

    }

  return (
    <>
    <div className="container">
      <h1>Search Images App</h1>
      <input type='text' className='form-control' placeholder='search here....' value={photo} onChange={(e)=>{
        setPhoto(e.target.value)
      }}/>
      <button className='button' type='submit' onClick={changephoto}>Search</button>
      <button className='bookmark' >BookMarks</button>
    </div>
    <div className='container' type='grid' >
      <div className='searchresults'>
      {data.map((value)=>{
          return(
            <div className='image'>
          <a href='#' className='a'>
            <img className='Images' src={value.urls.small}/> 
          </a>
          </div>
        )})}
        </div>
    </div>
    </>
  );
}

export default App;
