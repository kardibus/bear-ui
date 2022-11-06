export interface IProgram {
    id: number
    name: string
    work: boolean
    steps: {
        id: number
        step: number
        time: number
        fromDate: null | Date
        toDate: null | Date
        done: false
        temp: number
        prog_id: number
    }[]
}