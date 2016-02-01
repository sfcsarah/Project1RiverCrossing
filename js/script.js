var $paraJ = $('.container p')
console.log('Javascript scripts loaded')
console.log($paraJ)

// The above are tests to make sure that the local Jquery file and the
// script file were loading correctly
var farmerLeft = document.getElementById('farmerLeft');
var farmer = $('#farmerLeft');
var boat = $('#boat');
var leftBank = $('#leftBank');
/*
farmerLeft.onclick = clickFarmer;
function clickFarmer() {
  console.log('farmer on left bank was clicked');
  farmerLeft.classList.toggle('hidden');
  farmerBoat.classList.toggle('hidden');
}
*/

/*
function moveRight(item) {
  item.click(function() {
    console.log(item+ 'right clicked');
    boat.append(item);
  })
}
moveRight(farmer);
*/

// the above will append the farmer to the boat
function moveLeft(item) {
  item.click(function() {
    if (item.hasClass('leftBank') == true) {
      console.log("hasClass is working")
    }
    // the above tests the hasClass method in jQuery
    console.log(item+ 'left clicked');
    boat.append(item);
    item.toggleClass('boat');
    item.toggleClass('leftBank');


  })
}
moveLeft(farmer);
