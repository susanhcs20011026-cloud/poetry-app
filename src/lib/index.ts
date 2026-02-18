export interface PoetSummary {
    name: string;
    poemCount: number;
}
export interface Poem {
    title: string;
    poem: string[]; 
    lineCount: number;
}
export interface PoetDetail {
    name: string;
    poems: Poem[];
}
