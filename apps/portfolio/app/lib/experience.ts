export function getYearsOfExperience() {
  const startDate = new Date(2024, 7); // August 2024 (months are 0-indexed)
  const currentDate = new Date();
  let years = currentDate.getFullYear() - startDate.getFullYear();
  const months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
  }
  return years;
}
