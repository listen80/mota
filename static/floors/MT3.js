main.floors.MT3=
{
    "floorId": "MT3",
    "title": "第3层",
    "name": "第3ssssss层",
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
    "events": {
        "6,1": [
            "\t[商店老板,blueShop]\b[down]嗨，你好，英雄的勇士，\n这里是怪物商店，这里告诉你一些操作方法：使用大键盘上的V和K可以在菜单中进行选择，使用大键盘上的Enter或是Space键可以用来确认你的选择！\n同时，在商人或神秘老人处进行交易也是一样的操作方法！\n知道了吗？勇士！",
            {
                "type": "openShop",
                "id": "moneyShop1"
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 35,202, 21,  1,  7,131,  8,  1,  1,  1,  1,  3],
    [  3,202, 21,  0,  1,  0,  0,  0,  1,  0,205,  0,  3],
    [  3, 21,209,  0,  1,  1, 81,  1,  1,  0,  1,  0,  3],
    [  3,  1, 81,  1,  1,  0,209,  0,  1, 21,  1,202,  3],
    [  3,  0,  0,  0,  1,  1,  1,  0,  1, 21,  1,205,  3],
    [  3,201,  1,  0,205,202,205,  0,  1, 21,  1,202,  3],
    [  3,201,  1,  1,  1,  1,  1,  0,  0,  0,  1,  0,  3],
    [  3,  0,  0,  0,  0,  0,  1,  1, 81,  1,  1,  0,  3],
    [  3,  1,  1,  1,  1,205,  1,202,  0,202,  1,  0,  3],
    [  3,  1,  0,  0,  0,  0,  1, 27,205, 21,  1,  0,  3],
    [  3, 88,  0,  1,  1,  1,  1, 28, 32, 21,  1, 87,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        11,
        10
    ],
    "downFloor": [
        2,
        11
    ],
    "bgm": "area1.mp3"
}