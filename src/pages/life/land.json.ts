import { regionLand } from '../../lib/travel';

/** Sharper coastlines for the travel map's zoomed regions; fetched on first zoom so the page stays light. */
export const GET = () => new Response(JSON.stringify(regionLand), { headers: { 'Content-Type': 'application/json' } });
