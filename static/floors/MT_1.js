main.floors.MT_1=
{
    "floorId": "MT_1",
    "title": "地下层",
    "name": "地下层",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "startText.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "afterBattle": {
        "6,4": [
            {
                "type": "hideStatusBar"
            },
            {
                "type": "playSound",
                "name": "door.mp3"
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 0
            },
            {
                "type": "scrollText",
                "text": "大魔头被杀死了,公主也被救出了塔,蝶仙的精力也恢复了\n当勇士和公主一起走出塔来的时候，\n国王也带着军队来到了岛外。一切都是那么地平常。\n回国后，国王为勇士和公主举行了隆重而且盛大的婚礼，\n并且宣布由勇士继承国王的位置。\n从此以后，勇士和公主就幸福地生活在一起了",
                "time": 30000,
                "lineHeight": 5
            },
            {
                "type": "choices",
                "text": "\t[请选择计分方式：,hero] ",
                "choices": [
                    {
                        "text": "生命值(尽量大)",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:lv<200",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "Normal End(HighHP)"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "True End(HighHP)"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "攻防和(尽量大)",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "value": "status:atk+status:def"
                            },
                            {
                                "type": "if",
                                "condition": "status:lv<200",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "Normal End(HighAD)"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "True End(HighAD)"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "攻防和(尽量小)",
                        "condition": "status:atk+status:def<10088",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "value": "10088-status:atk-status:def"
                            },
                            {
                                "type": "if",
                                "condition": "status:lv<200",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "Normal End(LowAD)"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "True End(LowAD)"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  5,  5,  5, 86, 86, 86, 86, 86,  5,  5,  5,  3],
    [  3,  5,  5,  5, 86,189,190,191, 86,  5,  5,  5,  3],
    [  3,  5,  5,  5, 86,192,193,194, 86,  5,  5,  5,  3],
    [  3,  5,  5,  5, 86,195,257,196, 86,  5,  5,  5,  3],
    [  3,  5,  5,  5, 86, 86,  0, 86, 86,  5,  5,  5,  3],
    [  3,  5, 32, 32, 32, 32,247, 32, 32, 32, 32,  5,  3],
    [  3,  5,  5,  5,  5,  5,228,  5,  5,  5,  5,  5,  3],
    [  3,  5,  5,  5, 50,228,208,228, 50,  5,  5,  5,  3],
    [  3,  5,  5,  5,  5,  5,228,  5,  5,  5,  5,  5,  3],
    [  3,  5,  5,  5,  5, 32,247, 32,  5,  5,  5,  5,  3],
    [  3,  5,  5,  5,  5,  5,  0,  5,  5,  5,  5,  5,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": null,
    "downFloor": [
        6,
        11
    ]
}