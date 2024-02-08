function bubbleSort(arr)
{
  let lastSwap;
  for(let i = arr.length; i > 0; i--)
  {
    lastSwap = false;
    for(let j = 0; j < i - 1; j++)
    {
      if(arr[j] > arr[j + 1])
      {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        lastSwap = true;
      }
    }
    if(!lastSwap)
    {
      break;
    }
  }
  return arr;
}