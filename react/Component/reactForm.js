//1. simple form
class simpleForm extends React.Component {
  constructor() {
    this.state = {
      value : ''
    }
  }
  
  doChange (e) {
    const changeValue = e.target.value
    /*
    숫자만 입력받는 폼
    const changeValue = e.target.value.replace(/[^0-9]/g, '')
    */
    
    this.setState({value : newValue})
  }
  
  doSubmit (e) {
    const submitValue = this.state.value
    /*
      submit때의 working
    */
    e.preventDefault() //원래 상태로 되돌림
  }
  
  render () {
    const doChg = (e) => this.doChange(e)
    const doSub = (e) => this.doSubmit(e)
    
    return (
      <div>
        <form onSubmit={doSub} >
          <input type = 'text' value = {this.state.value} onChange={doSub} />
        </form>
      </div>
    )
  }
}


//2. multiform
onChange = (e) => {
  const key = e.target.name
  const changeValue = e.target.value
  
  this.setState({[key] : changeValue})
}

render() {
  <form>
    <div><label>
      <input 
        type='text' 
        name='key'
        value={this.state.value} 
        onChange={this.onChange.bind(this)}/>
    </label></div>
  </form> 
}




















