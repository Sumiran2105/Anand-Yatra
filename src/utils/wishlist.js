// Get wishlist from storage
export function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

// Add item to wishlist
export function addToWishlist(item) {
  const list = getWishlist();
  const normalizedId = String(item.id);

  // Check if already exists
  const exists = list.some((w) => String(w.id) === normalizedId);

  if (!exists) {
    list.push({ ...item, id: normalizedId });
    localStorage.setItem("wishlist", JSON.stringify(list));

    // Notify UI everywhere
    window.dispatchEvent(new Event("wishlistUpdated"));
  }
}

// Remove item from wishlist
export function removeFromWishlist(id) {
  const normalizedId = String(id);

  const updated = getWishlist().filter(
    (w) => String(w.id) !== normalizedId
  );

  localStorage.setItem("wishlist", JSON.stringify(updated));

  // Notify UI everywhere
  window.dispatchEvent(new Event("wishlistUpdated"));
}
