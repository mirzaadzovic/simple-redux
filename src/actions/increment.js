const increment = (by) => {
  return {
    type: "INCREMENT",
    by: by,
  };
};

export default increment;
