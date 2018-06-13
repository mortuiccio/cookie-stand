'use strict'

var alLocal = [] 

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
function CreateLocation(name,minCustomer,maxCustomer,averCokPerCus) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.averCokPerCus = averCokPerCus;
    this.randCustHour = []
    this.totalcookies = 0

    this.random = function(){
        for(var i = 0; i < hours.length; i++) {
          let ran = Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer
          this.randCustHour.push(Math.floor(ran * averCokPerCus))
          console.log(this.randCustHour)
        }
      },
      
      this.sum = function(){
          for(var i =0; i < this.randCustHour.length;i++){
              this.totalcookies += this.randCustHour[i]
          }
      }
      this.random()
      this.sum()
      alLocal.push(this)
}     
      function createAll(){
       new CreateLocation("First and Pike", 23,65,6.3);
       new CreateLocation("Seatac", 3,24,1.2);
       new CreateLocation("Seattle Center", 11,38,3.7);
       new CreateLocation("Capital Hill", 20,38,2.3);
       new CreateLocation("Alki", 2,16,4.6);

      }
      createAll()
      console.log(alLocal)
      function renderSales(store){
      console.log('inside render', store.name)    
      var table = document.getElementById('sales')
      console.log(table) 
      var trEl = document.createElement('tr')
      var tdEl = document.createElement('td')
      var name = tdEl
      name.textContent = store.name
      trEl.appendChild (tdEl)
      table.appendChild(trEl)
      for(var i =0; i< store.randCustHour.length;i++){
      tdEl.textContent = store.randCustHour[i]
      trEl.appendChild (tdEl)
      }
      tdEl.textContent = store.sales 
      trEl.appendChild (tdEl)
      console.log(trEl)
      table.appendChild(trEl)
      }
      function renderAll(arr){
          for(var i =0; i< arr.length ;i++){
              renderSales(arr[i])
          }
      }
      renderAll(alLocal)
// var firstPike = {
//     minCustomer: 23,
//     maxCustomer: 65,
//     averCokPerCus: 6.3,

//     randCustHour: [],
//  random: function(){
//    for(var i = 0; i < hours.length; i++) {
//      let ran = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer
//      this.randCustHour.push(Math.floor(ran * this.averCokPerCus))
//      console.log(this.randCustHour)
//    }
//  },
//  renderSales: function(){
//      this.random()
//      var ulEl = document.getElementById('fp');
//      for(var i = 0; i < this.randCustHour.length;i++){
//          var liEl = document.createElement('li');
//          liEl.textContent = hours[i] + ' sales of ' + this.randCustHour[i] + ' cookies ';
//          ulEl.appendChild(liEl);

//      }
//  }
       
// }

// var seaTac = {
//     minCustomer: 3,
//     maxCustomer: 24,
//     averCokPerCus: 1.2,
//     randCustHour: [],
//     random: function(){
//       for(var i = 0; i < hours.length; i++) {
//         let ran = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer
//         this.randCustHour.push(Math.floor(ran * this.averCokPerCus))
//         console.log(this.randCustHour)
//       }
//     },
//     renderSales: function(){
//         this.random()
//         var ulEl = document.getElementById('sea');
//         for(var i = 0; i < this.randCustHour.length;i++){
//             var liEl = document.createElement('li');
//             liEl.textContent = hours[i] + ' sales of ' + this.randCustHour[i] + ' cookies ';
//             ulEl.appendChild(liEl)
   
//         }
//     }
// }
// var seaCent = {
//     minCustomer: 11,
//     maxCustomer: 38,
//     averCokPerCus: 3.7,
//     randCustHour: [],
//     random: function(){
//       for(var i = 0; i < hours.length; i++) {
//         let ran = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer
//         this.randCustHour.push(Math.floor(ran * this.averCokPerCus))
//         console.log(this.randCustHour)
//       }
//     },
//     renderSales: function(){
//         this.random()
//         var ulEl = document.getElementById('sc');
//         for(var i = 0; i < this.randCustHour.length;i++){
//             var liEl = document.createElement('li');
//             liEl.textContent = hours[i] + ' sales of ' + this.randCustHour[i] + ' cookies ';
//             ulEl.appendChild(liEl)
   
//         }
//     }
// }
// var capHill = {
//     minCustomer: 20,
//     maxCustomer: 38,
//     averCokPerCus: 2.3,
//     randCustHour: [],
//     random: function(){
//       for(var i = 0; i < hours.length; i++) {
//         let ran = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer
//         this.randCustHour.push(Math.floor(ran * this.averCokPerCus))
//         console.log(this.randCustHour)
//       }
//     },
//     renderSales: function(){
//         this.random()
//         console.log('customer', this.randCustHour)
//         var ulEl = document.getElementById('ch');
//         for(var i = 0; i < this.randCustHour.length;i++){
//             var liEl = document.createElement('li');
//             liEl.textContent = hours[i] + ' sales of ' + this.randCustHour[i] + ' cookies ';
//             ulEl.appendChild(liEl)
   
//         }
//     }
// }
// var alki = {
//     minCustomer: 2,
//     maxCustomer: 16,
//     averCokPerCus: 4.6,
//     randCustHour: [],
//     random: function(){
//       for(var i = 0; i < hours.length; i++) {
//         let ran = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer
//         this.randCustHour.push(Math.floor(ran * this.averCokPerCus))
//         console.log(this.randCustHour)
//       }
//     },
//     renderSales: function(){
//         this.random()
//         var ulEl = document.getElementById('al');
//         for(var i = 0; i < this.randCustHour.length;i++){
//             var liEl = document.createElement('li')
//             liEl.textContent = hours[i] + ' sales of ' + this.randCustHour[i] + ' cookies ';
//             ulEl.appendChild(liEl)
   
//         }
//     }
// }

// firstPike.renderSales()
// seaTac.renderSales()
// seaCent.renderSales()
// capHill.renderSales()
// alki.renderSales()

