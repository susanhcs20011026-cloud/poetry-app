import type { PageLoad } from './$types';
import type { PoetSummary } from '$lib';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch('https://ochre.uchicago.edu/digs30005-poetry-database');
    
    if (!res.ok) {
        console.error("API request failed");
        return { poets: [] };
    }

    const poets: PoetSummary[] = await res.json();
    return { poets }; 
};