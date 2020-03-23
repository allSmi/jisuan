export default {
    title: "常山北明",
    currentPrice: 9.59,
    step: 0.01,
    currentNum: null,
    actualPrice: null,
    remainPrice: null,
    nextDayPercent: null,
    allPercent: [],
    detail: [{
            time: "3月22日",
            end: 10.29, // 收盘价
            buyAndSale: [{
                buyPrice: 10.29, // 买入价
                buyNum: 1000 // 买入数量
            }]
        },
        {
            time: "3月25日",
            end: 9.59, // 收盘价
            buyAndSale: [{
                    buyPrice: 10.16, // 买入价
                    buyNum: -1000 // 买入数量
                },
                {
                    buyPrice: 10,
                    buyNum: 1000
                }
            ]
        }
    ]
}
