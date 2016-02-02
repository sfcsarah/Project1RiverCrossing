var $paraJ = $('.container p')
console.log('Javascript scripts loaded')
console.log($paraJ)

// The above are tests to make sure that the local Jquery file and the
// script file were loading correctly
var farmer = $('#farmer');
var fox = $('#fox');
var goose = $('#goose');
var cabbage = $('#cabbage');

var leftBankLoc = $('#leftBank');
var boat = $('#boat');
var rightBankLoc = $('#rightBank');
var buttonRiver = $('#crossRiver');

var turn = 0;

buttonRiver.click(function() {
  if (farmer.hasClass('boat')) {
    crossTheRiver();
    checkValid();
  }
  else {
    console.log('the farmer needs to paddle the boat')
  }
})

$('.sprite').click(function() {
  if ( $(this).hasClass('land') && boatHasSpace() && sameSide(this) ){
    console.log("going from bank to boat");
    moveTo(boat,this);
  }
  else if ( $(this).hasClass('boat') && sameSide(this) ) {
    console.log("going from boat to bank");
    if ($(this).hasClass('left')) {
      moveTo(leftBankLoc,this);
    }
    else if ($(this).hasClass('right')) {
      moveTo(rightBankLoc,this);
    }
  }
})

function boatHasSpace() {
  if (boat.children().length < 2) {
    return true;
  }
  return false;
}

function sameSide(item) {
  if ( ($(item).hasClass('left') && boat.hasClass('left')) ||
  ($(item).hasClass('right') && boat.hasClass('right')) ) {
    return true;
  }
  console.log('boat is on the opposite side')
  return false;
}

function crossTheRiver() {
  boat.toggleClass('right');
  boat.toggleClass('left');
  boat.children().toggleClass('right');
  boat.children().toggleClass('left');
}

function moveTo(ending,item) {
  ending.append($(item));
  $(item).toggleClass('land');
  $(item).toggleClass('boat');
}

function checkValid() {
  if (farmer.hasClass('left')) {
    checkUnattended('left','right')
  }
  else if (farmer.hasClass('right')) {
    checkUnattended('right','left')
  }
}

function checkUnattended(same,opposite) {
  if ( farmer.hasClass(same) &&
  ( (goose.hasClass(opposite) && fox.hasClass(opposite)) ||
    (cabbage.hasClass(opposite) && goose.hasClass(opposite)) ) ) {
      console.log("you lose");
  }
}
