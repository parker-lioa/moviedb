import React , {useState} from 'react';
import './App.css';

import Search from './components/Search';
import Results from './components/Results';
import {search_api,selected_api} from './utils/Api';
import Popup from './components/Popup';

function App() {

  const [search,setSearch] = useState("");
  const [result,setResult] = useState([]);
  const [selected,setSelected] = useState({});

  const handleSearch = async (event)=>{
    if(event.key==='Enter'){
      try{
        const data = await search_api(search);
      // console.log(data.Search);
      setResult([...data.Search]);
      }catch(e){
        console.log(e);
        setResult([]);
      }
    }
  };

  const handleSearchInput = (event)=>{
    const value = event.target.value;
    // console.log(value);
    setSearch(value);
  };

  const openPopup = async (id)=>{

    console.log("clicked");
    console.log(Object.keys(selected).length);
    try{
      const result = await selected_api(id);
      console.log(result.data);
      setSelected(result.data);
    }catch(e){
      console.log(e);
      setSelected({});
    }
  };

  const closePopup = ()=>{
    setSelected({});
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleSearchInput} handlePress={handleSearch}/>
        <Results results={result} openPopup={openPopup}/>
        {
          Object.keys (selected).length===0?null:<Popup selected={selected} closePopup={closePopup}/>
        }
      </main>
    </div>
  );
}

export default App;
