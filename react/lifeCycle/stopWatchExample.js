class watch extends React.Component {
  constructor () {
    this.state = {
      isLive : false,
      curTime : 0,
      startTime : 0
    }
    
    this.timerId = undefined
  }
  
  timer () {
    if (this.state.isLive) {
      const now = new Date().getTime()
      this.setState({curTime : now})
    }
  }
  
  componentWillMount () {
    this.timerId = setInterval ( e => {
      this.timer()
    }, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  
  startAction (e) {
    if(this.state.isLive) {
      this.setState({isLive ;: false})
      return
    }
    
    const now = new Date().getTime()
    this.setState({
      isLive : true,
      curTime : now,
      startTime : now
    })
  }
  
  getClock () {
    const time = Math.floor((this.state.curTime - this.state.startTime) / 1000)
    
    changTimeToString = (time) => {
      const str = '00' + String(time)
      return str.substr(str.length, -2, 2)
    }
    
    const ss = t%60
    const m = Math.floor(t/60)
    const mm = m%60
    const hh = Math.floor(mm/60)
    
    return (
      <span>
        {changeTimeToString(hh)} : {changeTimeToString(mm)} : {changeTimeToString(ss)}
      </span>
    )
  }
  
  render () {
    const clock = this.getClock()
    
    return (
      <div>
        <div><{clock}</div>
        <button onClick=this.startAction.bind(this)>button</button>  
      </div>
    )
  }  
}















