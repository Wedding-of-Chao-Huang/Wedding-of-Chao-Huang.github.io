import { MapPin, Clock, Bike, Car, Train, Plane, Navigation, Info } from 'lucide-react'

const scenicSpots = [
  { name: '南湖革命纪念馆', walk: '10-15分钟', bike: '5分钟', taxi: '5分钟', transit: '公交2站', note: '约900m', icon: '🏛️' },
  { name: '南湖景区', walk: '25分钟', bike: '5分钟', taxi: '5分钟', transit: '公交2站', note: '环湖景区，约1.5公里', icon: '🌊' },
  { name: '南湖天地', walk: '40分钟', bike: '9分钟', taxi: '5分钟', transit: '公交3站', note: '商业街区，约2公里', icon: '🛍️' },
  { name: '勺园', walk: '25分钟', bike: '5分钟', taxi: '8分钟', transit: '公交3-4站', note: '古典园林，约1.5公里', icon: '🏯' },
  { name: '月河历史街区', walk: '1小时', bike: '14分钟', taxi: '10分钟', transit: '公交5路/18路', note: '约4公里', icon: '🏘️' },
  { name: '嘉兴子城遗址公园', walk: '40分钟', bike: '10分钟', taxi: '10分钟', transit: '公交4-5站', note: '约2公里', icon: '🏰' },
  { name: '乌镇风景区', walk: '❌ 不推荐', bike: '❌ 不推荐', taxi: '45分钟', transit: '高铁到桐乡站+公交', note: '约34公里', icon: '🏞️' },
  { name: '濮院时尚古镇', walk: '❌ 不推荐', bike: '❌ 不推荐', taxi: '25分钟', transit: '公交/旅游专线', note: '约16公里', icon: '✨' },
  { name: '西塘古镇', walk: '❌ 不推荐', bike: '❌ 不推荐', taxi: '50分钟', transit: '高铁到嘉善南站+公交', note: '约32公里', icon: '🌉' },
]

const transportHubs = [
  { name: '嘉兴站', walk: '25-30分钟', bike: '10分钟', taxi: '8-10分钟', transit: '公交4路/22路', note: '约2.1公里，火车站', icon: '🚂' },
  { name: '嘉兴南站', walk: '❌ 不推荐', bike: '30分钟', taxi: '15-20分钟', transit: '公交93路', note: '约6.6公里，高铁站', icon: '🚄' },
  { name: '嘉兴南湖机场', walk: '❌ 不推荐', bike: '❌ 不推荐', taxi: '25分钟', transit: '无直达公交', note: '约8公里', icon: '✈️' },
  { name: '杭州萧山机场', walk: '❌ 不推荐', bike: '❌ 不推荐', taxi: '90-120分钟', transit: '高铁：嘉兴南→杭州东→机场', note: '约100公里', icon: '🛫' },
  { name: '上海虹桥机场', walk: '❌ 不推荐', bike: '❌ 不推荐', taxi: '90-120分钟', transit: '高铁：嘉兴南→虹桥站', note: '约100公里', icon: '🛬' },
]

const recommendations = [
  {
    title: '南湖景区群',
    subtitle: '南湖革命纪念馆 · 南湖景区 · 勺园',
    best: '步行/骑行',
    time: '10-30分钟（步行）/ 5分钟（骑行）',
    desc: '这三个景点都在酒店周边，步行可到达，沿途风景优美',
    color: 'from-blue-500 to-cyan-500',
    icon: '🌅'
  },
  {
    title: '市区文化景点',
    subtitle: '南湖天地 · 月河历史街区 · 子城遗址公园',
    best: '骑行或打车',
    time: '10-15分钟（骑行）/ 8-10分钟（打车）',
    desc: '距离适中，骑行可欣赏沿途风景，打车更便捷',
    color: 'from-purple-500 to-pink-500',
    icon: '🏛️'
  },
  {
    title: '水乡古镇',
    subtitle: '乌镇风景区 · 西塘古镇',
    best: '打车',
    time: '45-60分钟',
    desc: '均为著名水乡古镇，打车费用约80-100元，建议安排一天时间游玩',
    color: 'from-amber-500 to-orange-500',
    icon: '🛶'
  },
  {
    title: '濮院时尚古镇',
    subtitle: '新兴网红景点',
    best: '打车或旅游专线',
    time: '25分钟',
    desc: '时尚与古典结合，打车费用约35-50元',
    color: 'from-emerald-500 to-teal-500',
    icon: '✨'
  },
]

