import { links } from './links'

export async function GET(request) {
	const body = JSON.stringify(links)
	return new Response(body, {
		headers: { 'Content-Type': 'application/json' }
	})
}
