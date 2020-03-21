class ColorContainer extends React.Component {
  constructor () {
    super()
    
    this.state = {
      index : 0,
      colors : ['red', 'yellow', 'green']
    }
  }
  
  colorChange (data) {
    this.setState({index : data.index})
  }
  
  render () {
    const colorBoxes = this.state.colors.map((e, idx) => {
      return <colorBox colorChange={this.colorChange.bind(this)} index={idx} color={e} />
    })
    
    const choiceColor = this.state.colors[this.state.index]
    
    <div>
      <h>{choiceColor}</h>
      {colorBoxes}
    </div>
  }
}

class colorBox extends React.Component {
  constructor () {
    super()
    
    this.state = {
      index : this.props.index,
      color : this.props.color
    }
  }
  
  handleChange (e) {
    this.props.colorChange({
      index : this.state.index
    })
  }
  
  const cstyle = {
    color : this.state.color
  }  
  
  render () {
    return (
      <div>
        <span onClick={this.handleChange.bind(this)} style={cstyle}>COLOR</span>
      </div>
    )
  }
}