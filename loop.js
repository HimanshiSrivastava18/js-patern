// pattern 1

// for(let i=1;i<=5;i++){
//     console.log("*".repeat(i))
// }


// pattern 2
// for(let i=5;i>=1;i--){
//     console.log("*".repeat(i))
// }



// pattern 3
// for(let i=5;i>=1;i--){
//     console.log(" ".repeat(6-i)+"*".repeat(i))
// }


// pattern 4
// for (let i=1;i<=5;i++){
//     console.log(" ".repeat(5-i)+"*".repeat(i))
// }


// pattern 5
// for(let i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         if(i==1||i==5||j==1||j==5){
//             process.stdout.write("*")

//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }



// pattern 6
// for (let i=1;i<=5;i++){
//     for (let j=1; j<=5;j++){
//       if (i==1||i==5||i+j==6){
//         process.stdout.write("*")
//       }else{
//         process.stdout.write(" ")
//       }
//     }
//     console.log()
//   }


// pattern 7
// for (let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//       if (i==1||i==5||i==j){
//         process.stdout.write("*")
//       }else{
//         process.stdout.write(" ")
//       }
      
//     }
//     console.log()
//   }   



// pattern 8
// for(let i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//       if (i==1||i==5||i+j==6||i==j){
//         process.stdout.write("*")
//       }else{
//         process.stdout.write(" ")
  
//       }
//     }
//     console.log()
//   }



// pattrn 9
// for(let i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         if(i==1||i==5||j==1||j==5||i+j==6||i==j){
//          process.stdout.write("*")
 
//        }else{
//          process.stdout.write(" ")
 
//        }
//     }
//     console.log()
//   }




// for(let i=5;i>=1;i--){
//     for(j=1;j<=6-i;j++){
//       process.stdout.write(" ")
//     }
//     for(let k=1;k<=i;k++){
//       process.stdout.write("* ")
//     }
//     console.log()
//   }
//   for(let i=1;i<=5;i++){
//     for(let j=1;j<=5-i;j++){
//       process.stdout.write(" ")
//     }
//     for(let k=1;k<=i*2-i;k++){
//       process.stdout.write(" * ")
//     }
//     console.log()
//   }