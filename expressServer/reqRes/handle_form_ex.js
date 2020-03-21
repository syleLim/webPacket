// normal form
app.get('/', (req, res) => {
  //working
})

app.post('/', (req, res) => {
  //req have data
  //req.query = query ; req.body.key_value = key_value
  res.redirect(303, '/home')
})


// ajax form  -> have to add error handler
app.post('/', (req, res) => {
  if(req.xhr || req.accepts('json,html') === 'json') {
    res.send({ success : true})
  } else {
    res.redirect(303, '/home')
  }
})


//file upload
const formidable = require('formidable')

app.get('/', (req, res) => {
  res.render('template', {data : data})
})

app.post('/path', (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req,(err, fields, files) {
    if(err) return res.redirect(303, '/error')
    
    //field, files have data
    
    res.redirect(303, '/home')
  }) 
})

//jquery file upload => boostrap ...