class event extends React.Component {
  constructor (props) {
    super(props)
    
    this.eventMethod = this.eventMethod.bind(this)
  }
  
  eventMethod(e) {
    actionTarget = e.target //component target
    
    data = this.props.data  //bind(this)가 되지 않으면 접근 불가
    // working action
  }
  
  render(){
    <div>
      <p onClick={this.eventMethod}>event action</p>
    </div>
  }
}

