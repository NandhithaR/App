import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render () {
    const {count} = this.state
    return (
      <div>
        <h1 style={{fontSize:"150%"}}>Timer: {count}</h1>
      </div>
    )
  }
  // setInterval
  // clearInterval
  componentDidMount () {
    const {startCount} = this.props
    this.setState({
      count: startCount
    })
    this.doIntervalChange()
  }

  doIntervalChange = () => {
      this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: parseInt(prevState.count) + 1
      }))
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.myInterval)
  }
}

export default Timer