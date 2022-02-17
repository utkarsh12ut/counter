var count =0;


function increase(){

        count=count+1;

    
}


function decrease(){

   
       if(count==0){
        return false;
       }
       else{
           count=count-1;
       }
    
}


function display(){
    console.log(count);

    document.getElementById("head1").innerHTML=count;
}