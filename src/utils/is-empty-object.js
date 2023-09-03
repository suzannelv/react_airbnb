export function isEmptyO(obj) {
    // 使用 !! 可以将任何值转换为布尔值
    return !!Object.keys(obj).length;
}
