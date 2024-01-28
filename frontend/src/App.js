import { BrowserRouter, Routes, Route } from 'react-router-dom'; //import the BrowserRouter, Routes and Route components from the react-router-dom package. The BrowserRouter component is the component that we will use to wrap our entire application. The Routes component is the component that we will use to define the routes in our application. The Route component is the component that we will use to define the individual routes in our application.
import Home from './pages/Home'; //import the Home component. This is the component that we will use to render the home page.
import Navbar from './components/Navbar';  //import the Navbar component. This is the component that we will use to render the navigation bar.

function App() { //create a new component called App. This is the component that we will use to render the entire application.
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route
            path="/" //define the path of the route. 
            element={<Home />} //define the element that will be rendered when the route is matched.        
          />
        </Routes>
      </div>      
      </BrowserRouter>
    </div>
  );
}

export default App;


// //The selected code is written in JavaScript using the React library and the react-router-dom package. It defines a single-page application with routing.

// At the top, there are import statements. The first one imports three components from the 'react-router-dom' package: BrowserRouter, Routes, and Route. These components are essential for setting up routing in a React application.

// BrowserRouter is a wrapper component that keeps your UI in sync with the URL. It creates a browser history object that uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.
// Routes is a component that allows you to define multiple Route components, each corresponding to a different path.
// Route is a component that renders some UI when its path matches the current URL.
// The second import statement imports a Home component from a local file. This Home component represents the UI that will be displayed when the user navigates to the home page of the application.

// The App function is a functional component in React. This is the root component of the application. Inside the App component, a BrowserRouter is used to wrap the entire application. Inside the BrowserRouter, a Routes component is used to define the application's routes. In this case, there's only one Route defined.

// The Route component has two props: path and element. The path prop is a string that represents the path of the URL. When the URL's path matches the path prop, the Route component renders the UI defined in the element prop. Here, the path is set to "/" (the root path), and the element is set to render the Home component. This means that when the user navigates to the root path of the application, the Home component will be displayed.

// Finally, the App component is exported as the default export of the module. This means that it can be imported in other files using an import statement without curly braces.

