# jsdom
jsdom解决了node与浏览器之间的api差异性问题  

# 遍历对象  
通过`Object.entries(obj)`可以把一个对象转化为一个二维数组  
```typescript
const obj = {
    a: 1,
    b: 2,
    c: 3
}
const res = Object.entries(obj);
console.log(res) // [['a', 1], ['b', 2], ['c', 3]]
```  
