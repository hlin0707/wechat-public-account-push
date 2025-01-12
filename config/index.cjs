/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxf868c48919c3fd21',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd6a1dfa62937e8e9562c935f5459263c',

  PROVINCE: '',
  CITY: '',

  USERS: [
    {
      // 想要发送的人的名字
      name: '绵绵',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ooskV6VHEJCGVj-01DVysWeJm6CU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '4tKVjrzJ4narIG5kBZ2u5C5zvn_-a95FLFs0h6HsyTw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '猪猪', year: '1993', date: '07-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '绵绵', year: '1998', date: '05-04',
        },
        {
          type: '*节日', name: '七夕', year: '2023', date: '07-07',
        },
        {
          type: '节日', name: '情人节', year: '2024', date: '02-14',
        },
        {
          type: '节日', name: '我爱你', year: '2024', date: '05-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'meet_day', date: '2023-04-19' },
        // 牵手
        { keyword: 'hand_day', date: '2023-05-28' },
        // 相恋
        { keyword: 'love_day', date: '2023-06-11' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '猪猪',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ooskV6bHjk_0dcR4LD8jytHeDsU4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '4tKVjrzJ4narIG5kBZ2u5C5zvn_-a95FLFs0h6HsyTw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '猪猪', year: '1993', date: '07-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '绵绵', year: '1998', date: '05-04',
        },
        {
          type: '*节日', name: '七夕', year: '2023', date: '07-07',
        },
        {
          type: '节日', name: '情人节', year: '2024', date: '02-14',
        },
        {
          type: '节日', name: '我爱你', year: '2024', date: '05-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'meet_day', date: '2023-04-19' },
        // 牵手
        { keyword: 'hand_day', date: '2023-05-28' },
        // 相恋
        { keyword: 'love_day', date: '2023-06-11' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  // CALLBACK_TEMPLATE_ID: 'TB-Nk77t746Q53etXxu6_qywAWcsm1j7V7dZtwxz-iw',

  // CALLBACK_USERS: [
  //   {
  //     name: '自己',
  //     // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
  //     id: 'ooskV6bHjk_0dcR4LD8jytHeDsU4',
  //   }
  // ],

}

module.exports = USER_CONFIG

