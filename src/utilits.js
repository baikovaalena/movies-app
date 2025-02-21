export const getGrade = (grade) => {
  if (grade >= 8.5) {
    return "#007BFF";
  } else if (grade >= 7.0) {
    return "#28A745";
  } else if (grade >= 5.0) {
    return "#FFC107";
  } else {
    return "#DC3545";
  }
};
