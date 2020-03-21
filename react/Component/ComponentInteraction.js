class externalComponent extends React.Component {
  constructor () {
    this.state = {
      value : ''
    }
  }
  
  onChange (e) { 
    this.setState({value : e.target.value})
  }
  
  render () {
    return (
      <div>
        <innerComponent onChange={this.onChange.bind(this)} value={this.state.value}/>
        {this.state.value}
      </div>
    )
  }
}

class innerComponent extends React.Component {
  constructor () {
    this.state = {
      inValue : this.props.value
    }
  }
  
  handleChange (e) {
    this.setState({value : e.target.value})
    
    this.prop.onChagne(e.target)
  }
  
  // 상위 데이터에서 넘어온 프로퍼티의 변경을 반영함
  componenetWillReceiveProps (nextProps) {
    this.setState({inValue : nextProps.value})
  }
  
  render () {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)}>
      </div>
    )
  } 
}