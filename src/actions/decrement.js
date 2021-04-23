const decrement = (by) => {
  console.log(by);
  return {
    type: "DECREMENT",
    by: by,
  };
};

export default decrement;
