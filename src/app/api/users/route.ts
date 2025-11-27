import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-static'
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const organization = url.searchParams.get('organization');
    
    // Validate required organization parameter
    if (!organization) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Organization parameter is required' 
        },
        { status: 400 }
      );
    }
    
    // Forward the request to your Flask backend
    const backendUrl = new URL('https://integrationcontent-production.up.railway.app/users');
    backendUrl.searchParams.set('organization', organization);
    
    const response = await fetch(backendUrl.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { 
          success: false,
          message: `Backend error: ${response.status}` 
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Return the users data
    return NextResponse.json({
      success: true,
      data: data,
      organization: organization
    }, { 
      status: 200 
    });
    
  } catch (error) {
    console.error('Users API proxy error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}