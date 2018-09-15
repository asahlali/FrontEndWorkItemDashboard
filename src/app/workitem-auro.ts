// : string]*" ==> replace all strings
// :(<? )[-0-9.]+ ==> replace all numbers
//:(<? )(true|false) ==> replace all booleans
// [] in json ==> Array<...>
export interface WorkitemAuro {
    id: string,
    summary: string,
    timeSpent: string,
    category: {
    name: string
    },
    description: string,
    creationDate: string,
    priority: {
    name: string
    },
    state: {
    name: string
    },
    owner: {
    name: string
    },
    target: {
    name: string
    },
    timeSheetEntries: Array<
    {
    timeSpent: string,
    timeCode: string
    }
    >
    workItems: string
}

