let 寶藏座標: Position[] = []
let position: Position = null
let flag = false
player.onChat("detect", function () {
    偵測寶藏大賽方塊(寶藏座標)
})
player.onChat("run", function () {
    寶藏搜尋大賽(5, -300, -400, 61, 63, 70, 250)
})
function 寶藏搜尋大賽 (treasure_num: number, random_x1: number, random_x2: number, random_y1: number, random_y2: number, random_z1: number, random_z2: number) {
    gameplay.title(mobs.target(ALL_PLAYERS), "尋找寶藏大賽", "快去尋找寶藏!")
    寶藏座標 = []
    player.execute(
    "/scoreboard objectives add \"找尋寶藏\" dummy"
    )
    player.execute(
    "/scoreboard objectives setdisplay sidebar \"找尋寶藏\""
    )
    for (let index = 0; index <= treasure_num - 1; index++) {
        position = world(randint(random_x1, random_x2), randint(random_y1, random_y2), randint(random_z1, random_z2))
        寶藏座標.push(position)
        blocks.place(IRON_BLOCK, position)
        player.execute(
        "/scoreboard players set " + "\"§a" + position + "\"" + " \"找尋寶藏\" 1"
        )
    }
    偵測寶藏大賽方塊(寶藏座標)
}
function 偵測寶藏大賽方塊 (treasure_pos_list: any[]) {
    flag = true
    while (flag) {
        flag = false
        for (let index = 0; index <= treasure_pos_list.length - 1; index++) {
            if (blocks.testForBlock(IRON_BLOCK, treasure_pos_list[index])) {
                player.execute(
                "/scoreboard players set " + "\"§a" + treasure_pos_list[index] + "\"" + "\"找尋寶藏\" 1"
                )
                flag = true
            } else {
                player.execute(
                "/scoreboard players set " + "\"§a" + treasure_pos_list[index] + "\"" + "\"找尋寶藏\" 0"
                )
                gameplay.title(mobs.target(ALL_PLAYERS), "§e寶藏被挖掉拉!", "§q玩家: " + mobs.near(
                mobs.target(NEAREST_PLAYER),
                treasure_pos_list[index],
                3
                ) + "拿到寶藏了!")
                treasure_pos_list.removeAt(index)
            }
        }
    }
    gameplay.title(mobs.target(ALL_PLAYERS), "§寶藏全部都被找到了", "遊戲結束")
}
