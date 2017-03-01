var gifPics = []

Template.gifmaker.events({
    'change input': function(ev) {
        var reader = new FileReader();
        reader.onload = function(file) {
          //push base64 into gifPics
          gifPics.push(file.target.result)
          //create to show the picture element
          var pic = document.createElement("img")
          pic.src = file.target.result
          pic.width = pic.height = 77
          document.getElementById('container_importedPics').appendChild(pic);
        }
        reader.readAsDataURL(ev.target.files['0'])
    }
})

Template.gifButton.events({
  //on create gif click run:
  'click button': function() {
    //call gifshot to create giff for you using data from inputs
    //and our gifPics array 
    gifshot.createGIF({
      gifWidth: document.getElementById('gifWidth').value,
      gifHeight: document.getElementById('gifHeight').value,
      images: gifPics,
      interval: (document.getElementById('milliseconds').value/1000),
      text: document.getElementById('text').value,
  }, function (obj) {
      if (!obj.error) {
          //create the image 
          var image = obj.image, animatedImage = document.createElement('img');
          animatedImage.src = image;
          document.getElementById('resultGif').append(animatedImage);
          //create the link to download
          var imageLink = document.createElement('a');
          imageLink.href = image
          imageLink.download = 'sergey_sarkisyan'
          imageLink.innerText = 'click here to download your gif!'
          document.getElementById('resultGif').append(imageLink);
      }
  });
                      /* -----CLEAN UP----- */
  //clean out the array of imported pictures
  gifPics = []
  //clean out the input's on submit, no file should be referenced
  var picInputs = document.getElementsByClassName('picInputs')
    for (var i = 0 ; i < picInputs.length; i++) {
      picInputs[i].value = ''
    }
  //clean out the pictures in the container
  document.getElementById('container_importedPics').innerText = '';
  //clean out the gif made before
  document.getElementById('resultGif').innerText = '';

  }
});

