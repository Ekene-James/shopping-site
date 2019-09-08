export const increaseCartQuantity = (initialCartItems, nextCartItems) => {
  const ifItemsExist = initialCartItems.find(
    initialCartItem => initialCartItem.id === nextCartItems.id
  );

  if (ifItemsExist) {
    return initialCartItems.map(cartItem =>
      cartItem.id === nextCartItems.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...initialCartItems, { ...nextCartItems, quantity: 1 }];
};

export const clearItemFromcart = (prevItems, nextItem) =>
  prevItems.filter(item => item.id !== nextItem.id);

export const reduceItemFromCart = (prevItems, nextItem) => {
  const ifItemsExist = prevItems.find(item => item.id === nextItem.id);

  if (ifItemsExist.quantity === 1) {
    return clearItemFromcart(prevItems, nextItem);
  }
  return prevItems.map(item =>
    item.id === nextItem.id
      ? {
          ...item,
          quantity: item.quantity - 1
        }
      : item
  );
};
