const isStringEmpty = (text) => {
  let pass = false;

  if (
    text === "" ||
    text === " " ||
    text === null ||
    text === "undefined" ||
    text.length === 0
  ) {
    pass = true;
  }

  return pass;
};

export default isStringEmpty;
