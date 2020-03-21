class listComponent extends React.Component{
  render() {
    const listData = this.props.listData.map((e) => {
      return (
        <li>{e}</li>
      ) 
    })
    
    return (
      <div>
        <ul>{listData}</ul>
      </div>
    )
  }
}