export default {
  title: "保变电气",
  currentPrice: 6,
  step: 0.01,
  currentNum: null,
  actualPrice: null,
  remainPrice: null,
  nextDayPercent: null,
  allPercent: [],
  detail: [
    {
      time: "3月22日",
      end: 40.83, // 收盘价
      buyAndSale: [
        {
          buyPrice: 6, // 买入价
          buyNum: 3200 // 买入数量
        },
        {
          buyPrice: 6.24, // 买入价
          buyNum: 1500 // 买入数量
        }
      ]
    },
    {
      time: "3月23日",
      end: 40.83, // 收盘价
      buyAndSale: [
        {
          buyPrice: 6, // 买入价
          buyNum: 3200 // 买入数量
        }
      ]
    }
  ]
};
