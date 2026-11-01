import type { APIRoute } from 'astro';
import { legacyPaths, redirectPage } from '../legacy';

export const getStaticPaths = () => legacyPaths();
export const GET: APIRoute = ({ props }) => redirectPage(props.to);
