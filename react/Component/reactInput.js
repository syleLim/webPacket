//text box
<form onSubmit={this.sFunc.bind(this)} >
  <input type='text'
    onChange={this.cFunc.bind(this)}
    value={this.state.value} />
  <input type='submit' />
</form>


//checkBox
<form onSubmit={this.sFunc.bind(this)} >
  <label>
    <input type='checkbox'
      onChange={this.cFunc.bind(this)}
      checked={this.state.isCheck} />
      {text}
  </label>
  <input type='submit' />
</form>

//textArea
<form onSubmit={this.sFunc.bind(this)}>
  <textarea onChange={this.cFunc.bind(this)}
    value={this.state.value}/>
  <input type='submit'/>
</form>


//radio button
<form onSubmit={this.sFunc.bind(this)}>
  <label>
    <input type='radio'
      name='name'
      value='value'
      checkd=this.state.checkedIndex
      onChange={this.cFunc.bind(this)} />
      {text}
  </label>
  ... //more button
</form>

//selet Box
<form onSubmit={this.sFunc.bind(this)} >
  <select onChange={this.cFunc,bind(this)}  // this must have function with changing value
    value={this.state.nowValue}>
    <option key={index} value={value}>
      {text}
    </option>
    ... //more option
  </select>
  <input type='submit' />
</form>











