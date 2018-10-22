export default [
    {
        question: '投资标的',
        showTitle:true,
        answers: [
            {
                title: '基金',
                order: 0,
                next: 2
            },
            {
                title: '股票',
                next: 1
            }
        ]
    },
    {
        question: '股票',
        answers: [{
            title: '上证50',
            order: 1,
            next: 2
        }, {
            title: '中证500',
            order: 2,
            next: 2
        }, {
            title: '沪深300',
            order: 3,
            next: 2
        }, {
            title: '创业板',
            order: 4,
            next: 2
        }, {
            title: '除ST的其他股票',
            order: 5,
            next: 2
        }]
    },
    {
        question: 'Alpha预测模型',
        showTitle:true,
        answers: [
            {
                title: '线性回归',
                order: 0,
                next: 4
            },
            {
                title: '神经网络',
                order: 1,
                next: 4

            },
            {
                title: '深度学习',
                next: 3
            }
        ]
    },
    {
        question: '深度学习',
        answers: [
            {
                title: 'LTSM',
                order: 2,
                next: 4
            },
            {
                title: 'DNN',
                order: 3,
                next: 4

            }
        ]
    },
    {
        question: '风险模型',
        showTitle:true,
        last:1,
        answers: [
            {
                title: '等权组合',
                order: 0

            },
            {
                title: '沪深300行业中性',
                order: 1

            },
            {
                title: '中证500行业中性',
                order: 2

            },
            {
                title: '风险平价',
                order: 3

            }

        ]
    }
];
