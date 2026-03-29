import { GameConfig } from "./exp/model/exp.types";

export const limbusCompany: GameConfig = {
  id: "Limbus Company",
  name: '림버스 컴퍼니',

  exp: {
    tickets: {
      t1: 50,
      t2: 200,
      t3: 1000,
      t4: 3000,
    },

    ticketsName: {
      t1: '티켓 1',
      t2: '티켓 2',
      t3: '티켓 3',
      t4: '티켓 4',
    },

    dungeons: {
      d9: {
        name: "경험치 던전 9",
        reward: {
          t1: 0,
          t2: 6,
          t3: 6,
          t4: 6,
        },
        skipReward: {
          t1: 0,
          t2: 9,
          t3: 9,
          t4: 9,
        },
      },
      d8: {
        name: "경험치 던전 8",
        reward: {
          t1: 0,
          t2: 4,
          t3: 2,
          t4: 6,
        },
        skipReward: {
          t1: 0,
          t2: 6,
          t3: 3,
          t4: 9,
        },
      },
      d7: {
        name: "경험치 던전 7",
        reward: {
          t1: 0,
          t2: 4,
          t3: 4,
          t4: 4,
        },
        skipReward: {
          t1: 0,
          t2: 6,
          t3: 6,
          t4: 6,
        },
      },
      d6: {
        name: "경험치 던전 6",
        reward: {
          t1: 0,
          t2: 2,
          t3: 2,
          t4: 4,
        },
        skipReward: {
          t1: 0,
          t2: 3,
          t3: 3,
          t4: 6,
        },
      },
      d5: {
        name: "경험치 던전 5",
        reward: {
          t1: 0,
          t2: 1,
          t3: 6,
          t4: 2,
        },
        skipReward: {
          t1: 0,
          t2: 2,
          t3: 9,
          t4: 3,
        },
      },
      d4: {
        name: "경험치 던전 4",
        reward: {
          t1: 0,
          t2: 0,
          t3: 4,
          t4: 2,
        },
        skipReward: {
          t1: 0,
          t2: 0,
          t3: 6,
          t4: 3,
        },
      },
      d3: {
        name: "경험치 던전 3",
        reward: {
          t1: 0,
          t2: 4,
          t3: 4,
          t4: 0,
        },
        skipReward: {
          t1: 0,
          t2: 6,
          t3: 6,
          t4: 0,
        },
      },
      d2: {
        name: "경험치 던전 2",
        reward: {
          t1: 0,
          t2: 3,
          t3: 3,
          t4: 0,
        },
        skipReward: {
          t1: 0,
          t2: 5,
          t3: 5,
          t4: 0,
        },
      },
      d1: {
        name: "경험치 던전 1",
        reward: {
          t1: 6,
          t2: 7,
          t3: 0,
          t4: 0,
        },
        skipReward: {
          t1: 9,
          t2: 11,
          t3: 0,
          t4: 0,
        },
      },
    },

    expPerCharacter60: 251629,
  },
}