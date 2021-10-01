var images = ["IMG_20190320_151610.jpg", "now and mid (1).jpeg", "WhatsApp Image 2021-10-01 at 7.53.43 AM.jpeg", "family.png"];
var names = ["Mummy,Papa", "mysisters", "Me"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}