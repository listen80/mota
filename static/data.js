var data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d = 
{
	"main": {
		"floorIds": [
			"MT0",
			"MT1",
			"MT2",
			"MT3",
			"MT4",
			"MT5",
			"MT6",
			"MT7",
			"MT8",
			"MT9",
			"MT10",
			"MT11",
			"MT12",
			"MT13",
			"MT14",
			"MT15",
			"MT16",
			"MT17",
			"MT18",
			"MT19",
			"MT20",
			"MT21",
			"MT22",
			"MT23w",
			"MT23e",
			"MT23s",
			"MT_1"
		],
		"images": [
			"winskin.png"
		],
		"tilesets": [],
		"animates": [],
		"bgms": [
			"title.wav",
			"startText.mp3",
			"prologue.mp3",
			"area1.mp3",
			"area2.mp3",
			"area3.mp3"
		],
		"sounds": [
			"attack.mp3",
			"floor.mp3",
			"door.mp3",
			"item.mp3",
			"dialogue.mp3",
			"unlockCtrl.mp3",
			"step.mp3",
			"constants.mp3",
			"keySold.mp3",
			"keyUnsold.mp3",
			"redWizard.mp3",
			"brownWizard.mp3",
			"whiteKing.mp3",
			"blackMagician.mp3",
			"load.mp3"
		],
		"nameMap": {},
		"startBackground": "title.png",
		"startLogoStyle": "display:none",
		"levelChoose": [
			[
				"",
				""
			]
		],
		"equipName": [],
		"startBgm": "title.wav",
		"statusLeftBackground": "url(project/images/ground.png) repeat",
		"statusTopBackground": "url(project/images/ground.png) repeat",
		"toolsBackground": "url(project/images/ground.png) repeat",
		"borderColor": "white",
		"statusBarColor": "white",
		"hardLabelColor": "white",
		"floorChangingBackground": "black",
		"floorChangingTextColor": "white",
		"font": "Verdana",
		"startButtonsStyle": "background-color: #000000; opacity: 1; color: #FFFFFF; border: #000000 1px solid; caret-color: #FFFFFF;"
	},
	"firstData": {
		"title": "24层魔塔",
		"name": "24",
		"version": "Ver 1.12",
		"floorId": "MT0",
		"hero": {
			"name": "勇士：",
			"lv": 1,
			"hpmax": 9999,
			"hp": 1000,
			"manamax": -1,
			"mana": 0,
			"atk": 11,
			"def": 11,
			"mdef": 0,
			"money": 0,
			"experience": 0,
			"equipment": [],
			"items": {
				"keys": {
					"yellowKey": 0,
					"blueKey": 0,
					"redKey": 0
				},
				"constants": {
					"book": 1
				},
				"tools": {},
				"equips": {}
			},
			"loc": {
				"direction": "down",
				"x": 6,
				"y": 10
			},
			"flags": {},
			"steps": 0
		},
		"startCanvas": [],
		"startText": [
			{
				"type": "pauseBgm"
			},
			{
				"type": "hideStatusBar"
			},
			{
				"type": "confirm",
				"default": true,
				"text": "是否观看片头？（四十秒）",
				"yes": [
					{
						"type": "setVolume",
						"value": 0,
						"time": 0
					},
					{
						"type": "playBgm",
						"name": "startText.mp3"
					},
					{
						"type": "setVolume",
						"value": 100,
						"time": 40000,
						"async": true
					},
					{
						"type": "scrollText",
						"text": "这是一个很古老的故事\n在很久很久以前，在遥远的西方大地上，\n有着这样一个王国，\n王国虽小但全国的人们都生活得非常幸福和快乐。\n突然有一天，从天空飞来一群可怕的怪物，\n它们来到皇宫，抢走了国王唯一的女儿。\n第二天，国王便向全国下达了紧急令，\n只要谁能将公主给找回来，他便将王位让给他。\n于是，全国的勇士们都出发了。\n他们的足迹走遍了全国的各个角落，\n可一点儿线索都没有找到，时间很快就过去了一个月。\n终于，在国王命令下达的第三十一天，\n一个从远方归来的人告诉国王，\n说在海边的一座小岛上，曾看到一群怪物出现过。\n勇士们又出发了，可是，却没有一个人可以回来，\n有幸回来的，都再也不敢去了。\n而我们的故事，便是从这里开始……",
						"time": 40,
						"lineHeight": 2
					}
				],
				"no": [
					{
						"type": "function",
						"function": "function(){\ncore.addItem('yellowKey');\ncore.addItem('blueKey');\ncore.addItem('redKey');\ncore.hideBlock(6, 9, 'MT0');\ncore.setBlock('fairy', 5, 9, 'MT0')\n}"
					}
				]
			},
			{
				"type": "setText",
				"title": [
					255,
					255,
					255,
					1
				],
				"background": [
					0,
					0,
					0,
					1
				]
			}
		],
		"shops": [
			{
				"id": "moneyShop1",
				"name": " ",
				"icon": "blueShop",
				"textInList": "三楼商店",
				"commonTimes": true,
				"mustEnable": false,
				"use": "money",
				"need": "25",
				"text": "想要增加你的能力吗？\\n如果你有25个金币，你可以任意选择一项：",
				"choices": [
					{
						"text": "增加800点生命",
						"effect": "status:hp+=800"
					},
					{
						"text": "增加4点攻击",
						"effect": "status:atk+=4"
					},
					{
						"text": "增加4点防御",
						"effect": "status:def+=4"
					}
				]
			},
			{
				"id": "moneyShop2",
				"name": " ",
				"icon": "blueShop",
				"textInList": "11楼商店",
				"commonTimes": true,
				"mustEnable": false,
				"use": "money",
				"need": "100",
				"text": "想要增加你的能力吗？\\n如果你有100个金币，\\n你可以任意选择一项：",
				"choices": [
					{
						"text": "增加4000点生命",
						"effect": "status:hp+=4000"
					},
					{
						"text": "增加20点攻击",
						"effect": "status:atk+=20"
					},
					{
						"text": "增加20点防御",
						"effect": "status:def+=20"
					}
				]
			},
			{
				"id": "expShop1",
				"name": " ",
				"icon": "man",
				"textInList": "五楼老人",
				"commonTimes": true,
				"mustEnable": false,
				"use": "experience",
				"need": "-1",
				"text": "你好，英雄的人类，只要你有足够的经验，我就可以让你变得更强大：",
				"choices": [
					{
						"text": "提升一级",
						"need": "100",
						"effect": "status:lv+=1;status:hp+=1000;status:atk+=7;status:def+=7"
					},
					{
						"text": "增加攻击5",
						"need": "30",
						"effect": "status:atk+=5"
					},
					{
						"text": "增加防御5",
						"need": "30",
						"effect": "status:def+=5"
					}
				]
			},
			{
				"id": "expShop2",
				"name": " ",
				"icon": "man",
				"textInList": "13楼老人",
				"commonTimes": true,
				"mustEnable": false,
				"use": "experience",
				"need": "-1",
				"text": "你好，英雄的人类，只要你有足够的经验，我就可以让你变得更强大：",
				"choices": [
					{
						"text": "提升三级",
						"need": "270",
						"effect": "status:lv+=3;status:hp+=3000;status:atk+=20;status:def+=20"
					},
					{
						"text": "增加攻击17",
						"need": "95",
						"effect": "status:atk+=17"
					},
					{
						"text": "增加防御17",
						"need": "95",
						"effect": "status:def+=17"
					}
				]
			},
			{
				"id": "keyShop1",
				"name": " ",
				"icon": "woman",
				"textInList": "购入钥匙",
				"commonTimes": true,
				"mustEnable": false,
				"use": "money",
				"need": "-1",
				"text": "相信你一定有特殊的需要，只要你有金币，我就可以帮你：",
				"choices": [
					{
						"text": "购买1把黄钥匙",
						"need": "10",
						"effect": "item:yellowKey+=1"
					},
					{
						"text": "购买1把蓝钥匙",
						"need": "50",
						"effect": "item:blueKey+=1"
					},
					{
						"text": "购买1把红钥匙",
						"need": "100",
						"effect": "item:redKey+=1"
					}
				]
			},
			{
				"id": "keyShop2",
				"textInList": "卖出钥匙",
				"mustEnable": false,
				"commonEvent": "回收钥匙商店"
			}
		],
		"levelUp": [
			{
				"need": "0",
				"title": "",
				"action": []
			}
		]
	},
	"values": {
		"lavaDamage": 100,
		"poisonDamage": 10,
		"weakValue": 20,
		"redJewel": 3,
		"blueJewel": 3,
		"greenJewel": 5,
		"redPotion": 200,
		"bluePotion": 500,
		"yellowPotion": 500,
		"greenPotion": 800,
		"breakArmor": 0.9,
		"counterAttack": 0.1,
		"purify": 3,
		"hatred": 2,
		"moveSpeed": 125,
		"animateSpeed": 300,
		"floorChangeTime": 100
	},
	"flags": {
		"enableFloor": true,
		"enableName": false,
		"enableLv": true,
		"enableHPMax": false,
		"enableMana": false,
		"enableMDef": false,
		"enableMoney": true,
		"enableExperience": true,
		"enableLevelUp": false,
		"levelUpLeftMode": false,
		"enableKeys": true,
		"enablePZF": false,
		"enableDebuff": false,
		"enableSkill": false,
		"flyNearStair": false,
		"flyRecordPosition": false,
		"pickaxeFourDirections": false,
		"bombFourDirections": false,
		"snowFourDirections": false,
		"bigKeyIsBox": true,
		"steelDoorWithoutKey": false,
		"itemFirstText": false,
		"equipment": false,
		"equipboxButton": false,
		"iconInEquipbox": false,
		"enableAddPoint": false,
		"enableNegativeDamage": false,
		"hatredDecrease": true,
		"betweenAttackCeil": false,
		"betweenAttackMax": false,
		"useLoop": false,
		"startUsingCanvas": false,
		"startDirectly": true,
		"statusCanvas": false,
		"statusCanvasRowsOnMobile": 3,
		"displayEnemyDamage": true,
		"displayCritical": true,
		"displayExtraDamage": false,
		"enableGentleClick": true,
		"potionWhileRouting": false,
		"ignoreChangeFloor": false,
		"canGoDeadZone": false,
		"enableMoveDirectly": true,
		"enableDisabledShop": true,
		"disableShopOnDamage": false,
		"checkConsole": false
	}
}