const likes = [] ;
const likes2 = ["Jacob"] ;
const likes3 = ["Jacob", "Alex"] ;
const likes4 = ["Jacob", "Alex", "Pepe"] ;
const likes5 = ["Jacob", "Alex", "Pepe", "Luis"] ;
const likes6 = ["Jacob", "Alex", "Pepe", "Luis", "Juancito"] ;

const salvio = function megustas(likes) {
  if (likes.length === 0){
    console.log('no one likes this')
  }if (likes.length === 1){
    console.log(`${likes[0]} likes this`)
  }if(likes.length === 2){
    console.log(`${likes[0]} and ${likes[1]} likes this`)
  }if(likes.length === 3){
    console.log(`${likes[0]}, ${likes[1]} and ${likes[2]} likes this`)
  }if(likes.length >= 4){
    console.log(`${likes[0]}, ${likes[1]} and ${likes.length-2} others likes this`)
  }
}
salvio(likes)
salvio(likes2)
salvio(likes3)
salvio(likes4)
salvio(likes5)
salvio(likes6)




