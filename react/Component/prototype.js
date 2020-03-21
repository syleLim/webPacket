import PropTypes from 'prop-types'

class upperComponent extends React.Component {
  constructor () {
    super()
    
    this.state = {
      value : '',
      name : ''
    }
  }
  
  handleChange() {
    // work something
  }
  
  render () {
    return (
      <innerComponent value={this.state.value} 
      name={this.state.name} onChange={this.handleChange.bind(this)} />
    )
  }
}

class innerComponent extends React.Component {
  constructor () {
    super()
  }
  
  render () {
    return (
      <div onClick={this.props.onChange}>
        {this.props.value} - {this.props.name}
      </div>
    )
  }
}


// 넘어 오는 데이터의 타입과 디폴트값 지정
innerComponent.propTypes = {
  value : PropTypes.object,
  name : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
}

innerComponent.defaultProps = {
  value : null,
}