main.floors.MT9=
{
    "floorId": "MT9",
    "title": "第9层",
    "name": "第9层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,7": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,5": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "1,1": [
            {
                "type": "setText",
                "align": "center"
            },
            "\t[风之罗盘]该宝物可以随意在已经走过的楼层间自由上下。主角可使用G键在已经走过的楼层间进行跳跃。",
            {
                "type": "setText",
                "align": "left"
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 46, 21,  0,  1,  1,  1,  0,  0,  0,  1,  0,  3],
    [  3, 21,  0,214, 81,  0,  0,  0,  1,  0, 81,211,  3],
    [  3,  1, 81,  1,  1,  0,  1,  1,  1,  0,  1, 21,  3],
    [  3,  0,  0,  0,  1,  0,  1,  0,  0,  0,  1, 21,  3],
    [  3,  0,  0,  0, 83,  0,  1, 88,  1,  0,  1, 31,  3],
    [  3,  1, 82,  1,  1,  0,  1,  1,  1,  0,  1,  1,  3],
    [  3, 28,220, 27,  1,219,  1, 87,  1,  0,  1, 31,  3],
    [  3,  1, 81,  1,  1,  0,  0,  0, 81,  0,  1, 21,  3],
    [  3,211, 31,211,  1,  1, 82,  1,  1,  0,  1, 21,  3],
    [  3, 22,211, 31,  1,215,219,215,  1,  0, 81,211,  3],
    [  3, 39, 22,211, 81, 32,215, 32,  1,  0,  1,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        7,
        8
    ],
    "downFloor": [
        7,
        4
    ],
    "bgm": "area2.mp3"
}