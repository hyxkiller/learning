let arr = [3, 1, 40, 55, 12, 33];

/**
 * 冒泡排序
 * @param {Array} arr 
 * len - 1 - i 因为最多比较倒数第二个数和倒数第一个数，所以-1，每排好一个最大值放到最后一位后，就少比较一组数，所以-i
 */
let bubble = function (arr) {
	for (let i = 0, len = arr.length; i < len; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
console.log('bubble', bubble(arr));

/**
 * 选择排序
 * @param {Array} arr 
 */
let select = function (arr) {
	for (let i = 0, len = arr.length; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}
	return arr;
}
console.log('select', select(arr));

/**
 * 快速排序
 * @param {Array} arr 
 */
let quick = function (arr) {
	let len = arr.length;
	if (len <= 1) return arr;
	let midIndex = Math.floor(len / 2);
	let mid = arr[midIndex];
	let left = [], right = [];
	for (let i = 0; i < len; i++) {
		if (i === midIndex) continue;
		if (arr[i] < mid) {
			left.push(arr[i])
		}
		if (arr[i] > mid) {
			right.push(arr[i])
		}
	}
	return quick(left).concat(mid, quick(right));
}
console.log('quick', quick(arr));

