export default {
  title: "常山北明",
  px: "changshanbeiming",
  currentPrice: 10.27,
  step: 0.01,
  currentNum: null,
  actualPrice: null,
  remainPrice: null,
  nextDayPercent: null,
  allPercent: [],
  detail: [
    {
      time: "3月22日",
      buyAndSale: [
        {
          buyPrice: 10.29, // 买入价
          buyNum: 1000 // 买入数量
        }
      ]
    },
    {
      time: "3月23日",
      buyAndSale: [
        {
          buyPrice: 10.16, // 买入价
          buyNum: -1000 // 买入数量
        },
        {
          buyPrice: 10,
          buyNum: 1000
        }
      ]
    },
    {
      time: "3月24日",
      buyAndSale: [
        {
          buyPrice: 9.9, // 买入价
          buyNum: -1000 // 买入数量
        },
        {
          buyPrice: 9.81, // 买入价
          buyNum: 1000 // 买入数量
        }
      ]
    },
    {
      time: "3月25日",
      buyAndSale: [
        {
          buyPrice: 10.26, // 买入价
          buyNum: -1000 // 买入数量
        },
        {
          buyPrice: 10.11, // 买入价
          buyNum: 1000 // 买入数量
        }
      ]
    }
  ]
};
