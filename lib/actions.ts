import supabase from './supabase';

export interface ProductData {
    id: number;
    name: string;
    link: string;
    description: string;
    tags: string[];
    tagline: string;
    imagekey: string;
}

export async function getRandomRow(excludedIds: number[]): Promise<{ row: ProductData } | null> {
    let randomId: number;
    let row: ProductData | null = null;
    randomId = Math.floor(Math.random() * (5015 - 6 + 1)) + 6;
    while (excludedIds.includes(randomId)) {
        randomId = Math.floor(Math.random() * (5015 - 6 + 1)) + 6;
    }
    console.log(randomId)
    const { data, error } = await supabase
        .from('products')
        .select('id, name, link, description, tags, tagline, imagekey')
        .eq('id', randomId)
        .single();

    if (error) {
        console.error('Error fetching data:', error);
        return null;
    }

    if (!excludedIds.includes(randomId)) {
        row = data;
    }

    if (row) {
        return { row };
    }
    return null;
}

export async function incrementViewCount(productId: number): Promise<void> {
    const { error } = await supabase.rpc('increment_view_count', { product_id: productId });

    if (error) {
        console.error('Error incrementing view count:', error);
    } else {
        console.log(`View count for product ID ${productId} incremented successfully.`);
    }
}

export async function submitSurvey(price: number, id : number): Promise<void> {
    const { error } = await supabase.rpc('submit_survey', { price, id });

    if (error) {
        console.error('Error submitting survey:', error);
    } else {
        console.log(`Survey submitted successfully. User would pay ${price}`);
    }
}