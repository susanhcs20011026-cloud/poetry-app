import type { PageLoad } from './$types';
import type { PoetDetail } from '$lib';

export const load: PageLoad = async ({ fetch, params }) => {
    const poetName = params.name;

    const res = await fetch(`https://ochre.uchicago.edu/digs30005-poetry-database/poet/${poetName}`);
    
    const poetData: PoetDetail = await res.json();

    return { poetData };
};