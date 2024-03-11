import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent, showLeftNavbar, showRightNavbar}

  onToggleShowContent = () => {
    this.setState(each => ({showContent: !each.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(each => ({showLeftNavbar: !each.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(each => ({showRightNavbar: !each.showRightNavbar}))
  }
  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