const transportRecommendations = [
  {
    title: '嘉兴站（普速列车）',
    options: [
      { mode: '公交', routes: '4路、22路、温泉小镇专线', time: '15-20分钟', cost: '2元' },
      { mode: '打车', routes: '直达', time: '8-10分钟', cost: '约10元' }
    ],
    icon: '🚂'
  },
  {
    title: '嘉兴南站（高铁站）',
    options: [
      { mode: '公交', routes: '93路', time: '30-40分钟', cost: '2元' },
      { mode: '打车', routes: '直达', time: '15-20分钟', cost: '约18-25元' }
    ],
    icon: '🚄'
  },
  {
    title: '杭州萧山机场',
    options: [
      { mode: '高铁', routes: '萧山机场→杭州东（地铁30分钟）→嘉兴南站（高铁25分钟）', time: '1.5-2小时', cost: '约80元' },
      { mode: '大巴', routes: '萧山机场→嘉兴汽车客运中心（直达）', time: '约2小时', cost: '约50-60元' },
      { mode: '打车', routes: '直达', time: '90-120分钟', cost: '约200-300元' }
    ],
    icon: '🛫'
  },
  {
    title: '上海虹桥机场（推荐）',
    options: [
      { mode: '高铁', routes: '嘉兴南站→虹桥站（27-35分钟）→虹桥机场（步行10分钟）', time: '1-1.5小时', cost: '约30-40元' },
      { mode: '大巴', routes: '虹桥机场→嘉兴（直达）', time: '2-2.5小时', cost: '约58元' },
      { mode: '打车', routes: '直达', time: '120-150分钟', cost: '约350-450元' }
    ],
    icon: '🛬'
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="/hero.jpg" 
          alt="嘉兴南湖" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            嘉兴博雅花园酒店
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-center opacity-90">
            出游交通指南
          </p>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">浙江省嘉兴市南湖区迎宾大道88号</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Scenic Spots Table */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Navigation className="w-8 h-8" />
              景区交通信息
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">目的地</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                    <span className="flex items-center justify-center gap-1">
                      🚶 步行
                    </span>
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                    <span className="flex items-center justify-center gap-1">
                      🚴 骑行
                    </span>
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                    <span className="flex items-center justify-center gap-1">
                      🚗 打车
                    </span>
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                    <span className="flex items-center justify-center gap-1">
                      🚌 公交/高铁
                    </span>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">备注</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scenicSpots.map((spot, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{spot.icon}</span>
                        <span className="font-semibold text-slate-800">{spot.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        spot.walk.includes('❌') 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {spot.walk}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        spot.bike.includes('❌') 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {spot.bike}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700">
                        {spot.taxi}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-sm text-slate-600">{spot.transit}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{spot.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Transport Hubs Table */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Train className="w-8 h-8" />
              交通枢纽交通信息
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">目的地</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                    <span className="flex items-center justify-center gap-1">
                      🚶 步行
                    </span>
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                    <span className="flex items-center justify-center gap-1">
                      🚴 骑行
                    </span>
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                    <span className="flex items-center justify-center gap-1">
                      🚗 打车
                    </span>
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                    <span className="flex items-center justify-center gap-1">
                      🚌 公交/高铁
                    </span>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">备注</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transportHubs.map((hub, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{hub.icon}</span>
                        <span className="font-semibold text-slate-800">{hub.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        hub.walk.includes('❌') 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {hub.walk}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        hub.bike.includes('❌') 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {hub.bike}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700">
                        {hub.taxi}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-sm text-slate-600">{hub.transit}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{hub.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendations Section */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Info className="w-8 h-8 text-blue-600" />
            景区推荐方案
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${rec.color} px-6 py-4`}>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-2xl">{rec.icon}</span>
                    {rec.title}
                  </h3>
                  <p className="text-white/90 text-sm mt-1">{rec.subtitle}</p>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-semibold whitespace-nowrap">✓ 最佳方式:</span>
                    <span className="text-slate-700">{rec.best}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{rec.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{rec.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transport Recommendations */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Plane className="w-8 h-8 text-purple-600" />
            交通枢纽推荐方案
          </h2>
          <div className="space-y-6">
            {transportRecommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-2xl">{rec.icon}</span>
                    {rec.title}
                  </h3>
                </div>
                <div className="p-6 grid md:grid-cols-3 gap-4">
                  {rec.options.map((opt, optIndex) => (
                    <div key={optIndex} className="bg-slate-50 rounded-lg p-4 space-y-2">
                      <div className="font-semibold text-slate-800 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {opt.mode}
                      </div>
                      <div className="text-sm text-slate-600">{opt.routes}</div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-blue-600 font-medium">⏱ {opt.time}</span>
                        <span className="text-green-600 font-medium">💰 {opt.cost}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
          <h3 className="text-2xl font-bold text-amber-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">💡</span>
            实用提示
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">1</span>
              <p className="text-slate-700"><strong>公交支付:</strong> 支持支付宝、微信、公交卡</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">2</span>
              <p className="text-slate-700"><strong>打车软件:</strong> 滴滴出行、高德地图、百度地图</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">3</span>
              <p className="text-slate-700"><strong>共享单车:</strong> 美团、哈啰、青桔均可使用</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">4</span>
              <p className="text-slate-700"><strong>高铁购票:</strong> 12306 APP、携程、去哪儿</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">5</span>
              <p className="text-slate-700"><strong>最佳出行时间:</strong> 避开早晚高峰（7:30-9:00, 17:00-19:00）</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">6</span>
              <p className="text-slate-700"><strong>酒店班车:</strong> 部分时段酒店提供市区接送服务，可咨询前台</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm py-8">
          <p>数据更新时间: 2026年3月</p>
          <p className="mt-2">以上时间为估算值，实际时间可能因交通状况、天气等因素有所变化</p>
        </footer>
      </div>
    </div>
  )
}
