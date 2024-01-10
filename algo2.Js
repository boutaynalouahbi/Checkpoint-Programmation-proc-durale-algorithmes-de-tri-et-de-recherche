function swap(x, y) {
    let tmp = x;
    x = y;
    y = tmp;
    return [x,y]
  }
function Tri_A_Bulle(arr) {
    let n = arr.length;
    for (let i = 0; i <= n - 1; i++) {
       let key = arr[i];
       for (let j = i; j <= n - 1; j++) {
          if (arr[j] < key) {
            [arr[j],arr[i]]=swap(arr[j], arr[i]);
          }
       }
       
    }  
    
    }
let tab1=[1,4,7,8,0,-2,100,23,11]
Tri_A_Bulle(tab1);
console.log("test"+tab1);

const Tri_Par_Insertion=(arr)=>{
     let n=arr.length;
    for(let i=1;i<n;i++){
        let key=arr[i];
         let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
        
    }
   
}
let tab2=[11,20,7,18,0,-2,100,23,1]
Tri_Par_Insertion(tab2);
console.log(tab2)