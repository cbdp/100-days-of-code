var count = 0;

function cc(card) {
  // Only change code below this line
  if (card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
    count = count + 0;
  } else if (card === 10) {
    count--;
  } else if (card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;
  } else {
    return "Change Me";
  };

  if (count >= 1) {
    return count + " Bet"
  } else {
    return count + " Hold"
  };
  // Only change code above this line
};

cc(2); cc(3); cc(7); cc('K'); cc('A');
