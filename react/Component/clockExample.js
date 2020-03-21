class Clock extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      now : (new Date())
    }
    
    setInterval(e => {
      this.setState({now : (new Date())})
    }, 1000)
  }
  
  render () {
    return (
      <div>
        <p>{now.getHours()} - {now.getMintes()} - {now.getSeconds()} </p>
      </div>
    )
  }
}

ReactDOM.render(<div><Clock /></div>
  document.getElementById('root')
)