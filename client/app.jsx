import React from 'react'
import MainPage from './pages/mainpage'

export default class App extends React.Component {
  render() {
    return (
      <>
        <h1>John's Welding Page</h1>
        <div className='container'>
          <MainPage />
        </div>
      </>
    )
  }
}
