main.floors.MT1=
{
    "floorId": "MT1",
    "title": "第1层",
    "name": "第1层",
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
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "2,11": [
            {
                "type": "setText",
                "align": "center"
            },
            "\t[圣光徽]该宝物可以查看怪物的基本情况。使用时按下键盘上的X键即可查看。",
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
    [  3, 87,  0, 21,201,202,201,  0,  0,  0,  0,  0,  3],
    [  3,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  3],
    [  3, 31,  0,209, 81,  0,  1, 31, 21, 31,  1,  0,  3],
    [  3, 21,209, 27,  1,  0,  1, 31, 21, 31,  1,  0,  3],
    [  3,  1, 81,  1,  1,  0,  1,  1,  1,203,  1,  0,  3],
    [  3, 21,210,  0,  1,  0, 81,217,201,205,  1,  0,  3],
    [  3, 28,  0, 22,  1,  0,  1,  1,  1,  1,  1,  0,  3],
    [  3,  1, 81,  1,  1,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,210,  0,  1,  1, 83,  1,  1,  1, 81,  1,  3],
    [  3, 31, 32, 21,  1, 23,  0,  0,  1, 21,213, 22,  3],
    [  3, 31, 45, 21,  1,  0, 88,  0,  1, 21, 21, 21,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "downFloor": [
        6,
        10
    ],
    "upFloor": [
        2,
        1
    ],
    "bgm": "area1.mp3"
}