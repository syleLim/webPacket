// normal logic
app.get('/', (req, res) => {
  res.render('content')
})

// 500 logic
app.get('/' (req, res) => {
  res.status(500).render('error')
})

//query, cookie, session
app.get('/' (req, res) => {
  res.render('content', {
    message : '',
    query : req.query.key,
    cookie : req.cookie.key,
    session : req.session.key
  })
})

//custom layout
app.get('/', (req, res) => {
  res.render('template',{key : data})
})

//plain text
app.get('/', (req, res) => {
  res.type('text/plain')
  res.send('content')
})

//err handler - have to use next parameter
app.use((req, res, next) => {
  res.status(500).render('template')
})

//handelr
app.use((req, res) => {
  res.status(404).render('template')
})

//handle post form with body-parser
app.post('/', (req, res) => {
  data = req.body.key
  res.redirect(303, '/home')
})

//strict post 
app.post('/', (req, res) => {
  try {
    return res.xhr ? res.render({sucess : true}) : res.redirect(303, '/home')
  } catch (ex) {
    return res.xhr ? res.json({error : 'error data'}) : res.redirect(303, '/home')   
  }
})

//use res.format / change function according to data type
app.get('/', (req, res) => {
  res.format({
    'application/json' : () => {
      res.json(json_data)
    },
    
    'text/xml' : () => {
      res.type('text/xml')
      res.send(xml_data)
    }
  })
})













