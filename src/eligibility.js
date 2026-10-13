export function isEligible(user, minimumAge = 18) {
  return user.active || user.age >= minimumAge;
}
