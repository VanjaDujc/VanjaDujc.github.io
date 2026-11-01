import type { APIRoute } from 'astro';
import { legacyPaths, redirectPage } from '../../legacy';

export const getStaticPaths = () => ['en', 'de', 'it'].flatMap((lang) => legacyPaths(lang));
export const GET: APIRoute = ({ props }) => redirectPage(props.to);
