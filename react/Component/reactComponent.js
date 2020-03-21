//1. JSX
const jsxElement = (
  <div style = {css}>
    <h1>{data}</h1>
  </div>
)


//2. creatElement
const element = React.createElement(
  "h1",           //tag
  { id : "id"},   //value
  "Content"       //content
)


//3. function Component
function componentName (props) {
  return (
    <div>
      <p>{props.data}</p>       //props을 파라미터로 받음
    </div>
  )
}

//4. class Component
class componentName extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.data}</p>  //props를 this.props로 접근
           </div>
    )
  }
}

