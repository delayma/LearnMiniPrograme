// pages/home/home.js
const app = getApp()
console.log(app.globalData1.name)
Page({
  data: {
    name: "delaywu",
    students: [{
        id: 1001,
        name: 'delaywu',
        age: 23
      },
      {
        id: 1002,
        name: 'delaywu',
        age: 23
      },
      {
        id: 1003,
        name: 'delaywu',
        age: 23
      },
      {
        id: 1004,
        name: 'delaywu',
        age: 23
      }
    ],
    counter: 0
  },
  handleBtnClick() {
    this.setData({
      counter: this.data.counter + 1
    });
  },
  onLoad: function () {
   
  }
})