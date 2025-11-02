let 寶藏座標: Position[] = []
let position: Position = null
let flag = false
player.onChat("run", function () {
    寶藏搜尋大賽(5)
})
function 寶藏搜尋大賽 (treasure_num: number) {
    gameplay.title(mobs.target(ALL_PLAYERS), "尋找寶藏大賽", "快去尋找寶藏!")
    寶藏座標 = []
    player.execute(
    "/scoreboard objectives add \"找尋寶藏\" dummy"
    )
    player.execute(
    "/scoreboard objectives setdisplay sidebar \"找尋寶藏\""
    )
    for (let index = 0; index <= treasure_num - 1; index++) {
        position = world(randint(-300, -400), randint(61, 63), randint(70, 250))
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
        for (let index = 0; index <= treasure_pos_list.length; index++) {
            if (!(blocks.testForBlock(IRON_BLOCK, treasure_pos_list[index]))) {
                player.execute(
                "/scoreboard players set " + "\"§a" + treasure_pos_list[index] + "\"" + "\"找尋寶藏\" 0"
                )
            } else {
                player.execute(
                "/scoreboard players set " + "\"§a" + treasure_pos_list[index] + "\"" + "\"找尋寶藏\" 1"
                )
                flag = true
            }
        }
    }
}
