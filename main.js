var app = new Vue({
    el: '#app',
    data: {
        name: '郑飞',
        sex:1,
        birthday:'1983-09-25',
        native:'湖北黄冈',
        graduate:'武汉科技大学',
        email:'zhengfei0925@qq.com',
        tel:'15210010904',
        skills:[
        	'熟练使用.NET及.NetCore进行项目开发,有多年的B/S,C/S项目经验',
        	'熟练使用Div+CSS、jQuery、javascript实现前端功能',
        	'熟练使用SQLServer、Oracl,MySQL,Mangodb等常用数据库',
        	'熟悉ES6规范及Node、Vue、React等前端框架，具备良好的学习能力',
        	'对微服务、docker、微信小程序有一定了解',
        	'能够快速学习新技术并应用到实际项目。'
        ],
        experiences:[
        {
        	company:'君安信科技有限公司',
        	times:'2014年09月-2019年07月',
        	industry:'互联网金融',
        	city:'北京',
        	job:'.NET高级开发工程师',
        	responsibility:[
        	'参与平台网站3次改版升级的设计开发,包含前后端',
        	'完成平台主要功能包括用户注册、用户中心相关页面及用户数据的汇总图表展示',
        	'参与数据库层面的业务逻辑开发',
        	'负责整合优化前端页面及脚本，提升用户体验'
        	]	
        },{
        	company:'北京雷动信息科技有限公司',
        	times:'2013年08月-2014年09月',
        	industry:'教育',
        	city:'北京',
        	job:'.NET高级开发工程师',
        	responsibility:[
        		'参与销售系统软件升级开发',
				'独立完成个人中心页面开发',
				'完成产品中心各功能模块新版升级，功能实现及测试。',
				'参与整个系统的测试以及部署发布',
				'负责整合优化代码'
        	]
        },{
        	company:'北京麦格天宝科技发展集团有限公司',
        	times:'2011年11月-2013年08月',
        	industry:'测绘',
        	city:'北京',
        	job:'.NET中级开发工程师',
        	responsibility:[
        	'参与《天农2代DTU》页面开发、历史轨迹回放等(GoogleEarth版)',
			'负责修改和优化《天农2代DTU》，GoogleMap和百度地图支持；',
			'参与《四川电力巡检》功能模块巡检任务、线路分布、杆塔分布等；',
			'负责设计《电力杆塔监测》主要监测页面;',
			'《农业信息化平台》门户网站的搭建和农机管理模块前端页面设计与开发;',
			'其中包括36个页面，采用EXTJS + Highchart等完成图表展示效果.'
        	]	
        },{
        	company:'北京博阳信息工程研究所',
        	times:'2010年02月-2011年11月',
        	industry:'档案管理',
        	city:'北京',
        	job:'.NET中级开发工程师',
        	responsibility:[
        		'主要负责产品多语言化，拓展中外合资企业需求业务。',
				'根据版本升级计划，完成软件整体升级，实现界面美观，操作简易。',
				'分析后台数据和信息，抽取汉字信息，交给业务部进行翻译。',
				'完成大部分功能模块升级包括(表管理,字段管理,档案借阅,机构管理等)。'
        	]
        },{
        	company:'北京华园企程科技有限公司',
        	times:'2009年01月-2010年01月',
        	industry:'物流',
        	city:'北京',
        	job:'初级开发工程师',
        	responsibility:[
				'负责和组员讨论相关技术文档,以及数据库设计',
				'负责项目同步测试，数据库的维护，以及部分功能的修改。',
				'参与了手持程序的开发和调试，编写了整个系统的手册说明。'
        	]
        },


        ],
        projects:[{
        	name:'国标车载GPS监控系统平台',
        	tools:'Microsoft Visual Studio 2010 + MangoDB',
        	period:'6个月',
        	responsibility:[
				'参与初期原型设计和表设计',
				'负责底层国标协议解析以及测试',
				'完成前台页面轨迹回放、区域设置、报警管理等功能'
        	]

        },{
        	name:'农业信息化平台',
        	tools:'Microsoft Visual Studio 2010',
        	period:'3个月',
        	responsibility:[
				'负责完成信息平台门户网站的设计',
				'负责系统平台中农机管理前端页面的设计和开发',
				'负责气象信息页面信息的设计与开发。',
				'采用EXTJS3.4完成行车参数，报表等页面的设计开发'
        	]

        },{
        	name:'好易档案管理系统国际版',
        	tools:'Microsoft Visual Studio 2010+sqlserver2005/Oracle 10.2g',
        	period:'3个月',
        	responsibility:[
				'进行项目多语言升级',
				'对后台页面所有的汉字信息进行多语言进行处理',
				'对整个项目页面，采用新控件美化整个项目的页面'
        	]

        },{
        	name:'北京拓普康仓库管理系统',
        	tools:'Microsoft Visual Studio 2008+sqlserver2005',
        	period:'6个月',
        	responsibility:[
				'金蝶接口模块：只包含从金蝶导出数据部分；数据导入到金蝶部分功能关闭',
				'条形码标签打印模块：其中包含设备码和仪器号打印部',
				'系统日常运行模块：主要包括入出库，拣货，调拨，装箱等',
				'系统单据打印模块：主要包括：拣货单、装箱单、保险单；',
				'系统报表：日报、月报、年报表，不良品表等；',
				'手持系统：主要包括入出库，装箱、移库等。'
        	]

        }],
        assessment:'多年的工作经验积累，具备优秀的解决问题能力，具有良好的编码习惯、团队协助能力;工作积极，责任心强，热爱研究新技能。'
    },
    filters:{
    	sex:function (argument) {
    		if (!argument) return ''
    		if (argument === 1) return '男'
    		return '女'
    	}
    }

})