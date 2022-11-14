// import logo from './logo.svg';
import './App.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
function App() {
  const [video, setVideo] = useState([]);

  const [counter, updateCounter] = useState(0);


  useEffect(() => {
    const getdata = async() => { try {await fetch('/search')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      }).then(jsonRes => setVideo(jsonRes.vid));
      console.log("Fetching data");
    }
      catch (error) {
        console.log("ERROR fetching data");
      }
    }
    getdata();
  },[counter]);



  
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-4 pt-4 pb-4">
              <div className="card-body">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video}?autoplay=1`} width={660} height={400} allowFullScreen></iframe>
                </div>
                <button className="btn btn-primary mt-4" onClick={updateCounter}>Next Video</button>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </>
  );
}

export default App;
