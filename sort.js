// sort 排序方法   冒泡，选择，插入，快排，归并，堆排，桶排，二叉树排序，希尔排序，

let arr = [8, 3, 12, 5, 32, 3, 2, 12, 12, 53, 7, 0, 8, 5, 2];

function swap(arr, i, j) {
  let tem = arr[i];
  arr[i] = arr[j];
  arr[j] = tem;
}

const bubble = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  let flag = true;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false;
        swap(arr, j, j + 1);
      }
    }
    if (flag) {
      return arr;
    }
    flag = true;
  }
  return arr;
}
// console.log(bubble(arr));
const select = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  let flag = true,
    minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        flag = false;
        minIndex = j;
      }
    }
    if (flag) {
      return arr;
    }
    if (i !== minIndex) {
      swap(arr, minIndex, i);
    }
  }
  return arr;
}
// console.log(select(arr));
const insert = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    let tem = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (tem >= arr[j]) {
        break;
      }
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = tem;
  }
  return arr;
}

const quick = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  quickSort(arr, 0, arr.length - 1);
  return arr;
}
const quickSort = function (arr, l, r) {
  if (l >= r) {
    return;
  }
  let index = Math.floor(Math.random() * (r - l)) + l;
  swap(arr, index, r);
  let part = partition(arr, l, r);
  quickSort(arr, 0, part[0]);
  quickSort(arr, part[1], r);
}
const partition = function (arr, l, r) {
  let tem = arr[r];
  let i = l,
    left = l,
    bound = r;
  while (i < bound) {
    if (arr[i] < tem) {
      swap(arr, left++, i++);
    } else if (arr[i] > tem) {
      swap(arr, --bound, i);
    } else {
      i++;
    }
  }
  swap(arr, bound, r);
  return [left - 1, bound + 1];
}
// console.log(quick(arr));

const reduceSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  mergeSort(arr, 0, arr.length - 1);
  return arr;
}
const mergeSort = function (arr, l, r) {
  if (l >= r) {
    return;
  }
  let mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, mid + 1, r);
}
const merge = function (arr, l1, r1, l2, r2) {
  let start = l1;
  let index = 0,
    res = [];
  while (l1 <= r1 && l2 <= r2) {
    res[index++] = arr[l1] < arr[l2] ? arr[l1++] : arr[l2++];
  }
  if (l1 > r1) {
    while (l2 <= r2) {
      res[index++] = arr[l2++];
    }
  } 
  if (l2 > r2) {
    while (l1 <= r1) {
      res[index++] = arr[l1++];
    }
  }
  for (let i = 0; i < res.length; i++) {
    arr[start + i] = res[i];
  }
}
console.log(reduceSort(arr));
