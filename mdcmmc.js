


/*...........................CALCULANDO O MMC................................ */
function Mmc(){
    let n=2
    let mmc=1
    let a=Number(prompt("insira o primeiro numero"))
    let b=Number(prompt("Insira o segundo numero"))
    let aa=a
    let bb=b  
    if(((a>=2)&&(a<=5))&&((b>=7)&&(a<=11))){


            
        while(a!=1 || b!=1 ){


            if(a%n===0 || b%n===0){
               if(a%n===0){ a=a/n}
               if(b%n===0){ b=b/n} 
               
            mmc=mmc*n
            }
            /*
            console.log("Quando n e"+n)
            console.log("valor de a "+a)
            
            console.log("valor de b"+b)
            */
            n=n+1
        }

        console.log(" O mmc dos numeros"+aa+"e "+bb+" eh ="+mmc)

        var infor="O MMC dos números ("+ aa+ " e "+ bb +") é ="+mmc
        
            document.querySelector('h1').textContent=infor
           

        
        }else{

        

            var infor="o número esta fora do Intervalo 2<="+aa+"<=5 Ou 7<="+bb+"<=11"
            document.querySelector('h1').textContent=infor
            return 0
        }


}

/*.........................................FIM MMC............................................*/


/*........................................BUSCANDO O MDC......................................*/
function Mdc(){
let n=2;
let mdc=1
    let a=Number(prompt("insira o primeiro numero"))
    let b=Number(prompt("Insira o segundo numero"))
        
    let aa=a
    let bb=b  
    if(((a>=2)&&(a<=5))&&((b>=7)&&(a<=11))){


            
        while(a!=1 || b!=1 ){


            if(a%n===0 && b%n===0){
               if(a%n===0){ a=a/n}
               if(b%n===0){ b=b/n} 
               
            mdc=mdc*n
            }

            if(a%n===0){ a=a/n}
               if(b%n===0){ b=b/n} 
               
            n=n+1
        }
        console.log(" O mdc dos números"+aa+"e "+bb+" eh ="+mdc)

        var infor="O MDC dos números ("+ aa+ " e "+ bb +") é ="+mdc
        
            document.querySelector('h1').textContent=infor
           

        }else{

        
            var infor="o número esta fora do Intervalo 2<="+aa+"<=5 Ou 7<="+bb+"<=11"
            document.querySelector('h1').textContent=infor
            return 0
        }
}

/*..........................................FIM MDC...............................*/  





//...............................FATORIAL.....................................
//MINHA FUNÇÃO FAT RECURSIVA
function FAT(n){

    if(n===0){
        return 1
    }else{  return FAT(n-1)*n}

}

//end Fat

/*BUSCANDO O FATORIAL*/
function fat(){
    let n=Number(prompt("Insira o número que desejas Saber o seu Fatorial"))
        if(((n>=2)&&(n<=5))||((n>=7)&&(n<=11))){
    
              console.log(FAT(n))


              var infor="O Factorial do Número ("+ n+") é ="+ FAT(n)
              
                  document.querySelector('h1').textContent=infor
                  
      

    }else{

        
        var infor="o número esta fora do Intervalo 2<="+n+"<=5 Ou 7<="+n+"<=11"
        document.querySelector('h1').textContent=infor
        return 0
    }
}    
    /*FIM FATORIA*/  
//...........................FIM FATORIAL...................................

document.querySelector('#mdc').onclick=Mdc
document.querySelector('#mmc').onclick=Mmc
document.querySelector('#fat').onclick=fat


//..............................MATRIZ 3x3..............................

//BREVEMENTE..................
//.......................................................................

