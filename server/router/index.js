var express = require('express');
var Post = require('../models/Post.js')
var Work = require('../models/Work.js')
var Mail = require('../models/Mail.js')

var router = express.Router();

router.post('/send-mail', (req,res) => {

	const mailData = {
		"name":req.body.name,
		"email":req.body.email,
		"text":req.body.text,
		"date": new Date()
	};

	var mail = new Mail(mailData);

	mail.save().then( (mail) => {
		res.status(200).json(mail);
	});
});
router.post('/send-work', (req,res) => {

	console.log(req);

	const workData = {
		"name":req.body.name,
		"description":req.body.description,
		"tags":req.body.tags,
		"site":req.body.site,
		"code":req.body.code,
		"img":req.body.img,
		"date": new Date()
	};

	var work = new Work(workData);

	work.save().then( (work) => {
		res.status(200).json(work);
	});
});

router.get('/get-work', (req,res) => {
	Work.find({}).then((posts) => {
		res.status(200).json(posts);
	})	
});
router.get('/get-mail', (req,res) => {
	Mail.find({}).then((posts) => {
		res.status(200).json(posts);
	})	
});


router.post('/edit', (req,res) => {

	Post.findById(req.body._id, function(err, post) {


	    if (err) {throw err;}
	     
	    post.title = req.body.title;
	    post.text = req.body.text;
	    
	    post.save(function(err) {
	        if (err) { throw err; }

	        console.log('Author updated successfully');
	        res.status(201).json(post);
	    });
	});	
});

router.post('/delete', (req,res) => {
	
	Post.findByIdAndRemove(req.body.arrID[0]).then(  (err) => {
		if (err) {
			throw err;
		}
		 return res.status(200).send("OK");
	});
		
});

module.exports = router;