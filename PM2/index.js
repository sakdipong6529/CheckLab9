let express = require('express')
let app = express()

app.get('/', (req,res) => {
    let x = 'Hello'
    let y = true
    let z = 10
    res.send('x is a ' + typeof(x) + ' , ' +
             'y is a ' + typeof(y) + ' , ' +
             'z is a ' + typeof(z) )
})

app.get('/crash', (req,res) => {
    console.log('Crash!!')
    res.send('Creash')
    process.exit(1)
})
app.listen(process.env.PORT, 
    () => console.log('Server is running at ' , process.env.PORT))
