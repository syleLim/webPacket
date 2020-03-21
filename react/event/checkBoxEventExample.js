class checkBox extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      checked : false
    }
  }
  
  boxCheck(e) {
    const isChecked = !this.state.checked
  
    this.setState({
      checked : isChecked
    })
  }
  
  render() {
    let mark = this.state.checked ? 'check' : 'non_check'
    
    return (
      <div onClick = {this.boxCheck.bind(this)}>
        {mark} {content}
      </div>
    )
  }
}

/*
arrow function으로 내부에서 선언하면 bind 불필요

<div onClick = {(e) => this.boxCheck(e)} /> 
*/

ReactDOM.render(
  <checkBox />,
  document.getElementById('root')  
)