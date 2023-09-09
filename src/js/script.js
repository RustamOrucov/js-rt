const container=document.querySelector('.container')
const count=document.getElementById('count')
const amount=document.getElementById('amount')
const movie=document.getElementById('movie')
const seats=document.querySelectorAll('.seat:not(.reserved')  // all seat

getFromLocalStorage();
calculateTotal();

container.addEventListener('click',(e)=>{
     console.log(e.target);
     if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
          e.target.classList.toggle('selected')
         calculateTotal();   

     }
});

movie.addEventListener('change',(e)=>{
    calculateTotal()
})





function calculateTotal(){
    const selectedSeat=container.querySelectorAll('.seat.selected')  //selected seat
  
     let selectedCount=selectedSeat.length
     let price=movie.value;
   const selectSeatArea=[];
   const seatArea=[];

   selectedSeat.forEach((seat)=>{
    selectSeatArea.push(seat)
   })

   seats.forEach((seat)=>{
    seatArea.push(seat)
   })

let selectSeatIndex=selectSeatArea.map((seat)=>{
    return seatArea.indexOf(seat)
})

console.log(selectSeatIndex);
     saveToLocalStorage(selectSeatIndex)
        
          count.innerText=selectedCount;
          amount.innerHTML=selectedCount*price;
}

function getFromLocalStorage(){
    const selectedSeat=JSON.parse(localStorage.getItem('selectedSeat'))
    if(selectedSeat !=null && selectedSeat.length>0){
              seats.forEach((seat,index)=>{
                if(selectedSeat.indexOf(index)>-1){
                    seat.classList.add('selected')
                }
              })
    }





    const selectedMovie=JSON.parse(localStorage.getItem('selectedMovie'))
   if(selectedMovie !=null){
    movie.selectedIndex=selectedMovie;
   }



}

function saveToLocalStorage(index){
    localStorage.setItem('selectedSeat',JSON.stringify(index))
    localStorage.setItem('selectedMovie',movie.selectedIndex)
}