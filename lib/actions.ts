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

    const { data: row, error } = await supabase
        .rpc('get_random_product', { excluded_ids: excludedIds })
        .single();

    if (error) {
        console.error('Error fetching data:', error);
        return null;
    }

    return { row: row as ProductData };
}

export async function incrementViewCount(productId: number): Promise<void> {
    const { error } = await supabase.rpc('increment_view_count', { product_id: productId });

    if (error) {
        console.error('Error incrementing view count:', error);
    }
    // else {
    //     console.log(`View count for product ID ${productId} incremented.`);
    // }
}

export async function submitSurvey(price: number, id: number): Promise<void> {
    const { error } = await supabase.rpc('submit_survey', { price, product_id: id });

    if (error) {
        console.error('Error submitting survey:', error);
    } else {
        console.log(`Survey submitted successfully. User would pay ${price}`);
    }
}