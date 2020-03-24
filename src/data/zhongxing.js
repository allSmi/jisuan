export default {
  title: "中兴通讯",
  currentPrice: 40.83,
  step: 0.1,
  currentNum: null,
  actualPrice: null,
  remainPrice: null,
  nextDayPercent: null,
  allPercent: [],
  detail: [
    {
      time: "3月23日",
      end: 40.83, // 收盘价
      buyAndSale: [
        {
          buyPrice: 40.46, // 买入价
          buyNum: 200 // 买入数量
        }
      ]
    },
    {
      time: "3月24日",
      end: 40.83, // 收盘价
      buyAndSale: [
        {
          buyPrice: 42.09, // 买入价
          buyNum: -200 // 买入数量
        },
        {
          buyPrice: 41.61, // 买入价
          buyNum: 300 // 买入数量
        }
      ]
    }
  ]
};
