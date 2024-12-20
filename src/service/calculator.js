const menuSet = {
  red: 50,
  green: 40,
  blue: 30,
  yellow: 50,
  pink: 80,
  purple: 90,
  orange: 120,
};

export const calculate = (items, isMember = false) => {
  let total = 0;
  let orangeDiscount = 0;
  let greenPinkDiscount = 0;

  if (items.length > 7) {
    throw new Error("Cannot have more than 7 items in the order");
  }

  items.forEach((item) => {
    const price = menuSet[item.menu] * item.quantity;
    total += price;

    if (item.menu === "orange" && item.quantity >= 2) {
      orangeDiscount += Math.floor(item.quantity / 2) * menuSet.orange * 0.05; // 5% discount per pair
    }

    if ((item.menu === "green" || item.menu === "pink") && item.quantity >= 2) {
      greenPinkDiscount +=
        Math.floor(item.quantity / 2) * menuSet[item.menu] * 0.05; // 5% discount per pair
    }
  });
  const memberDiscount = isMember ? total * 0.1 : 0;
  total = total - memberDiscount - orangeDiscount - greenPinkDiscount;
  return total;
};
