
const value: any = {
  a: 'b'
};

const valueList = Object.keys(value);

let handleValue: any = {};

valueList.forEach((key) => {
  handleValue = { ...handleValue, ...value[key] };
});

export default {
  ...handleValue,
};
