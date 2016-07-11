import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'

const Index = () => <div>INDEX</div>
const Gallery = () => <div>GALLERY</div>
const NotFound = () => <div>NOT FOUND</div>

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="gallery" component={Gallery} />
    <Route path="*" component={NotFound} />
  </Route>
)
