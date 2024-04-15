/**
 * @Description: 个人画像数据
 */
export const infosData = [
  {
    name: '张三',
    certno: '321111222233331234',
    gend: '男',
    mobile: '13112345678',
    naty: '汉',
    education: '本科',
    empName: '电科'
  },
  {
    name: '张三',
    certno: '321111222233331000',
    gend: '男',
    mobile: '13112345678',
    naty: '汉',
    education: '本科',
    empName: '电科'
  },
  {
    name: '张三',
    certno: '321111222233331001',
    gend: '男',
    mobile: '13112345678',
    naty: '汉',
    education: '本科',
    empName: '电科'
  },
  {
    name: '张三',
    certno: '321111222233331002',
    gend: '男',
    mobile: '13112345678',
    naty: '汉',
    education: '本科',
    empName: '电科'
  },
  {
    name: '张三',
    certno: '321111222233331003',
    gend: '男',
    mobile: '13112345678',
    naty: '汉',
    education: '本科',
    empName: '电科'
  },
  {
    name: '张三',
    certno: '321111222233331004',
    gend: '男',
    mobile: '13112345678',
    naty: '汉',
    education: '本科',
    empName: '电科'
  },
  {
    name: '张三',
    certno: '321111222233331005',
    gend: '男',
    mobile: '13112345678',
    naty: '汉',
    education: '本科',
    empName: '电科'
  },
  {
    name: '张三',
    certno: '321111222233331006',
    gend: '男',
    mobile: '13112345678',
    naty: '汉',
    education: '本科',
    empName: '电科'
  },
  {
    name: '张三',
    certno: '321111222233331007',
    gend: '男',
    mobile: '13112345678',
    naty: '汉',
    education: '本科',
    empName: '电科'
  },
]

export const typeEnum = [
  '重点关注',
  '先锋模范',
  '就业困难',
  '资金异常'
]

export const chartsEnum = [
  '全景画像',
  '关系图谱',
  '资金溯源',
  '稳控线索',
  '技能成长',
  '就业去向',
  '智享服务',
  '拥军足迹'
]
export const footerMenuEnum = [
  '单维',
  '交叉',
  '添加',
  '减少',
  '保存'
]
export const treeChartsData = [{
  'name': '重点关注',
  'children': [
    { name: '自身', children: [
      { name: '性别: 男', value: 0 },
      { name: '精神状态：已鉴定', value: 1,
        label: { color: '#4096ff'},
        itemStyle: { color: '#4096ff'}
      }, // 已鉴定1 /未鉴定 #faad14 #c62828
      { name: '心理疾病：轻度', value: 1  }, // 轻度1 /重度3 /无0
      { name: '重大疾病：无', value: 0  }, // 有无
      { name: '犯罪：无', value: 0  }, // 执刑3 前科3 5年前科1 无0
      { name: '赌博：无', value: 0  }, // 严重(高利贷/抵押)3 有改过1 无0
      { name: '吸毒：无', value: 0  }, // 有3/前科0/无0
      { name: '暴力：无', value: 0 }, // 有3/前科0/无0
      { name: '邪教：无', value: 0  }, // 有3/前科1/无0
      { name: '网瘾：轻度(2小时以上)', value: 0  }, // 无0/轻度(2小时以上)0/重度(不受控)3
      { name: '有正常收入：是', value: 0  }, // 是0/否1
      { name: '酗酒(经常酒后失控)：是', value: 1  }, // 是/否
      { name: '嫖娼：是', value: 1  }, // 是/否
      { name: '保险：无', value: 1  }, // 社保、农保、商业保险、无
      { name: '大病救助：无', value: 0  }, // 有/无
      { name: '残疾：无证', value: 0  }, // 有证三级1 /无证/无
      { name: '家庭关系：和谐', value: 0  }, // 和谐0/不和谐1
    ] },
    { name: '信访', children: [
      { name: '次数（三月累加）：1', value: 1 }, // 0/1/超过1 3
      { name: '等级：一般', value: 0  }, // 一般0 /危机1 /激进3
      { name: '诉求次数（三月累加）非信访诉求：0', value: 0  } // 0 0; 3 1; 超过3 3
    ] },
    { name: '经济', children: [
      { name: '三低家庭：低保', value: 3 }, // 低保3/低保边缘户3/低收入3/否 0
      { name: '负债情况：无', value: 0 }, // 失信人员1、无
      { name: '家庭变故：无', value: 0 } // 有1 /无 0
    ] },
    { name: '环境', children: [
      { name: '重大灾害：无', value: 0 }, // 水气污染/台风/地震
      { name: '重大事故：无', value: 0 }, // 爆炸/车祸/火灾 3
      { name: '重大舆情：相关舆情', value: 3 }, // 相关舆情 3
      { name: '住房条件：无', value: 0 } // 危房标准 3
    ] }
  ]
}]

