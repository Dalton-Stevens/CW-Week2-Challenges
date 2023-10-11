let friends = ["Ryan", "Kieran", "Mark"];

const friendOrFoe = (friends) => {
  return friends.filter((friend) => friend.length === 4);
};

console.log(friendOrFoe(friends));
