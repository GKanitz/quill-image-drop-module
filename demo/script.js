var quill = new Quill('#editor', {
	theme: 'snow',
	modules: {
        imageDrop: { }
        // imageDrop: { callback: logDrop }
    }
});


function logDrop(data) {
	console.log(data);
}