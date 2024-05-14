var imgdatauri;

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.querySelector("#image1").src = e.target.result;
      imgdatauri = e.target.result;
      console.log(imgdatauri);
    };
  }
  reader.readAsDataURL(input.files[0]);


}


function hideText() {
    document.querySelector("#image2").src = steg.encode(document.querySelector('#text').value, imgdatauri);
    document.querySelector('.EncodedImage').innerHTML+=`
    
    <a id="dowloadEncodedImage " href="${  document.querySelector("#image2").src } " download>Download
    
    
    `
  }


  function decode(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
          console.log(steg.decode(e.target.result));
        
        document.querySelector('#decoded').innerText = steg.decode(e.target.result);
      };
    }
    reader.readAsDataURL(input.files[0]);
  }