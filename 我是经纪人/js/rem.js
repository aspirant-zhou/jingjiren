function fn(){
    /*设计稿的宽*/
    var desW = 750;
    /*屏幕的宽*/
    var winw = document.body.clientWidth || document.documentElement.clientWidth;
    console.log(winw);
    if(winw > desW){
        winw = desW;
    }
    
    var rate = winw / desW;  
    //js动态计算 html的font size   
    document.documentElement.style.fontSize = rate * 100 + "px";
}

fn();
// 监听屏幕改变, 屏幕改变就会执行fn代码 
window.addEventListener("resize",fn);