export const graphChartsDataJson = [{
  name: '张三',
  category: '张三',
  children: [
    {
      name: '1.家庭信息',
      children: [
        {
          name: '1.婚姻状态：已婚', children: [
            { name: '张珊', category: '张珊', children: [{ name: '1.1民族：汉' }, { name: '1.1工作单位：****' }, { name: '1.1政治面貌：群众' }] }
          ]
        }
      ]
    },
    {
      name: '1.诉求经历',
      children: [
        {
          name: '1.事件1', children: [
            { name: '1.事件类型：未填写' },
            { name: '1.时间：无' },
            { name: '1.事件状态：无' },
            { name: '1.事件名称：无' }
          ]
        }
      ]
    },
    {
      name: '1.个人信息', children: [
        { name: '1.手机号：13112341234' },
        { name: '1.出生年月：1999-01-01' },
        { name: '1.身份证：321111222233331234' },
        { name: '1.民族：汉' },
        { name: '1.户籍地：****' },
        { name: '1.居住地址：****' },
        { name: '1.政治面貌：群众' }
      ]
    },
    { name: '1.创业信息' },
    {
      name: '1.安置信息', children: [
        { name: '1.安置单位：无' },
        { name: '1.安置方式：无' },
        { name: '1.安置职位：无' },
        { name: '1.随军方式：无' },
        { name: '1.安置对象类型：无' }
      ]
    },
    {
      name: '1.教育信息', children: [
        { name: '1.毕业小学：***小学' },
        { name: '1.毕业中学：中学' },
        { name: '1.毕业高校：***大学' }
      ]
    },
    {
      name: '1.就业信息', children: [
        { name: '1.工作单位：****' }
      ]
    },
    { name: '1.个人标签' },
    { name: '1.部队信息', children: [
      { name: '1.****司令部' , children: [
        { name: '李四', category: '李四', children: [
          {
            name: '2.家庭信息',
            children: [
              {
                name: '2.婚姻状态：已婚', children: [
                  { name: '李丝', category: '李丝', children: [{ name: '3.民族：汉' }, { name: '3.工作单位：****' }, { name: '3.政治面貌：群众' }] }
                ]
              }
            ]
          },
          {
            name: '2.诉求经历',
            children: [
              {
                name: '2.事件1', children: [
                  { name: '2.事件类型：未填写' },
                  { name: '2.时间：无' },
                  { name: '2.事件状态：无' },
                  { name: '2.事件名称：无' }
                ]
              }
            ]
          },
          {
            name: '2.个人信息', children: [
              { name: '2.手机号：13112341234' },
              { name: '2.出生年月：1999-01-01' },
              { name: '2.身份证：321111222233331234' },
              { name: '2.民族：汉' },
              { name: '2.户籍地：****' },
              { name: '2.居住地址：****' },
              { name: '2.政治面貌：群众' }
            ]
          },
          { name: '2.创业信息' },
          {
            name: '2.安置信息', children: [
              { name: '2.安置单位：无' },
              { name: '2.安置方式：无' },
              { name: '2.安置职位：无' },
              { name: '2.随军方式：无' },
              { name: '2.安置对象类型：无' }
            ]
          },
          {
            name: '2.教育信息', children: [
              { name: '2.毕业小学：***小学' },
              { name: '2.毕业中学：中学' },
              { name: '2.毕业高校：***大学' }
            ]
          },
          {
            name: '2.就业信息', children: [
              { name: '2.工作单位：****' }
            ]
          },
          { name: '2.个人标签' },
          { name: '2.优抚信息' },
        ]}
      ]}
    ]},
    { name: '1.优抚信息' },
  ]
}]

