'use strict'

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var firstPike = {
    minCustomer: 23,
    maxCustomer: 65,
    averCokPerCus: 6.3,

    randCustHour: [],
 random: function(){
   for(var i = 0; i < hours.length; i++) {
     let ran = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer
     this.randCustHour.push(Math.floor(ran * this.averCokPerCus))
     console.log(this.randCustHour)
   }
 },
 renderSales: function(){
     this.random()
     var ulEl = document.getElementById('fp')
     for(var i = 0; i < this.randCustHour.length;i++){
         var liEl = document.createElement('li')
         liEl.textContent = hours[i] + ' sales of ' + this.randCustHour[i] + ' cookies ';
         ulEl.appendChild(liEl)

     }
 }
       
}

var seaTac = {
    minCustomer: 3,
    maxCustomer: 24,
    averCokPerCus: 1.2,
    randCustHour: [],
    random: function(){
      for(var i = 0; i < hours.length; i++) {
        let ran = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer
        this.randCustHour.push(Math.floor(ran * this.averCokPerCus))
        console.log(this.randCustHour)
      }
    },
    renderSales: function(){
        this.random()
        var ulEl = document.getElementById('sea')
        for(var i = 0; i < this.randCustHour.length;i++){
            var liEl = document.createElement('li')
            liEl.textContent = hours[i] + ' sales of ' + this.randCustHour[i] + ' cookies ';
            ulEl.appendChild(liEl)
   
        }
    }
}
var seaCent = {
    minCustomer: 11,
    maxCustomer: 38,
    averCokPerCus: 3.7,
    randCustHour: [],
    random: function(){
      for(var i = 0; i < hours.length; i++) {
        let ran = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer
        this.randCustHour.push(Math.floor(ran * this.averCokPerCus))
        console.log(this.randCustHour)
      }
    },
    renderSales: function(){
        this.random()
        var ulEl = document.getElementById('sc')
        for(var i = 0; i < this.randCustHour.length;i++){
            var liEl = document.createElement('li')
            liEl.textContent = hours[i] + ' sales of ' + this.randCustHour[i] + ' cookies ';
            ulEl.appendChild(liEl)
   
        }
    }
}
var capHill = {
    minCustomer: 20,
    maxCustomer: 38,
    averCokPerCus: 2.3,
    randCustHour: [],
    random: function(){
      for(var i = 0; i < hours.length; i++) {
        let ran = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer
        this.randCustHour.push(Math.floor(ran * this.averCokPerCus))
        console.log(this.randCustHour)
      }
    },
    renderSales: function(){
        this.random()
        console.log('customer', this.randCustHour)
        var ulEl = document.getElementById('ch')
        for(var i = 0; i < this.randCustHour.length;i++){
            var liEl = document.createElement('li')
            liEl.textContent = hours[i] + ' sales of ' + this.randCustHour[i] + ' cookies ';
            ulEl.appendChild(liEl)
   
        }
    }
}
var alki = {
    minCustomer: 2,
    maxCustomer: 16,
    averCokPerCus: 4.6,
    randCustHour: [],
    random: function(){
      for(var i = 0; i < hours.length; i++) {
        let ran = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer
        this.randCustHour.push(Math.floor(ran * this.averCokPerCus))
        console.log(this.randCustHour)
      }
    },
    renderSales: function(){
        this.random()
        var ulEl = document.getElementById('al')
        for(var i = 0; i < this.randCustHour.length;i++){
            var liEl = document.createElement('li')
            liEl.textContent = hours[i] + ' sales of ' + this.randCustHour[i] + ' cookies ';
            ulEl.appendChild(liEl)
   
        }
    }
}

firstPike.renderSales()
seaTac.renderSales()
seaCent.renderSales()
capHill.renderSales()
alki.renderSales()

