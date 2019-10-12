const express = require('express');
const bodyparser = require('body-parser');
var cors = require('cors')

let app = express();


app.use(cors())
app.use(bodyparser.json());


app.get('/', (req, res) => {
    res.send('Hello! my App')
});
app.post('/', function(req,res){
    //it save() and creates req.body
        console.log(req.body)
        var arr= {
            type:'1',
            head: [['Name', 'Email', 'Country']],
            body: [
                ['David', 'david@example.com', 'Sweden'],
                ['Castille', 'castille@example.com', 'Norway'],
                // ...
            ]
        }
        var arr2= {
            type:'2',
            message:'Hello '+req.body.name
        }
        res.send(arr)
   
   
})

app.listen(5000, () =>{
    console.log('Run at 1000');
    
})