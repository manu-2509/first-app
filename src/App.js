import logo from './logo.svg';
import './App.css';
import {Mobile} from './components/Mobile'
let details = [
 {li:"Android" ,c:"regular"},
 {li:"Blckberry" ,c:"regular"},
 {li:"iPhone" ,c:"regular"},
 {li:"Windows Phone" ,c:"regular"}
]
let newdetails = [
  {li:"Samsung",c:"square"},
  {li:"HTC",c:"square"},
  {li:"Micromax",c:"regular"},
  {li:"Apple",c:"round"},
]

function App() {
  return (
    <div className="App">
<Mobile head="Mobile Operating System" list={details}></Mobile>
<Mobile head="Mobile Manufacturers" list={newdetails}></Mobile>
    </div>
  );
}

export default App;
