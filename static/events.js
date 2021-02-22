var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [],
		"毒衰咒处理": [],
		"滑冰事件": [],
		"回收钥匙商店": [
			{
				"type": "while",
				"condition": "core.canUseQuickShop('keyShop2')==null",
				"data": [
					{
						"type": "choices",
						"text": "\t[ ,woman]哦，欢迎你的到来，如果你手里缺少金币，我可以帮你：",
						"choices": [
							{
								"text": "卖出一把黄钥匙（$7）",
								"action": [
									{
										"type": "if",
										"condition": "item:yellowKey",
										"true": [
											{
												"type": "addValue",
												"name": "status:money",
												"value": "7"
											},
											{
												"type": "addValue",
												"name": "item:yellowKey",
												"value": "-1"
											},
											{
												"type": "playSound",
												"name": "keySold.mp3"
											},
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "卖出一把蓝钥匙（$35）",
								"action": [
									{
										"type": "if",
										"condition": "item:blueKey",
										"true": [
											{
												"type": "addValue",
												"name": "status:money",
												"value": "35"
											},
											{
												"type": "addValue",
												"name": "item:blueKey",
												"value": "-1"
											},
											{
												"type": "playSound",
												"name": "keySold.mp3"
											},
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "卖出一把红钥匙（$70）",
								"action": [
									{
										"type": "if",
										"condition": "item:redKey",
										"true": [
											{
												"type": "addValue",
												"name": "status:money",
												"value": "70"
											},
											{
												"type": "addValue",
												"name": "item:redKey",
												"value": "-1"
											},
											{
												"type": "playSound",
												"name": "keySold.mp3"
											},
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开商店",
								"action": [
									{
										"type": "playSound",
										"name": "door.mp3"
									},
									{
										"type": "exit"
									}
								]
							}
						]
					},
					{
						"type": "playSound",
						"name": "keyUnsold.mp3"
					}
				]
			},
			"\t[woman]十四楼起必须携带风之罗盘才能访问全局商店"
		]
	}
}