var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
	title: {type: String, required: '{PATH} is required!'},
	featured: {type: Boolean, required: '{PATH} is required!'},
	published: {type: Date, required: '{PATH} is required!'},
	tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
	Course.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
			Course.create({title: 'C# for idiots', featured: true, published: new Date('1/1/2012'), tags: ['C#', 'Idiots']});
			Course.create({title: 'PHP and other suicide alternatives', featured: true, published: new Date('1/1/2012'), tags: ['Suicide']});
			Course.create({title: 'Command line for elephants', featured: false, published: new Date('3/1/2012'), tags: ['cmd']});
			Course.create({title: 'Running naked in Nike shoes', featured: true, published: new Date('11/1/2005'), tags: ['Sport']});
			Course.create({title: 'Three-wheeled car, porcelian dog and 55 rubber animals (or how to decorate your workplace)', featured: true, published: new Date('1/1/2012'), tags: ['Hobby']});
			Course.create({title: 'Joga for pencils', featured: true, published: new Date('1/1/2012'), tags: ['Hobby', 'Sport']});
			Course.create({title: 'Mouth-first: Java', featured: true, published: new Date('7/1/1998'), tags: ['Java']});
			Course.create({title: 'O-really-?-publishing: 321 as a reverse to 123', featured: true, published: new Date('1/22/2012'), tags: ['Programming']});
			Course.create({title: 'How to become a volley-ball player', featured: true, published: new Date('1/15/2012'), tags: ['Sport']});
			Course.create({title: 'Blonde Girl (missing manual)', featured: true, published: new Date('12/1/2012'), tags: ['Hobby']});
			Course.create({title: 'History of Bangladesh', featured: true, published: new Date('9/1/2012'), tags: ['Hobby']});
		}
	});
};

exports.createDefaultCourses = createDefaultCourses;