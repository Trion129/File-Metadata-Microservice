var express = require('express')
var multer  = require('multer')
var path = require("path")
var upload = multer({ dest: 'uploads/' })
 
var app = express()
 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req,res){
	res.write(JSON.stringify(req.file)); //form files
	/* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
	 */
	res.status(204).end();
});

app.listen(process.env.PORT || 8080);