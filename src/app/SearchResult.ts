export class SearchResult {
    id: number;
    title: string;
    plot: string;
    posterUrl: string;
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.plot = obj && obj.plot || null;
        this.posterUrl = obj && obj.posterUrl || null;
    }
}
