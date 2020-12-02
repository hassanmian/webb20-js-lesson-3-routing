# React Router Dom 

`npm install react-router-dom`

1. Import BrowserRouter to index.js

`import {BrowserRouter} from 'react-router-dom'`

``` 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```

2. Import Switch and Route to App.js

`import { Switch, Route } from 'react-router-dom'`

3. Create Routes
```
<Switch>
    <Route path="/about">
        About me
    </Route>
    <Route path="/">
        Start Page
    </Route>
</Switch>
```

4. Import Link

`import { Switch, Route, Link } from 'react-router-dom'`

5. Create links to navigate between routes

````
<ul>
    <li>
        <Link to="/">Hem</Link>
    </li>
    <li>
        <Link to="/about">Om</Link>
    </li>
</ul>

```