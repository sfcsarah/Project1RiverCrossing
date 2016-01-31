console.log("Javascript scripts loaded");
console.log($('.container p'));
//The above are tests to make sure that the local Jquery file and the
// script file were loading correctly
var farmerLeft = document.getElementById('farmerLeft');
farmerLeft.onclick=clickFarmer;
function clickFarmer() {
  console.log("farmer on left bank was clicked")
  farmerLeft.classList.toggle("hidden");
  farmerBoat.classList.toggle("hidden");
}
