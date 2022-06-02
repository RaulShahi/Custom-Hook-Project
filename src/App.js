import ErrorBoundary from "./ErrorBoundary";
import UserFinder from "./components/Users/UserFinder";
import TodoFinder from "./components/Todos/TodoFinder";

function App() {
  return (
    <ErrorBoundary>
      <div style={divStyle}>
        <UserFinder />
        <TodoFinder />
      </div>
    </ErrorBoundary>
  );
}

const divStyle = {
  display: "flex",
  justifyContent: "space-around",
};

export default App;
