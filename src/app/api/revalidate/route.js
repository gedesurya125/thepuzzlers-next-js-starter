import { revalidateTag, revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

//? Runtime explanation: https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
export const runtime = 'edge';

//? In order to use the web hook we have to be aware of the next js configuration:
//? If "trailingSlash" is true, we have to use the webhook url with trailing slash
//? eg: https://example.com/api/revalidate?secret=123123123123123
//? Notice that we add trailing slash before the question mark

export async function GET(request) {
  const tag = request.nextUrl.searchParams.get('tag');
  const path = request.nextUrl.searchParams.get('path');
  const secret = request.nextUrl.searchParams.get('secret');
  const definedSecret = process?.env?.NEXT_REVALIDATION_SECRET;

  if (definedSecret && secret !== definedSecret) {
    console.log('invalid secret');
    return NextResponse.json({
      status: 200,
      revalidated: false,
      message: 'Invalid secret'
    });
  }

  if (!tag && !path)
    return NextResponse.json({
      status: 200,
      messages: 'no tag or path specified'
    });

  if (tag) {
    revalidateTag(tag);
  }
  if (path) {
    revalidatePath(path);
  }
  return NextResponse.json({ revalidated: true, now: Date.now(), tag, path });
}
