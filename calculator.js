function Add(numbers) {
  if (numbers == "") return 0;
  numbers = numbers.replace("\n", "");

  let s = ",";
  let count = 0;
  if (numbers.slice(0, 2) === "//") {
    s = numbers[2];
    numbers = numbers.slice(2);
  }
  if (isNaN(parseInt(numbers.slice(numbers.length - 1)))) throw new Error();

  let Snum = numbers.split(s);
  let res = 0;

  for (let i = 0; i < Snum.length; i++) {
    for (let j = 0; j < Snum[i].length; j++) {
      if (isNaN(parseInt(Snum[i][j])))
        throw new Error(
          s +
            " expected but " +
            Snum[i][j] +
            " found at position " +
            (parseInt(count) - 1) +
            "."
        );

      res += parseInt(Snum[i][j]);
      console.log(Snum[i][j]);
      count += 1;
    }
    count += 1;
  }
  return res;
}
module.exports = Add;
