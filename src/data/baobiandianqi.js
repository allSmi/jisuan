export default {
    title: "保变电气",
    px: "baobiandianqi",
    currentPrice: 5.86,
    step: 0.01,
    currentNum: null,
    actualPrice: null,
    remainPrice: null,
    nextDayPercent: null,
    allPercent: [],
    detail: [{
            time: "3月19日",
            buyAndSale: [{
                buyPrice: 7.12, // 买入价
                buyNum: 1500 // 买入数量
            }]
        },
        {
            time: "3月22日",
            buyAndSale: [{
                    buyPrice: 6.24, // 买入价
                    buyNum: 1500 // 买入数量
                },
                {
                    buyPrice: 6.34, // 买入价
                    buyNum: -1500 // 买入数量
                }
            ]
        },
        {
            time: "3月23日",
            buyAndSale: [{
                buyPrice: 6, // 买入价
                buyNum: 3200 // 买入数量
            }]
        },
        {
            time: "3月24日",
            buyAndSale: [{
                    buyPrice: 5.41, // 买入价
                    buyNum: 4000 // 买入数量
                },
                {
                    buyPrice: 5.59, // 买入价
                    buyNum: -2000 // 买入数量
                },
                {
                    buyPrice: 5.54, // 买入价
                    buyNum: -2000 // 买入数量
                }
            ]
        },
        {
            time: "3月25日",
            buyAndSale: [{
                    buyPrice: 5.79, // 买入价
                    buyNum: -2300 // 买入数量
                },
                {
                    buyPrice: 5.6, // 买入价
                    buyNum: 2300 // 买入数量
                }
            ]
        },
        {
            time: "3月26日",
            buyAndSale: [{
                    buyPrice: 5.61, // 买入价
                    buyNum: -2000 // 买入数量
                },
                {
                    buyPrice: 5.76, // 买入价
                    buyNum: 2000 // 买入数量
                }
            ]
        }
    ]
};
