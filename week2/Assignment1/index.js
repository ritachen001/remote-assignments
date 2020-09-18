// Assignment 1: Function and Array

function max(x) {

  let maxX = x[0];
  let minX = x[0];

  for (let i = 0; i < x.length; i++) {
    // 最大值
    if (maxX < x[i]) {
      maxX = x[i];
    }

  }
  console.log("最大值是" + maxX);
}

max([1, 2, 4, 5]);
max([5, 2, 7, 1, 6]); 