// 关系图谱
export const graphChartsData = [
  {
    name: '张三',
    x: 0,
    y: 0,
    value: 3,
    category: 0,
    symbol: 'image://images/avatar.png',
    symbolSize: 50
  },
  {
    name: '家庭信息',
    value: 3,
    category: 0,
    symbolSize: 28
  },
  {
    name: '优抚信息',
    value: 3,
    category: 0,
    symbolSize: 14
  },
  {
    name: '诉求经历',
    value: 3,
    category: 0,
    symbolSize: 28
  },
  {
    name: '部队信息',
    value: 3,
    category: 0,
    symbolSize: 28
  },
  {
    name: '个人标签',
    value: 0,
    category: 0,
    symbolSize: 14
  },
  {
    name: '就业信息',
    value: 3,
    category: 0,
    symbolSize: 28
  },
  {
    name: '创业信息',
    value: 3,
    category: 0,
    symbolSize: 14
  },
  {
    name: '安置信息',
    value: 3,
    category: 0,
    symbolSize: 28
  },
  {
    name: '教育信息',
    value: 3,
    category: 0,
    symbolSize: 28
  },
  {
    name: '个人信息',
    value: 3,
    category: 0,
    symbolSize: 28
  },
]

export const graphChartsLinks = [
  {
    source: '张三',
    target: '家庭信息'
  },
  {
    source: '张三',
    target: '优抚信息'
  },
  {
    source: '张三',
    target: '诉求经历'
  },
  {
    source: '张三',
    target: '教育信息'
  },
  {
    source: '张三',
    target: '安置信息'
  },
  {
    source: '张三',
    target: '个人信息'
  },
  {
    source: '张三',
    target: '创业信息'
  },
  {
    source: '张三',
    target: '就业信息'
  },
  {
    source: '张三',
    target: '个人标签'
  },
  {
    source: '张三',
    target: '部队信息'
  },
  {
    source: '张三',
    target: '诉求经历'
  },
]

export const wordcloudData = [
  {
    value: '50',          // 词典大小配置
    name: '资金异常'     // 词典名称配置
  },
  { value: '30', name: '重点关注'},
  { value: '29', name: 'OPPO' },
  { value: '28', name: 'HONOR' },
  { value: '27', name: 'iPhone 12 pro max' },
  { value: '26', name: 'iPhone 12' },
  { value: '25', name: '先锋模范' },
  { value: '25', name: 'HUAWEI MATE 1212' },
  { value: '25', name: 'HUAWEI MATE 222' },
  { value: '25', name: 'HUAWEI MATE 333' },
  { value: '25', name: 'HUAWEI MATE 14440' },
  { value: '25', name: 'HUAWEI MATE 2210' },
  { value: '25', name: '就业困难' },
  { value: '24', name: 'ONEPLUS' },
  { value: '23', name: 'Lenova T470' },
  { value: '22', name: 'MacBook Air ' },
  { value: '21', name: 'SAMSUNG' },
  { value: '20', name: 'iPad mini' },
  { value: '16', name: 'BLACKBERRY' },
  { value: '14', name: 'OPPO222' },
  { value: '13', name: '233gda' },
  { value: '13', name: '122323123' },
  { value: '13', name: 'SAMSUNG2211' },
  { value: '13', name: '323222' },
  { value: '13', name: '1245666' },
  { value: '13', name: '111111' },
  { value: '13', name: 'dfadfadf' },
  { value: '13', name: 'ssssss' },
  { value: '13', name: 'eeeeeee' },
  { value: '13', name: 'dfadfadee' },
  { value: '13', name: 'daddd3w' },
  { value: '13', name: 'ddddgg' },
  { value: '13', name: 'SAMSUNG2adaad211' },
  { value: '12', name: '36122' },
  { value: '12', name: '111' },
  { value: '12', name: '2222' },
  { value: '12', name: '36133322' },
  { value: '12', name: '44444' },
  { value: '12', name: '3622123122' },
  { value: '12', name: '3622123122' },
  { value: '10', name: 'Lenova112' }
]


export const maskImageBase64 = 'data:image/png;base64,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'