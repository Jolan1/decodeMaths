import './App.css';
import UserContainer from './containers/UserContainer';
import QuestionContainer from './containers/QuestionContainer';
import QuizContainer from 'containers/QuizContainer';
function App() {
  return (
    <div className="App">
      {/* <UserContainer /> */}
      <QuestionContainer />
      <QuizContainer />
    </div>
  );
}

export default App;
