import './App.css';
import Posts from './Posts';
import PostForm from './PostForm';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <PostForm></PostForm>
        <hr/>
        <Posts></Posts>

      </header>
    </div>
  );
}

export default App;
