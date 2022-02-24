export const sankeyData = {
    nodes: [
      {name: "John"},
      {name: "Paul"},
      {name: "George"},
      {name: "Ringo"},
      {name: "Sgt. Peppers"},
      {name: "Abbey Road"},
      {name: "Let It Be"},
      {name: "John and Paul"}
    ],
    links: [
      {source: "John", target: "John and Paul", value: 17},
      {source: "Paul", target: "John and Paul", value: 16},
      {source: "John and Paul", target: "Sgt. Peppers", value: 11},
      {source: "George", target: "Sgt. Peppers", value: 1},
      {source: "John and Paul", target: "Abbey Road", value: 14},
      {source: "George", target: "Abbey Road", value: 2},
      {source: "Ringo", target: "Abbey Road", value: 1},
      {source: "John and Paul", target: "Let It Be", value: 8},
      {source: "John", target: "Let It Be", value: 2},
      {source: "George", target: "Let It Be", value: 2}
    ]
  }