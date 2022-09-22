export function getMergeSortAnimations(array) {
    const annimations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, annimations);
    return annimations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    annimations
) {
    if (startIdx == endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, annimations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, annimations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, annimations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    annimations
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        annimations.push([i, j]);
        annimations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            annimations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            annimations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        annimations.push([i, i])
        annimations.push([i, i])
        annimations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++]
    }
    while (j <= endIdx) {
        annimations.push([j, j]);
        annimations.push([j, j]);
        annimations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}