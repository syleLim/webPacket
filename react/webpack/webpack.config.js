module.exports = {
  entry : './main.js', //root file
  
  output : {
    filename : 'out/test.js' //out file
  },
  
  module : {
    rule : [
      {
        test : /.js$/ , 
        loader : 'babel-loader',
        options : {
          pesent : ['es2015', 'react']
        }
      }
    ] 
  }
}