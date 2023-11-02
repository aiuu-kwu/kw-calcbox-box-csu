function avg(nums) {
    let s = nums.reduce((prev, curr) => prev + curr, 0);
    return s / nums.length;
}

function prime(num) {
    if (num <= 1) {
        return false;
      }
      if (num <= 3) {
        return true;
      }
      if (num % 2 === 0 || num % 3 === 0) {
        return false;
      }
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
          return false;
        }
      }
      return true;
}

function fact(num) {
    if (num < 0) {
        return "음수의 팩토리얼은 정의되지 않습니다.";
      }
      if (num <= 1) {
        return 1;
      }
      if (num <= 15) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
          result *= i;
        }
        return result;
      } else {
        return "입력값이 15를 초과합니다. 최대 입력값은 15입니다.";
      }
}

module.exports = {
    avg,
    prime,
    fact
}