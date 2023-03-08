import { me } from './me'

export async function GET(request) {
	return new Response(JSON.stringify(me), {
		headers: { 'Content-Type': 'application/json' }
	})
}
